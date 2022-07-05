import { useEffect } from "react";

const Album = () => {
  const [photos, setPhotos] = useEffect([]);

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
};

export default Album;
