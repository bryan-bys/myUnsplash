import React, { useEffect, useState } from "react";

const KEY = `-XRvPsOWhevivDF7ZDZfUocFDQi_Yzov_q_v3Bi20JE`;

const BtnPhotos = ({ id, setPhotoUrl, photoUrl }) => {
  const [photoId, setPhotoId] = useState(null);

  useEffect(() => {
    localStorage.setItem("photoUrl", JSON.stringify(photoUrl));
    if (photoId === null) return;
    const getPhotoId = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      let resultado = photoUrl.find((el) => el.img === json.url);
      if (resultado) {
        return alert("ya has agregado esta fotografia a favoritos");
      }

      let currentPhoto = {
        img: json.url,
      };
      setPhotoUrl((photoUrl) => [...photoUrl, currentPhoto]);
      localStorage.setItem("photoUrl", JSON.stringify(photoUrl));
      alert("se ha añadido a favoritos");
    };
    setPhotoId(null);

    getPhotoId(
      `https://api.unsplash.com/photos/${photoId}/download?client_id=${KEY}`
    );
  }, [photoId, setPhotoUrl, photoUrl]);

  const handleSave = () => {
    setPhotoId(id);
  };
  return (
    <>
      <button className="btn-save" onClick={handleSave} id={id}>
        <i className="fa-regular fa-heart "></i>
      </button>
    </>
  );
};

export default BtnPhotos;
