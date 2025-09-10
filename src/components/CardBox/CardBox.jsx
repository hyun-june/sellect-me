import InnerCard from "./components/InnerCard/InnerCard";
import "./CardBox.css";

const CardBox = ({ title, cardKeyword, type = "none", ...props }) => {
  return (
    <div className="title_box">
      <div className="title_box_inner">
        <h4>{title}</h4>
        <span>
          <a href="/model">More +</a>
        </span>
      </div>

      <InnerCard cardKeyword={cardKeyword} type={type} />
    </div>
  );
};

export default CardBox;
