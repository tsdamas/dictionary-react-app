import React from "react";
import "./photos.css"

export default function Photos (props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
        {props.photos.map(function (photo, index){
          return (
          <div className="col-sm-4" key={index}>
           <a href={photo.src.original} target="_blank" rel="noopener noreferrer"> 
           <img src={photo.src.landscape} className="img-fluid" alt=""/>
          </a>
          </div>
          )
          })}
          </div>
      </section>
    );
  } else {
    return null; 
  }
}