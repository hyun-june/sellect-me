import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InnerCard.css";
import { useEffect, useState } from "react";

const cardData = {
  NewUpdateSelleb: [
    "https://cdn.pixabay.com/photo/2021/03/26/15/21/beautiful-6126170_1280.jpg",
    "https://media.istockphoto.com/id/2059137136/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EC%97%90%EC%84%9C-%EA%B2%80%EC%9D%80-%EC%96%91%EB%B3%B5%EC%9D%84-%EC%9E%85%EC%9D%80-%EA%B8%88%EB%B0%9C-%EC%97%AC%EC%9E%90-%ED%8C%A8%EC%85%98-%EB%AA%A8%EB%8D%B8.jpg?s=2048x2048&w=is&k=20&c=NsTqYOw9emraS_r68wB5x6ZSiFa5f8BPDk9DBqB1eec=",
    "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
  ],
  FittingModelFeMale: [
    "https://media.spotlite.global/images/talents/2640/compressed-headshot/6ecdf05d-d7c4-40b4-ba44-6ea4c51f3137.webp",
    "https://media.spotlite.global/images/talents/1426/thumbnails/headshot_240610_%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%B5%E1%84%82%E1%85%B5%E1%86%B7_3559.webp",
    "https://media.spotlite.global/images/talents/1128/thumbnails/headshot_A64A3CEB-CB08-487B-9443-BC76981E6E2F.webp",
    "https://media.spotlite.global/images/talents/541/compressed-headshot/fa0d3bd0-9522-4774-9212-f6d19594dc5a.webp",
    "https://media.spotlite.global/images/talents/1034/compressed-headshot/cfb5c17a-0ffc-4d58-b044-efc7fd617812.webp",
    "https://media.spotlite.global/images/talents/558/thumbnails/headshot_headshot_558.webp",
    "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
  ],
  FittingModelMale: [],
};

const InnerCard = ({ cardKeyword, ...props }) => {
  const [maxCard, setMaxCard] = useState(8);
  const [startIndex, setStartIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const cards = cardData[cardKeyword] || [];

  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;

      if (width <= 576) setMaxCard(2);
      else if (width <= 768) setMaxCard(3);
      else if (width <= 992) setMaxCard(4);
      else if (width <= 1200) setMaxCard(5);
      else setMaxCard(6);
    };

    updateCardCount(); // 초기 설정
    window.addEventListener("resize", updateCardCount);

    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFocused) {
        setStartIndex((prevIndex) => (prevIndex + maxCard) % cards.length);
      }
    }, 3000); // 30초마다

    return () => clearInterval(interval);
  }, [cards.length, maxCard, isFocused]);

  const visibleCards = [];
  for (let i = 0; i < maxCard; i++) {
    const index = (startIndex + i) % cards.length;
    visibleCards.push(cards[index]);
  }

  return (
    <div>
      <Row className="card_container">
        {visibleCards.map((item, index) => (
          <Col
            className="card_item"
            key={index}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
          >
            <Link to="/mypage/selleb">
              <img src={item} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InnerCard;
