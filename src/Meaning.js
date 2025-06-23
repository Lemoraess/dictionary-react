import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>Definition: {props.meaning.definition}</p>
      <em>Example: {props.meaning.example}</em>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
