import { useState } from "react";
import "./Search.css";

function Search({search,setSearch}) {

  var handleInput = (e) => {
    let query = e.target.value.toLowerCase();
    setSearch(query);
  };
  console.log(search);

  return (
    <div className="search">
      <label className="input">
        <input
          type="search"
          value={search}
          placeholder="Enter User name...."
          onChange={handleInput}
          className="input"
        />
      </label>
    </div>
  );
}

export default Search;
