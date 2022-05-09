import React from "react";
import Meaning from "./meaning"; 
import Phonetic from "./phonetic"; 
import "./results.css"; 

export default function Results(props){
if (props.results) {
  return(
    <div className="Results">
      <div className="row">
        <section className="results__section">
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
                  <section key={index} className="meaning__section">
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