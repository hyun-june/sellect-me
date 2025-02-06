import { useForm } from "react-hook-form";
import DropdownForm from "../../../../../components/DropdownForm/DropdownForm";
import NextButton from "../../../components/NextButton/NextButton";
import FormInput from "../../../../../components/FormInput/FormInput";
import "./SellecterForm1.css";

const entityList = ["개인사업자", "공동사업자", "법인사업자"];
const typeList = ["도소매업", "제조업", "서비스업"];
const categoryList = ["의류 소매업", "자동차 제도업", "IT 컨설팅"];

const SellecterForm1 = ({ goToNextTab }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleInfo = (formData) => {
    console.log("FormData:", formData);
    goToNextTab();
  };

  const handleSelect = (fieldName, value) => {
    setValue(fieldName, value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleInfo)} className="business_info">
        <section>
          <h5>사업자 정보</h5>
          <FormInput title="국가" id="business_country" register={register} />
          <DropdownForm
            label="사업자 유형"
            list={entityList}
            selectedValue=""
            onSelect={(value) => handleSelect("business_entity_type", value)}
          />
          <div className="business_type_section">
            <DropdownForm
              label="업태"
              list={typeList}
              selectedValue=""
              onSelect={(value) => handleSelect("business_type", value)}
            />

            <DropdownForm
              label="업종"
              list={categoryList}
              selectedValue=""
              onSelect={(value) => handleSelect("business_category", value)}
            />
          </div>
        </section>
        <section>
          <FormInput title="상호" id="business_name" register={register} />
          <FormInput
            title="대표자명"
            id="representative_name"
            register={register}
          />
          <FormInput
            title="사업자 등록번호"
            id="business_registration_number"
            register={register}
          />
          <FormInput
            title="사업장 소재지"
            id="business_address"
            register={register}
          />
        </section>
        <section>
          <FormInput
            title="담당자 전화번호"
            id="manager_phone"
            register={register}
          />
          <FormInput
            title="담당자 이메일"
            id="manager_email"
            register={register}
          />
        </section>
        <NextButton />
      </form>
    </div>
  );
};

export default SellecterForm1;
