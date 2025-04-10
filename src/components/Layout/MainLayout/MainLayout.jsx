import { Container } from "react-bootstrap";
import Navigation from "./../../Navigation/Navigation";
import Footer from "./../../Footer/Footer";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main_layout">
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
