import { useRef } from "react";
import Photos from "./Photos";
import "./styles.css";

const PhotoGrid = ({
  photos,
  handleDownload,
  setPhotoUrl,
  photoUrl,
  handlePage,
}) => {
  const currentIteration = useRef({ value: 0 });
  const photoLists = useRef([]);

  (() => {
    const lists = [[], [], []];
    photos.forEach((el) => {
      if (currentIteration.current.value === 3) {
        currentIteration.current.value = 0;
      }
      lists[currentIteration.current.value].push(el);
      currentIteration.current.value += 1;
    });
    photoLists.current = lists;
  })();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="photos-container">
          {photoLists.current.map((list, index) => {
            return (
              <div className="photos-section" key={index}>
                <div className="photos-grid">
                  {list.map((photo) => {
                    return (
                      <Photos
                        photo={photo.img}
                        key={photo.id}
                        id={photo.id}
                        handleDownload={handleDownload}
                        setPhotoUrl={setPhotoUrl}
                        photoUrl={photoUrl}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="more" onClick={handlePage}>
        <i class="fa-solid fa-plus"></i> cargar mas
      </button>
    </div>
  );
};

export default PhotoGrid;
