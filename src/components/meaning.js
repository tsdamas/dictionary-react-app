import React from "react";
import Synonyms from "./synonyms"; 
import "./meaning.css"; 

export default function Meaning(props){
  return (
    <div className="Meaning">
    <h5>{props.meaning.partOfSpeech}</h5>
    {props.meaning.definitions.map(function(definition, index){
      return (
    <div key={index}>
          <div className="definition">
            {definition.definition}
          </div>

          <div className="example">
          <em>{definition.example}</em>
          </div>

          <Synonyms synonyms={definition.synonyms} />
      </div>
      );
    })}
    </div>
  );
}