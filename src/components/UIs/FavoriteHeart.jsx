import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

function FavoriteHeart({ defaultChecked, onToggle }) {
  const [liked, setLiked] = useState(defaultChecked);

  const handleClick = () => {
    setLiked(!liked);
    onToggle?.(!liked);
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
