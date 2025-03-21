import { useState } from "react";
import "./ModelCard.css";

const ModelCard = ({ ...props }) => {
  const { img, name, index } = props;

  const [liked, setLiked] = useState(false);
  const handleLiked = () => {
    setLiked(!liked);
  };
  return (
    <div className="model_card">
      <img src={img} />
      <span onClick={handleLiked} className={`${liked ? "liked_color" : ""}`}>
        ★
      </span>
      <h5>{name}</h5>
    </div>
  );
};

export default ModelCard;
