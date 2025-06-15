import { useForm } from "react-hook-form";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import "./SellebForm3.css";

const SellebForm3 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const agency = watch("agencyStatus") === "1";

  const handleInfo = (formData) => {
    if (formData.agencyStatus === null) {
      return alert("에이전시 소속 유무를 체크해주세요.");
    }
    console.log("Form 3:", formData);
    goToNextTab();
  };

  return (
    <form className="agency-section" onSubmit={handleSubmit(handleInfo)}>
      <h5>에이전시 정보</h5>
      <div className="agency-info">
        <label htmlFor="">에이전시 소속</label>
        <div>
          <span>
            <label>
              Y
              <input type="radio" value="1" {...register("agencyStatus")} />
            </label>
          </span>
          <span>
            <label>
              N
              <input type="radio" value="0" {...register("agencyStatus")} />
            </label>
          </span>
        </div>
      </div>
      {agency ? (
        <>
          <FormInput
            title="에이전시 입력"
            id="agency_name"
            register={register}
            required={agency}
          />
          <div className="agency-date">
            <FormInput
              title="계약 시작일"
              id="start_date"
              register={register}
              required={agency}
            />
            <FormInput
              title="계약 종료일"
              id="end_date"
              register={register}
              required={agency}
            />
          </div>
        </>
      ) : null}

      <div className="prev_next_btn">
        <PrevButton onClick={goToPrevTab} />
        <NextButton type="submit" />
      </div>
    </form>
  );
};

export default SellebForm3;
