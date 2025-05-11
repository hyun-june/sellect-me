import { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);

  const handleToggleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="liked_btn" onClick={handleToggleLike}>
      <span className={`star-icons ${isLike ? "liked_color" : ""}`}>★</span>
    </div>
  );
};

export default LikeButton;
