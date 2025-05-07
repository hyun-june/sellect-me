import "./ModelCard.css";

const ModelCard = ({ ...props }) => {
  const { img, name, isLiked, onToggleLike } = props;

  return (
    <div className="model_card">
      <a href="/">
        <img src={img} />
      </a>
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
