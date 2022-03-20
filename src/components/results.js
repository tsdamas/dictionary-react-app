import React from "react";
import Meaning from "./meaning"; 
import Phonetic from "./phonetic"; 
import "./results.css"; 

export default function Results(props){
if (props.results) {
  return(
    <div className="Results">
      <div className="row d-flex justify-content-between">
    <section className="col-sm-2">
      <h2>
      {props.results.word}
    </h2>
    {props.results.phonetics.map(function (phonetic, index){
      return(
        <div key={index}>
          <Phonetic phonetic={phonetic} />
        </div>
      );
    })}
    </section>
    {props.results.meanings.map(function(meaning, index) {
      return (
        <section key={index} className="col-md-3">
          <Meaning meaning={meaning} />   
        </section>
      );
    })}
    </div>
    </div>
  );
} else {
  return null;
}
}