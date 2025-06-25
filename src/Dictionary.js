import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function getResponse(response) {
    setResults(response.data);
  }

  function getImages(response) {
    setImages(response.data);
  }

  function search() {
    let apiKey = "5btac2eb2ed52b236021789ofe9a3348";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(getResponse);

    let imgApiKey = "5btac2eb2ed52b236021789ofe9a3348";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(getImages);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>
            {" "}
            <span>My</span> Dictionary
          </h1>
          <h3>What word would you like to look up? 🤓 </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={changeKeyword}
              className="searchBox"
              placeholder="Enter a word.."
            />
            <input type="submit" className="searchButton" />
          </form>
        </section>
        <Results results={results} />
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
