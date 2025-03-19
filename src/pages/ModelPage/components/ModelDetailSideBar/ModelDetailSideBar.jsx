import { useForm } from "react-hook-form";
import "./ModelDetailSideBar.css";
import DetailRangeBar from "../DetailRangeBar/DetailRangeBar";

const locationList = ["서울", "경기", "강원", "충청", "대구"];

const ModelDetailSideBar = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
  });

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
        <DetailRangeBar title="test1" setValue={setValue} />
        <DetailRangeBar title="test2" setValue={setValue} />
        <button>dd</button>
      </div>
    </form>
  );
};

export default ModelDetailSideBar;
