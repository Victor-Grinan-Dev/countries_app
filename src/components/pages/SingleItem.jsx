import { useLocation } from "react-router-dom";
import { getUnsplashPhoto } from "../../services/unsplash";
import { useEffect, useState } from "react";

const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function SingleItem() {
  const [countryImage, setCountryImage] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const part = location.pathname.split("/").filter(Boolean);
  const name = part[1]; // country name from URL

  useEffect(() => {
    async function fetchImage() {
      try {
        const data = await getUnsplashPhoto(name);

        if (data && data.urls) {
          setCountryImage(data.urls.small);
        } else {
          setError("No image found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch from Unsplash");
      }
    }

    if (name) {
      fetchImage();
    }
  }, [name]);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div style={{ color: "white" }}>
      {countryImage ? (
        <img src={countryImage} alt={name} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleItem;


