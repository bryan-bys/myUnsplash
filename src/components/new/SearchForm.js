import React, { useState } from "react";
import homeImageOne from "../../assets/homeOne.jpg";
import homeImageTwo from "../../assets/homeTwo.jpg";
import homeImageThree from "../../assets/homeThree.jpg";

const initialSearch = "";
const SearchForm = ({ handleSearch, handleFav, homeInit, handleInit }) => {
  const [USearch, setUSearch] = useState(initialSearch);

  const handleChange = (e) => {
    setUSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(USearch);
    setUSearch(initialSearch);
  };

  return (
    <div className={!homeInit ? "background" : "background-two"}>
      <div className={!homeInit ? "form-content" : "form-content-two"}>
        <button
          onClick={handleInit}
          className={!homeInit ? "title" : "title-two"}
        >
          My Unsplash
        </button>
        <form
          className={!homeInit ? "form" : "form-two"}
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            name="unsplash-S"
            placeholder="Busca fotos de alta resolucion"
            autoComplete="off"
            className={!homeInit ? "search" : "search-two"}
            onChange={handleChange}
            value={USearch}
            spellCheck={false}
          />
          <input
            className={!homeInit ? "send-init" : "send"}
            type="submit"
            onSubmit={handleSubmit}
          />
        </form>
        <button
          onClick={handleFav}
          className={!homeInit ? "favs-init" : "favs"}
        >
          <i
            className={
              !homeInit ? "fa-regular fa-heart h-init" : "fa-regular fa-heart h"
            }
          ></i>
          Favoritos
        </button>
      </div>
      <div className={!homeInit ? "home-photos-init" : "home-photos"}>
        <img src={homeImageOne} alt="uno" />
        <img src={homeImageTwo} alt="dos" />
        <img src={homeImageThree} alt="tres" />
      </div>
    </div>
  );
};

export default SearchForm;
