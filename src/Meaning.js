import React from "react";
import "./Meaning.css"; 
import Synonyms from "./Synonyms"; 

export default function Meaning(props){
  return (
    <div className="Meaning">
    <h5>{props.meaning.partOfSpeech}</h5>
    {props.meaning.definitions.map(function(definition, index){
      return (
    <div key={index}>
          <p>
            {definition.definition}
          </p>
          <br />
          <p>
          <em>{definition.example}</em>
          </p>
          <br />
          <Synonyms synonyms={definition.synonyms} />
      </div>
      );
    })}
  </div>
  );
}