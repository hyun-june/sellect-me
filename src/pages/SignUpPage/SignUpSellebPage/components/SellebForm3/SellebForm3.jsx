import { useForm } from "react-hook-form";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import CustomCalendar from "../../../../../components/CustomCalendar/CustomCalendar";
import "./SellebForm3.css";
import { useEffect } from "react";
import { useSellebContext } from "../../../../../context/SellebContext";

const SellebForm3 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      agencyStatus: "",
      agency_name: "",
      agency_startDate: "",
      agency_endDate: "",
    },
  });

  const { formData, updateFormData } = useSellebContext();
  useEffect(() => {
    console.log("SellebForm3에서 확인한 전체 formData:", formData);
  }, [formData]);

  useEffect(() => {
    if (formData) {
      reset(formData);
    }
  }, [formData]);

  const agency = watch("agencyStatus") === "1";

  const handleInfo = (formData) => {
    const startDate = new Date(formData.agency_startDate);
    const endDate = new Date(formData.agency_endDate);

    if (formData.agencyStatus === null) {
      return alert("에이전시 소속 유무를 체크해주세요.");
    }
    if (formData.agencyStatus === "0") {
      formData.agency_name = "";
      formData.agency_startDate = "";
      formData.agency_endDate = "";
    }
    if (formData.agencyStatus === "1") {
      if (startDate > endDate) {
        return alert("계약 종료일은 계약 시작일보다 빠를 수 없습니다.");
      }
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
            <CustomCalendar
              id="agency_startDate"
              label="계약 시작일"
              setValue={setValue}
              value={formData?.agency_startDate}
            />
            <CustomCalendar
              id="agency_endDate"
              label="계약 종료일"
              setValue={setValue}
              value={formData?.agency_endDate}
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
