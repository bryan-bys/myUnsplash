import React from "react";

const BtnDelete = ({ id, photoUrl, setPhotoUrl }) => {
  const handleDelete = () => {
    let result = photoUrl.filter((el) => el.img !== id);
    let isDelete = window.confirm("desea eliminar esta foto de favoritos");
    if (isDelete) {
      setPhotoUrl(result);
      localStorage.setItem("photoUrl", JSON.stringify(result));
    }
  };
  return (
    <>
      <button onClick={handleDelete} className="btn-delete">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </>
  );
};

export default BtnDelete;
