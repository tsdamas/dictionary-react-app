import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
  
  let [keyword, setKeyword] = useState(""); 
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response){
    setResults(response.data[0]);
  }

  function handlePexelsResponse (response){
  console.log(response.data); 
  }

  function search() {
    //documentation:https://dictionaryapi.dev
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001f1307c3700564c5292f4bb2e00efa5fc"; 
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`
    let headers = {hearders: {Authorization: `Bearer ${pexelsApiKey}`}};
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
  
  }

  function handleSubmit (event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange (event){
   setKeyword(event.target.value);
  }  

  return(
    <div className="Dictionary">
      <section>
        <h2> 
          What are you looking for? 
        </h2>
     <form onSubmit={handleSubmit}>
       <input type="search" placeholder="Search word" autoFocus={true} onChange={handleKeywordChange} /> 
     </form>
     </section>
     <Results results={results} />
    </div>
  )
}