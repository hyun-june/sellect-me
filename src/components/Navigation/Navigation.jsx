import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import LoginLinks from "../LoginLinks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const showSearchBarPages = ["/"]; // 배열 안에 경로 입력하면 searchbar 표시됨
  return (
    <>
      <Navbar>
        <div className="navContainer">
          <Navbar.Brand href="/">
            <img className="logoImg" src="/images/logo-outline.png" alt="" />
          </Navbar.Brand>
          {showSearchBarPages.includes(location.pathname) && <SearchBar />}
          <Navbar.Collapse className="justify-content-end">
            <LoginLinks />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
