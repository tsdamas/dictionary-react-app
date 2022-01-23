import React from "react";
import Meaning from "./Meaning"; 
import "./Results.css"; 

export default function Results(props){
if (props.results) {
  return(
  <div className="results">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
    <h2>{props.results.word}</h2>
    <h4>Definition</h4>
    <hr />
    </div>
    {props.results.meanings.map(function(meaning, index) {
      return (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>   
      );
    })}
      </div>
    </div>
  </div>
  );
} else {
  return null;
}
}