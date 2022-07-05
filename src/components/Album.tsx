import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import { Photos } from "../interfaces/Photos";
import "./Album.css";

const Album = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=20`)
          .then((response) => response.json())
          .then((data) => {
            setPhotos((prevState) => {
              return [...prevState, ...data];
            });
            setLoading(false);
          });
      } catch (e) {
        console.error("Error fetching api data", e);
      }
    }
    fetchData();
  }, [pageNumber]);

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="Album">
      <h1>Photo Album</h1>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => {
          return (
            <div key={photo.id} className="photo-container">
              <img src={photo.download_url} width="200" alt={photo.author} />
            </div>
          );
        })}
      </Masonry>
      {loading && <h2>Loading...</h2>}
      <div className="btn-container">
        <button
          onClick={(e) => {
            e.preventDefault();
            setPageNumber((prevState) => {
              return prevState + 1;
            });
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Album;
