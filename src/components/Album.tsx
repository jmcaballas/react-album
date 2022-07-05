import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import { Photos } from "../interfaces/Photos";

const Album = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(`https://picsum.photos/v2/list?page=1&limit=20`)
          .then((response) => response.json())
          .then((data) => {
            setPhotos(data);
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
    </div>
  );
};

export default Album;
