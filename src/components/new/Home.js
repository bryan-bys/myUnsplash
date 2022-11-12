import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Photogrid from "./Photogrid";
import Favs from "./Favs";

const KEY = `-XRvPsOWhevivDF7ZDZfUocFDQi_Yzov_q_v3Bi20JE`;
let myPhotoInit = JSON.parse(localStorage.getItem("photoUrl")) || [];

const Home = () => {
  const [query, setQuery] = useState(null);
  const [pages, setPages] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [pagenumber, setPagenumber] = useState(1);
  const [photoUrl, setPhotoUrl] = useState(myPhotoInit);
  const [homeInit, setHomeInit] = useState(false);

  const handleSearch = (data) => {
    setQuery(data);
  };

  const handleFav = () => {
    setPages(1);
    setQuery(null);
    setHomeInit(true);
  };
  const handleInit = () => {
    setHomeInit(false);
    setPages(0);
    setQuery(null);
  };

  useEffect(() => {
    setPhotos([]);
    const getUnsplashData = async (url) => {
      if (query === null) return;
      setPages(0);
      try {
        let res = await fetch(url),
          json = await res.json();
        console.log(json);
        json.results.forEach((el) => {
          let thePhoto = {
            img: el.urls.small_s3,
            id: el.id,
          };
          setPhotos((photos) => [...photos, thePhoto]);
          setHomeInit(true);
        });
      } catch (error) {}
    };
    getUnsplashData(
      `https://api.unsplash.com/search/photos?page=${pagenumber}&per_page=9&query=${query}&client_id=${KEY}`
    );
  }, [query, pagenumber]);

  const handlePage = (e) => {
    setPagenumber(pagenumber + 1);
  };
  return (
    <>
      <SearchForm
        handleSearch={handleSearch}
        handleFav={handleFav}
        handleInit={handleInit}
        homeInit={homeInit}
      />

      {query === null ? null : (
        <Photogrid
          photos={photos}
          setPhotoUrl={setPhotoUrl}
          photoUrl={photoUrl}
          handlePage={handlePage}
        />
      )}
      {pages === 1 ? (
        <Favs photoUrl={photoUrl} setPhotoUrl={setPhotoUrl} />
      ) : null}
    </>
  );
};

export default Home;
