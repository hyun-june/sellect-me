import { Link } from "react-router-dom";
import "./Footer.css";

// const footerList = ["개인정보 처리 방침", "서비스 이용약관", "고객센터"];
const footerInfo = [
  "(주) 영상공장",
  "(대표자) 이재철",
  "서울시 강서구 마곡동 798-3",
  "사업자등록번호:000-00-000000",
  "Instagram:sellect.best_global",
];

const footerList = [
  { 공지사항: "service" },
  { "개인정보 처리 방침": "privacy" },
  { "서비스 이용약관": "terms" },
  { 고객센터: "service/faq" },
];

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <ul>
        {footerList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}

      <ul>
        {footerList.map((item, index) => {
          const title = Object.keys(item)[0];
          const url = item[title];

          return (
            <li key={index}>
              <Link to={`/${url}`}>{title}</Link>
            </li>
          );
        })}
      </ul>

      <ul>
        {footerInfo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <Link to="/about" className="footer_point">
          ABOUT SELLECT
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
