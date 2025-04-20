import { useState } from "react";
import CustomBox from "./../../../../components/CustomBox/CustomBox";
import { VscSearch } from "react-icons/vsc";
import ServiceAi from "./../ServiceAi/ServiceAi";
import "./ServiceForm.css";
import { filterData } from "../../../../utils/filterData";

const filterTest = ["dddd", "Ffff", "Ssss", "sss"];

const ServiceForm = () => {
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(filterTest);

  const searchKeyword = (e) => {
    const keyword = e.target.value;

    // if (keyword.trim() !== "") {
    //   setSearch(keyword);
    //   const updateFilter = filterTest.filter((item) =>
    //     item.toLowerCase().includes(keyword.toLowerCase())
    //   );
    //   setFilterList(updateFilter);
    // } else {
    //   setFilterList(filterTest);
    // }
    if (keyword.trim() !== "") {
      setSearch(keyword);
      const updateFilter = filterData(filterTest, keyword);
      setFilterList(updateFilter);
    } else {
      setSearch("");
      setFilterList(filterTest);
    }
  };

  console.log("filter", filterList);

  return (
    <div className="service_container">
      <h3>타이틀</h3>
      <p>더 나은 셀렉트를 위한 공지사항입니다.</p>
      <div className="service_search">
        <VscSearch className="test" />

        <input type="text" onChange={searchKeyword} />
      </div>
      {/* {filterList.map((item, index) => (
        <div>{item}</div>
      ))} */}
      <section className="service_list_section">
        <h5>FAQ</h5>
        <div className="service_list">
          <CustomBox>모델 노쇼 시 환불은 어떻게 처리되나요</CustomBox>
          <CustomBox>모델 노쇼 시 환불은 어떻게 처리되나요</CustomBox>
          <CustomBox>모델 노쇼 시 환불은 어떻게 처리되나요</CustomBox>
          <CustomBox>모델 노쇼 시 환불은 어떻게 처리되나요</CustomBox>
          <CustomBox>모델 노쇼 시 환불은 어떻게 처리되나요</CustomBox>
        </div>
      </section>
      <ServiceAi />
    </div>
  );
};

export default ServiceForm;
