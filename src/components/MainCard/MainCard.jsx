import { Row, Col, Container } from "react-bootstrap";
import "./MainCard.css";

const MainCard = () => {
  const pictureData = [
    "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
    "https://image.utoimage.com/preview/cp872722/2022/12/202212008519_206.jpg",
    "https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg",
    "https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg",
    "https://blog.kakaocdn.net/dn/ckVyhP/btqCUx8S0Zr/ZL7wLO5ht5WyyURJ6Fbt2k/img.jpg",
  ];
  return (
    <Container>
      <Row className="card_container">
        {pictureData.map((item) => (
          <Col className="card_item">
            <img src={item}></img>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MainCard;
