import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PhotoDetail.css";

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
      <Link to="/">
        <h1>Photo Album</h1>
      </Link>
      <img src={photo.download_url} alt={photo.author} className="photo" />
      <h2 className="author">Author: {photo.author}</h2>
    </div>
  );
};

export default PhotoDetail;
