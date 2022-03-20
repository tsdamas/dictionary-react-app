import React from "react"; 
import "./synonyms.css"; 

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
      {props.synonyms.map(function (synonym, index){
        return(
        <li key={index}><a className="synonym-link" href="home">
        {synonym}
        </a></li>
        );
      })}
      </ul>
    );
  } else {
    return null
  }
}