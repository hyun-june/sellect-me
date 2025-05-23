import { MdOutlineHub } from "react-icons/md";
import { FaPersonWalking } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";

import "./AdminUser.css";
import { useState } from "react";

const AdminUser = () => {
  const adminFilters = [
    {
      title: "회원종류",
      options: ["전체", "셀렉트", "셀럽", "탈퇴"],
    },
    {
      title: "회원소속",
      options: ["전체", "에이전시 소속", "개인사업자", "법인사업자"],
    },
  ];
  const adminUserData = [
    {
      icon: <MdOutlineHub className="admin_icon" />,
      label: "전체",
      value: 0,
      unit: "명",
    },
    {
      icon: <FaBuilding className="admin_icon" />,
      label: "셀렉터",
      value: 0,
      unit: "명",
    },
    {
      icon: <IoPersonSharp className="admin_icon" />,
      label: "셀럽",
      value: 0,
      unit: "명",
    },
    {
      icon: <FaPersonWalking className="admin_icon" />,
      label: "탈퇴",
      value: 0,
      unit: "명",
    },
  ];

  const defaultFilter = {
    filterName: "",
    filterId: "",
    filterCountry: "",
    filterUserType: [],
    filterBusinessType: [],
  };

  const [filter, setFilter] = useState(defaultFilter);

  const handleInputFilter = (e) => {
    const { id, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFilterSearch = (type) => {
    const typeKey = {
      name: "filterName",
      id: "filterId",
      country: "filterCountry",
    };
    const filterKey = typeKey[type];
    const filterValue = filter[filterKey];

    if (!filterValue) return;

    console.log(`${filterKey}`, filterValue);
  };

  const handleFilterCheckbox = (e) => {
    const { name, value, checked } = e.target;
    console.log("🚀 ~ handleFilterCheckbox ~ name:", name);
    console.log("🚀 ~ handleFilterCheckbox ~ checked:", checked);
    console.log("🚀 ~ handleFilterCheckbox ~ value:", value);

    setFilter((prev) => {
      const prevArray = prev[name];
      let newArray;

      if (checked) {
        newArray = [...prevArray, value];
      } else {
        newArray = prevArray.filter((item) => item !== value);
      }

      return {
        ...prev,
        [name]: newArray,
      };
    });
  };

  const handleSearchAll = () => {
    console.log("🚀 ~ AdminUser ~ filter:", filter);
  };

  const handleSearchReset = () => {
    setFilter(defaultFilter);
  };

  const AdminUserUi = () => {
    return (
      <ul className="admin_user">
        {adminUserData.map((item, index) => (
          <li key={index}>
            <div className="admin_icon_wrapper">{item.icon}</div>
            <div className="admin_user_data">
              <span className="admin_user_label">{item.label}</span>
              <span className="admin_user_value">{`${item.value}${item.unit}`}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="admin_user_container">
      <h3>회원관리</h3>
      <AdminUserUi />
      <section>
        <h4>회원 검색</h4>
        <div className="admin_user_filter_box">
          <div className="admin_search">
            <div className="admin_user_search">
              <span>이름</span>
              <input type="text" id="filterName" onChange={handleInputFilter} />
              <div onClick={() => handleFilterSearch("name")}>
                <HiOutlineSearch />
              </div>
            </div>
            <div className="admin_user_search">
              <span>아이디</span>
              <input type="text" id="filterId" onChange={handleInputFilter} />
              <div onClick={() => handleFilterSearch("id")}>
                <HiOutlineSearch />
              </div>
            </div>
            <div className="admin_user_search">
              <span>국적</span>
              <input
                type="text"
                id="filterCountry"
                onChange={handleInputFilter}
              />
              <div onClick={() => handleFilterSearch("country")}>
                <HiOutlineSearch />
              </div>
            </div>
          </div>
          <div className="admin_filter">
            {adminFilters.map((item, index) => {
              const isUserType = item.title === "회원종류";
              const filterKey = isUserType
                ? "filterUserType"
                : "filterBusinessType";

              return (
                <div className="admin_filter_type" key={index}>
                  <div>{item.title}</div>
                  {item.options.map((option, idx) => (
                    <label key={idx}>
                      <input
                        type="checkbox"
                        name={filterKey}
                        value={option}
                        checked={filter[filterKey].includes(option)}
                        onChange={handleFilterCheckbox}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="admin_filter_btn">
            <button onClick={handleSearchAll}>검색</button>
            <button onClick={handleSearchReset}>초기화</button>
          </div>
        </div>
      </section>
      <div>
        <h4>회원 목록(총 00개)</h4>
      </div>
    </div>
  );
};

export default AdminUser;
