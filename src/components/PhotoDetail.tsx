import { useParams } from "react-router";
import { useEffect, useState } from "react";

const PhotoDetail = () => {
  const [photo, setPhoto] = useState<{ author: string; download_url: string }>({
    author: "",
    download_url: "",
  });
  const params = useParams();

  useEffect(() => {
    async function fetchPhotoDetail() {
      try {
        await fetch(`https://picsum.photos/id/${params.id}/info`)
          .then((response) => response.json())
          .then((data) => {
            setPhoto(data);
          });
      } catch (e) {
        console.error("Error fetching api data", e);
      }
    }
    fetchPhotoDetail();
  }, [params]);

  return (
    <div className="PhotoDetail">
      <div>Author: {photo.author}</div>
      <img src={photo.download_url} alt={photo.author} />
    </div>
  );
};

export default PhotoDetail;
