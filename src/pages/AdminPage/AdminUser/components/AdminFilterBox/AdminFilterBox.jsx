import { HiOutlineSearch } from "react-icons/hi";
import "./AdminFilterBox.css";

const AdminFilterBox = ({
  filter,
  setFilter,
  defaultFilter,
  adminFilters,
  countryFilter,
  title,
  ...props
}) => {
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
  return (
    <div className="admin_user_filter">
      <section>
        <h4>{title} 검색</h4>
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
            {countryFilter && (
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
            )}
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
    </div>
  );
};

export default AdminFilterBox;
