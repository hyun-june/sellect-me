import { useForm } from "react-hook-form";
import DetailRangeBar from "../DetailRangeBar/DetailRangeBar";
import "./ModelDetailSideBar.css";
import SelectInput from "./../../../../components/SelectInput/SelectInput";

const locationList = ["서울", "경기", "강원", "충청", "대구"];
const hairColorList = ["BLACK", "BROWON"];
const eyeColorList = ["BLACK", "BROWON"];
const genderList = ["Male", "FeMale"];

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
        <div className="detail_select">
          <SelectInput
            label="성별"
            id="gender"
            options={genderList}
            register={register}
          />
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
            </div>

            <div className="detail_select_color">
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
