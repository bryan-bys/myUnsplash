import React from "react";
import BtnPhotos from "./BtnPhotos";

const Photos = ({ photo, id, setPhotoUrl, photoUrl }) => {
  return (
    <>
      <div className="photo" style={{ display: "flex", position: "relative" }}>
        <img
          name={"img"}
          src={photo}
          alt={id}
          style={{
            borderRadius: "10px",
            marginTop: "20px",
          }}
        />
        <BtnPhotos
          id={id}
          urlDirection={photo}
          setPhotoUrl={setPhotoUrl}
          photoUrl={photoUrl}
        />
      </div>
    </>
  );
};

export default Photos;
