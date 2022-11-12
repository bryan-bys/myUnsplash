import React, { useRef } from "react";
import BtnDelete from "./BtnDelete";
const Uid = Date.now() + Math.random() * 100;

const Favs = ({ photoUrl, setPhotoUrl }) => {
  const favCurrentIteration = useRef({ value: 0 });
  const favPhotoLists = useRef([]);
  (() => {
    const lists = [[], [], []];
    photoUrl.forEach((el) => {
      if (favCurrentIteration.current.value === 3) {
        favCurrentIteration.current.value = 0;
      }
      lists[favCurrentIteration.current.value].push(el);
      favCurrentIteration.current.value += 1;
    });
    favPhotoLists.current = lists;
  })();

  return (
    <>
      {favCurrentIteration.current.value > 0 ? (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="photos-container">
              {favPhotoLists.current.map((list, index) => {
                return (
                  <div className="photos-section" key={index}>
                    <div className="photos-grid">
                      {list.map((photo) => {
                        return (
                          <div
                            className="photo"
                            key={Uid + index}
                            style={{
                              position: "relative",
                            }}
                          >
                            <img src={photo.img} alt={index} />

                            <BtnDelete
                              photoUrl={photoUrl}
                              setPhotoUrl={setPhotoUrl}
                              id={photo.img}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <h3>no tienes fotografias favoritas todavia</h3>
      )}
    </>
  );
};

export default Favs;
