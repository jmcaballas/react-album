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

  return (
    <div>
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="photo-container">
            <img src={photo.download_url} width="200" alt={photo.author} />
          </div>
        );
      })}
    </div>
  );
};

export default Album;
