import { useForm } from "react-hook-form";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import "./SellebForm3.css";

const SellebForm3 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInfo = (formData) => {
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
              <input type="radio" value="yes" {...register("agencyStatus")} />
            </label>
          </span>
          <span>
            <label>
              N
              <input type="radio" value="no" {...register("agencyStatus")} />
            </label>
          </span>
        </div>
      </div>
      <FormInput title="에이전시 입력" id="agency" register={register} />
      <div className="agency-date">
        <FormInput title="계약 시작일" id="start_date" register={register} />
        <FormInput title="계약 종료일" id="end_date" register={register} />
      </div>
      <div className="flex justify-between">
        <PrevButton onClick={goToPrevTab} />
        <NextButton type="submit" />
      </div>
    </form>
  );
};

export default SellebForm3;
