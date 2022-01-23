import React from "react";
import "./Meaning.css"; 

export default function Meaning(props){
  return (
    <div className="Meaning">
    <h5>{props.meaning.partOfSpeech}</h5>
    {props.meaning.definitions.map(function(definition, index){
      return (
    <div key={index}>
      <div className="col-sm-9">
        <div className="row">
          <div class="col-8 col-sm-6">
          <p>
            {definition.definition}
          </p>
            </div>
          <br />
          <div class="col-4 col-sm-6">
          <p>
            <em>{definition.example}</em>
          </p>
              </div>
            </div>
          </div>
      </div>
      );
    })}
  </div>
  );
}