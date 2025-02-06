import { useForm } from "react-hook-form";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import "./SellebForm4.css";

const SellebForm4 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInfo = (formData) => {
    console.log("form 4:", formData);
    goToNextTab();
  };
  return (
    <form className="detail-info" onSubmit={handleSubmit(handleInfo)}>
      <div className="detail-box">
        <h5>사이즈정보(선택)</h5>
        <FormInput title="키(cm)" id="height" register={register} />
        <FormInput title="가슴 둘레(inch)" id="chest" register={register} />
        <FormInput title="허리 둘레(inch)" id="waist" register={register} />
        <FormInput title="힙 둘레(inch)" id="hips" register={register} />
        <FormInput title="상의 사이즈" id="top_size" register={register} />
        <FormInput title="하의 사이즈" id="pants_size" register={register} />
        <FormInput
          title="신발 사이즈(mm)"
          id="shoes_size"
          register={register}
        />
      </div>
      <div className="detail-box ">
        <h5>필터 정보</h5>
        <FormInput title="머리 색깔" id="hair_color" register={register} />
        <FormInput title="눈동자 색깔" id="eye_color" register={register} />
      </div>
      <span>상세 필터는 프로필에서 설정 가능합니다.</span>
      <div className="flex justify-between">
        <PrevButton onClick={goToPrevTab} />
        <NextButton />
      </div>
    </form>
  );
};

export default SellebForm4;
