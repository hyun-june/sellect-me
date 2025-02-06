import Navigation from "./../../Navigation/Navigation";
import Footer from "./../../Footer/Footer";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main_layout">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
