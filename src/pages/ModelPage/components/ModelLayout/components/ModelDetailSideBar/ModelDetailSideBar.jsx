import { useForm } from "react-hook-form";
import DetailRangeBar from "../DetailRangeBar/DetailRangeBar";
import "./ModelDetailSideBar.css";

const locationList = ["서울", "경기", "강원", "충청", "대구"];
const hairColorList = ["BLACK", "BROWON"];
const eyeColorList = ["BLACK", "BROWON"];

const ModelDetailSideBar = ({ menuType = "basic", ...props }) => {
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
  };

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
        <div className="detail_select_location">
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
              <label>HAIR COLOR</label>
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
              </div>
            </div>

            <div className="detail_select_color">
              <label>EYE COLOR</label>
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
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <button>적용</button>
      </div>
    </form>
  );
};

export default ModelDetailSideBar;
