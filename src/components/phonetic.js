import React from "react";
import "./phonetic.css"; 

export default function Phonetic (props){
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-volume-up"></i>
      </a>
      <span className="text">
        {props.phonetic.text} 
        </span>
     </div>

  )
}

