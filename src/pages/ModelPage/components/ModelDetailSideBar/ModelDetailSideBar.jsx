import { useForm } from "react-hook-form";
import DetailRangeBar from "../DetailRangeBar/DetailRangeBar";
import "./ModelDetailSideBar.css";
import SelectInput from "./../../../../components/SelectInput/SelectInput";

const locationList = ["서울", "경기", "강원", "충청", "대구"];
const hairColorList = ["BLACK", "BROWON"];
const eyeColorList = ["BLACK", "BROWON"];

const ModelDetailSideBar = ({ menuType = "basic", onSearch, ...props }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
  });

  // 주석 풀면 버튼 없이 값 바뀔 때 마다 값 찍힘
  // const formData = watch();

  // useEffect(() => {
  //   console.log("Detail :", formData);
  // }, [formData]);

  const handleDetailData = (formData) => {
    console.log("Detail : ", formData);

    if (onSearch) {
      onSearch();
    }
  };

  const countryList = require("country-list");
  const countryNames = countryList.getNames();

  return (
    <form
      className="sidebar_detail_container"
      onSubmit={handleSubmit(handleDetailData)}
    >
      <div className="sidebar_detail_inner">
        <div className="detail_select_gender">
          <span>
            <label>
              Male
              <input
                type="checkbox"
                value="male"
                {...register("select_gender")}
              />
            </label>
          </span>
          <span>
            <label>
              Female
              <input
                type="checkbox"
                value="female"
                {...register("select_gender")}
              />
            </label>
          </span>
        </div>
        {/* <div className="detail_select_location">
          <label>촬영장소</label>
          <div>
            <select name="select_location" {...register("select_location")}>
              <option value=""></option>
              {locationList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <span>▼</span>
          </div>
        </div> */}
        <div className="detail_select_location">
          <SelectInput
            label="촬영장소"
            id="select_location"
            options={locationList}
            register={register}
          />
          <div className="select_option select_country">
            <label>국적</label>
            <select name="select_country" {...register("select_country")}>
              <option value="" disabled selected>
                국적
              </option>
              {countryNames.map((country, index) => {
                const value = (index + 1).toString();
                const selectedValue = watch("select_country");

                const isSelected = selectedValue === value;

                return (
                  <option
                    className="options_list"
                    value={value}
                    key={value}
                    title={country}
                  >
                    {isSelected
                      ? country
                      : country.length > 20
                      ? country.slice(0, 20) + "..."
                      : country}
                  </option>
                );
              })}
            </select>
            <span className="dropdown_mark">▼</span>
          </div>
        </div>
        <DetailRangeBar
          title="금액(1hr)"
          min="10000"
          max="100000"
          step="10000"
          setValue={setValue}
          unit="원"
        />

        {menuType === "addColor" ? (
          <>
            <span style={{ color: "#D84315" }}>
              <strong>DETAIL</strong>
            </span>
            <div className="range_bar_section">
              <DetailRangeBar
                title="HEIGHT"
                min="150"
                max="200"
                step="1"
                setValue={setValue}
                unit="cm"
              />
              <DetailRangeBar
                title="SHOES"
                min="200"
                max="300"
                step="5"
                setValue={setValue}
                unit="mm"
              />
            </div>

            <div className="detail_select_color">
              <SelectInput
                label="HAIR COLOR"
                id="select_hair_color"
                options={hairColorList}
                register={register}
              />
              {/* <label>HAIR COLOR</label>
              <div>
                <select
                  name="select_hair_color"
                  {...register("select_hair_color")}
                >
                  <option value=""></option>
                  {hairColorList.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span>▼</span>
              </div> */}
            </div>

            <div className="detail_select_color">
              {/* <label>EYE COLOR</label>
              <div>
                <select
                  name="select_eyes_color"
                  {...register("select_eyes_color")}
                >
                  <option value=""></option>
                  {eyeColorList.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span>▼</span>
              </div> */}
              <SelectInput
                label="EYE COLOR"
                id="select_eyes_color"
                options={eyeColorList}
                register={register}
              />
            </div>
          </>
        ) : (
          ""
        )}

        <button>검색</button>
      </div>
    </form>
  );
};

export default ModelDetailSideBar;
