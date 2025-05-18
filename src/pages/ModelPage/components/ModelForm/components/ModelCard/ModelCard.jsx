import { Link } from "react-router-dom";
import "./ModelCard.css";

const ModelCard = ({ ...props }) => {
  const { img, name, isLiked, onToggleLike } = props;

  return (
    <div className="model_card">
      <Link to={`${"/mypage/selleb"}`}>
        <img src={img} />
      </Link>
      <span
        onClick={onToggleLike}
        className={`${isLiked ? "liked_color" : ""}`}
      >
        ★
      </span>
      <h5>{name}</h5>
    </div>
  );
};

export default ModelCard;
