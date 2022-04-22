import React from "react";
import Meaning from "./meaning"; 
import Phonetic from "./phonetic"; 
import "./results.css"; 

export default function Results(props){
if (props.results) {
  return(
    <div className="Results">
      <div className="row">
        <section className="col-sm-3 results__section">
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
                {/*Force next columns to break to new line at md breakpoint and up*/}
                {props.results.meanings.map(function(meaning, index) {
                  return (
                  <section key={index} className="col-sm-3 meaning__section">
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