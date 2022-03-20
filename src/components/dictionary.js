import React, {useState} from "react";
import axios from "axios";
import Results from "./results";
import Photos from "./photos"; 
import "./dictionary.css";


export default function Dictionary(props){
  
  let [keyword, setKeyword] = useState(props.defaultKeyword); 
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null); 

  function handleDictionaryResponse(response){
    setResults(response.data[0]);
  }

  function handlePexelsResponse (response){
  setPhotos(response.data.photos); 
  }

  function search() {
    //documentation:https://dictionaryapi.dev
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001f1307c3700564c5292f4bb2e00efa5fc"; 
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  
  }

  function handleSubmit (event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange (event){
   setKeyword(event.target.value);
  }  

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
        <div className="row d-flex .justify-content-sm-around">
          <div className="col-sm-6">
          <h1><span>Diction</span><span>ary</span></h1>
          </div>
          <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <input 
            class="form-control" 
            type ="search" 
            list="datalistOptions" 
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
            placeholder="Type to search..." />
          </form>
          </div>
          
          <br />
       </div>
        </section>
        <Results results={results} />
       <div className="row">
        < Photos photos={photos} />
        </div>
    </div>
    );
  } else {
    load();
    return "Loading";
  }
}