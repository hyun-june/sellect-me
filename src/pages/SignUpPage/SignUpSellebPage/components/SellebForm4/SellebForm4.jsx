import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import { useSellebContext } from "./../../../../../context/SellebContext";
import "./SellebForm4.css";

const SellebForm4 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      height: "",
      chest: "",
      waist: "",
      hips: "",
      top_size: "",
      pants_size: "",
      shoes_size: "",
      hair_color: "",
      eye_color: "",
    },
  });

  const { formData, updateFormData } = useSellebContext();

  useEffect(() => {
    console.log("SellebForm4에서 확인한 전체 formData:", formData);
  }, [formData]);

  const onSubmit = (data) => {
    updateFormData(data);
    console.log("Form4 데이터 저장 완료:");

    const submitData = {
      ...formData, // Context의 데이터
      ...data, // 현재 폼 데이터
    };

    goToNextTab();
  };
  return (
    <form className="detail-info" onSubmit={handleSubmit(onSubmit)}>
      <div className="detail-box">
        <h5>사이즈정보(선택)</h5>
        <FormInput
          disableValidation={true}
          title="키(cm)"
          id="height"
          register={register}
        />
        <FormInput
          disableValidation={true}
          title="가슴 둘레(inch)"
          id="chest"
          register={register}
        />
        <FormInput
          disableValidation={true}
          title="허리 둘레(inch)"
          id="waist"
          register={register}
        />
        <FormInput
          disableValidation={true}
          title="힙 둘레(inch)"
          id="hips"
          register={register}
        />
        <FormInput
          disableValidation={true}
          title="상의 사이즈"
          id="top_size"
          register={register}
        />
        <FormInput
          disableValidation={true}
          title="하의 사이즈"
          id="pants_size"
          register={register}
        />
        <FormInput
          disableValidation={true}
          title="신발 사이즈(mm)"
          id="shoes_size"
          register={register}
        />
      </div>
      <div className="detail-box ">
        <h5>필터 정보</h5>
        <FormInput
          disableValidation={true}
          title="머리 색깔"
          id="hair_color"
          register={register}
        />
        <FormInput
          disableValidation={true}
          title="눈동자 색깔"
          id="eye_color"
          register={register}
        />
      </div>
      <span>상세 필터는 프로필에서 설정 가능합니다.</span>
      <div className="prev_next_btn">
        <PrevButton onClick={goToPrevTab} />
        <NextButton />
      </div>
    </form>
  );
};

export default SellebForm4;
