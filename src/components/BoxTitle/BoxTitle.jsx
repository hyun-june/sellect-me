import "./BoxTitle.css";
import MainCard from "./../MainCard/MainCard";

const BoxTitle = ({ title, cardData, ...props }) => {
  return (
    <div className="title_box">
      <div className="title_box_inner">
        <h4>{title}</h4>
        <span>
          <a href="/">More +</a>
        </span>
      </div>

      <MainCard cardData={cardData} />
    </div>
  );
};

export default BoxTitle;
