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
  } = useForm({
    defaultValues: {
      business_address: "",
      business_category: "",
      business_country: "",
      business_entity_type: "",
      business_name: "",
      business_registration_number: "",
      business_type: "",
      manager_email: "",
      manager_phone: "",
      representative_name: "",
    },
  });

  const handleInfo = (formData) => {
    if (
      !formData.business_entity_type ||
      !formData.business_type ||
      !formData.business_category
    ) {
      return alert("사업자 유형을 모두 입력해주세요.");
    }
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
          <FormInput
            title="국가"
            id="business_country"
            register={register}
            error={errors.business_country}
            required={true}
          />
          <DropdownForm
            label="사업자 유형"
            list={entityList}
            selectedValue=""
            onSelect={(value) => handleSelect("business_entity_type", value)}
            required={true}
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
          <FormInput
            title="상호"
            id="business_name"
            register={register}
            error={errors.business_name}
            required={true}
          />
          <FormInput
            title="대표자명"
            id="representative_name"
            register={register}
            error={errors.representative_name}
            required={true}
            type="text"
          />
          <FormInput
            title="사업자 등록번호"
            id="business_registration_number"
            register={register}
            error={errors.business_registration_number}
            required={true}
          />
          <FormInput
            title="사업장 소재지"
            id="business_address"
            register={register}
            error={errors.business_address}
            required={true}
          />
        </section>
        <section>
          <FormInput
            title="담당자 전화번호"
            id="manager_phone"
            register={register}
            error={errors.manager_phone}
            required={true}
            type="number"
          />
          <FormInput
            title="담당자 이메일"
            id="manager_email"
            register={register}
            error={errors.manager_email}
            required={true}
            type="email"
          />
        </section>
        <NextButton type="submit" />
      </form>
    </div>
  );
};

export default SellecterForm1;
