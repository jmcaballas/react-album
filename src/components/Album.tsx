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
      <h1>Album Component</h1>
    </div>
  );
};

export default Album;
