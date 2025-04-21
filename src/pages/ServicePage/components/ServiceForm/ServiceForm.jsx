import { useState } from "react";
import CustomBox from "./../../../../components/CustomBox/CustomBox";
import { VscSearch } from "react-icons/vsc";
import ServiceAi from "./../ServiceAi/ServiceAi";
import { filterData } from "../../../../utils/filterData";
import "./ServiceForm.css";
import { Link, useLocation } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const serviceData = {
  notice: {
    title: "공지사항",
    data: [
      { content: "셀렉트 앱 업데이트", link: "/" },
      { content: "에스크로 수수료 관련", link: "/" },
      { content: "V-chat 관련", link: "/" },
      { content: "프로필 이미지 관련", link: "/" },
    ],
  },
  FAQ: {
    title: "고객센터",
    data: [
      { content: "모델 노쇼 시 환불은 어떻게 처리되나요?", link: "/" },
      { content: "에스크로 수수료는 어떻게 계산되나요?", link: "/" },
      { content: "거래 취소 요청은 어떻게 하나요?", link: "/" },
      { content: "거래 취소가 되면 수수료는 반환되나요?", link: "/" },
      { content: "회원 탈퇴는 어떻게 진행하나요?", link: "/" },
    ],
  },
};

const ServiceForm = ({ ...props }) => {
  const location = useLocation().pathname;
  const dataType = location.toLowerCase().includes("notice")
    ? "notice"
    : location.toLowerCase().includes("faq")
    ? "FAQ"
    : null;

  const currentData = serviceData[dataType];

  const [search, setSearch] = useState("");
  const [reportMessage, setReportMessage] = useState("");
  const [filterList, setFilterList] = useState(currentData.data);

  const searchKeyword = (e) => {
    const keyword = e.target.value;

    if (keyword.trim() !== "") {
      setSearch(keyword);
      const updateFilter = filterData(currentData.data, keyword);
      if (updateFilter.length === 0) return setFilterList(currentData.data);
      setFilterList(updateFilter);
    } else {
      setSearch("");
      setFilterList(currentData.data);
    }
  };

  const handleReport = (e) => {
    setReportMessage(e.target.value);
  };

  const sendReport = () => {
    console.log("문제 신고", reportMessage);
  };

  console.log("filter", filterList);

  return (
    <div className="service_container">
      <h3>{currentData.title}</h3>
      {dataType === "notice" ? (
        <p className="intro_text">더 나은 셀렉트를 위한 공지사항입니다.</p>
      ) : dataType === "FAQ" ? (
        <p className="intro_text">
          안녕하세요. 셀렉트 고객센터입니다. <br />
          무엇을 도와드릴까요?
        </p>
      ) : null}

      <div className="service_search">
        <VscSearch className="test" />

        <input
          type="text"
          onChange={searchKeyword}
          placeholder="키워드를 입력해주세요."
        />
      </div>
      <section className="service_list_section">
        {dataType === "FAQ" && <h5>FAQ</h5>}
        <div className="service_list">
          {filterList.map((item, index) => (
            <Link to={item.link}>
              <CustomBox key={index}>
                {dataType === "FAQ" && "Q."}
                {item.content}
              </CustomBox>
            </Link>
          ))}
        </div>
      </section>
      {dataType === "FAQ" && (
        <div className="report_section">
          <h5>문제 신고</h5>
          <div>
            <input type="text" onChange={handleReport} />
            <button onClick={sendReport}>
              <FaLongArrowAltRight />
            </button>
          </div>
          <p>신고하는 내용을 작성해 주세요. 빠른 해결을 도와드리겠습니다.</p>
          <p>신고하신 내용에 대한 답변은 이메일로 확인하실 수 있습니다.</p>
        </div>
      )}

      <ServiceAi />
    </div>
  );
};

export default ServiceForm;
