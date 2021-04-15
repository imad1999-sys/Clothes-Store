import React, { useState } from "react";
import "../Assets/CSS/styles.css";
import SearchIcon from "../Icons/SearchIcon.jsx";
const BaseAutocompleteForm = () => {
  const [data, setData] = useState([]);
  const search = async (key) => {
    console.warn(key);
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json();
    setData(result);
    console.warn(result);
  };
  return (
    <form class="d-flex form">
      <div className="form-div">
        <input
          class="form-input me-2"
          list="datalistOptions"
          id="exampleDataList"
          onChange={(e) => search(e.target.value)}
        />
        <label for="" className="form-label">
          Search
        </label>
        <datalist className=" list-auto" id="datalistOptions">
          {data.map((key) => (
            <option value={key.name} />
          ))}
        </datalist>
      </div>
    </form>
  );
};
export default BaseAutocompleteForm;
