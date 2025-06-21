import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function getResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiKey = "5btac2eb2ed52b236021789ofe9a3348";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=sunset&key=${apiKey}`;
    axios.get(apiUrl).then(getResponse);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={changeKeyword} />
        <input type="submit" />
      </form>
    </div>
  );
}
