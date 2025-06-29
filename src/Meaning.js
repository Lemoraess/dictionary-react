import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p className="definition">Definition: {props.meaning.definition}</p>
      <p className="example">Example: {props.meaning.example}</p>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
