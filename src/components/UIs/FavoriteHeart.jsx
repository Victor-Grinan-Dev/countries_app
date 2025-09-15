import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { addToFavorite, deleteFromFavorite } from "../../features/countries/countriesSlice";  
import { useDispatch } from "react-redux";

function FavoriteHeart({ countryCode }) {
  const dispatch = useDispatch();
  const [favorites, addFavorite, removeFavorite] = useLocalStorage("favoriteCountries", []);
  const liked = !!favorites.includes(countryCode);

  const handleClick = () => {
    if (liked) {
      removeFavorite(countryCode);
      dispatch(deleteFromFavorite(countryCode));
    } else {
      addFavorite(countryCode);
      dispatch(addToFavorite(countryCode));
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      animate={{ scale: liked ? 1.2 : 1, color: liked ? "#ff4d6d" : "#aaa" }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onClick={handleClick}
      className="p-1"
    >
      <Heart
        fill={liked ? "#ff4d6d" : "transparent"}
        strokeWidth={2}
        size={24}
      />
    </motion.button>
  );
}

export default FavoriteHeart;
