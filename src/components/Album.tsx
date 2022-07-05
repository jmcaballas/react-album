import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import { Photos } from "../interfaces/Photos";

const Album = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await fetch(`https://picsum.photos/v2/list?page=1&limit=20`)
          .then((response) => response.json())
          .then((data) => {
            setPhotos(data);
            setLoading(false);
          });
      } catch (e) {
        console.error("Error fetching api data", e);
      }
    }
    fetchData();
  }, []);

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <h1>Photo Album</h1>
      {loading && <h2>Loading...</h2>}
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
      <div className="btn-container">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default Album;
