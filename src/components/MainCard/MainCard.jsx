import { Row, Col, Container } from "react-bootstrap";
import "./MainCard.css";

const MainCard = ({ cardData, ...props }) => {
  return (
    <Container>
      <Row className="card_container">
        {cardData.map((item) => (
          <Col className="card_item">
            <img src={item}></img>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MainCard;
