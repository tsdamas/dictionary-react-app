import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
  
  let [keyword, setKeyword] = useState(""); 
  let [results, setResults] = useState(null);

  function handleResponse(response){
    setResults(response.data[0]);
  }

  function search() {
    //documentation:https://dictionaryapi.dev
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
     <form onSubmit={handleSubmit}>
       <input type="search" placeholder="Search word" autoFocus={true} onChange={handleKeywordChange} /> 
     </form>
     </section>
     <Results results={results} />
    </div>
  )
}