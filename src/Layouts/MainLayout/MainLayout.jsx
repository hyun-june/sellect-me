import { Container } from "react-bootstrap";
import Navigation from "./../../components/Navigation/Navigation";
import Footer from "./../../components/Footer/Footer";
import "./MainLayout.css";

const MainLayout = ({ children, className }) => {
  return (
    <div className={`main_layout ${className}`}>
      <Navigation />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
