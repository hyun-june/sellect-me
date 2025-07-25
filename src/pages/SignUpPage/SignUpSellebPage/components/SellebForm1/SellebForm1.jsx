import { useForm } from "react-hook-form";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import DropdownForm from "../../../../../components/DropdownForm/DropdownForm";
import { useSellebContext } from "../../../../../context/SellebContext";
import { useEffect } from "react";
import SelectInput from "../../../../../components/SelectInput/SelectInput";
import "./SellebForm1.css";
import SelectInputCountry from "./../../../../../components/SelectInputCountry/SelectInputCountry";

const languageList = [
  "Korean",
  "English",
  "Japanese",
  "Chinese",
  "Spanish",
  "French",
  "German",
  "Russian",
  "Portuguese",
  "Hindi",
  "Arabic",
  "Italian",
  "Vietnamese",
  "Thai",
  "Indonesian",
];

const genderList = ["남성", "여성"];

const SellebForm1 = ({ goToNextTab }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      year: "",
      month: "",
      day: "",
      gender: "",
      nationality: "",
      address: "",
      phone_number: "",
      email_address: "",
      language: "",
    },
    // mode: "onChange",
  });
  const { formData, updateFormData } = useSellebContext();

  // const handleSelect = (fieldName, value) => {
  //   setValue(fieldName, value);
  // };

  useEffect(() => {
    console.log("Context의 formData가 업데이트됨:", formData);
  }, [formData]);

  useEffect(() => {
    if (formData) {
      reset(formData);
    }
  }, [formData]);

  const onSubmit = (formData) => {
    // if (!formData.year || !formData.month || !formData.day) {
    //     return alert("생년월일을 모두 입력해주세요.");
    // }
    // if (!formData.gender) {
    //     return alert("성별을 선택해주세요.");
    // }
    // if (!formData.nationality) {
    //     return alert("국적을 선택해주세요.");
    // }
    //
    // if (!formData.language) {
    //     return alert("언어를 선택해주세요.");
    // }
    updateFormData(formData);
    // console.log("완료");
    // sessionStorage.setItem("infoFormData", JSON.stringify(formData));
    goToNextTab();
  };

  // const handleInfo = (formData) => {
  //   if (!formData.year || !formData.month || !formData.day) {
  //     return alert("생년월일을 모두 입력해주세요.");
  //   }
  //   if (!formData.gender) {
  //     return alert("성별을 선택해주세요.");
  //   }
  //   if (!formData.nationality) {
  //     return alert("국적을 선택해주세요.");
  //   }

  //   if (!formData.language) {
  //     return alert("언어를 선택해주세요.");
  //   }

  //   console.log("FormData:", formData);
  //   goToNextTab();
  // };

  const handleError = (errors) => {
    console.log("유효성 검사 실패:", errors);
    alert("필수 항목을 모두 입력해 주세요.");
  };

  const currentYear = new Date().getFullYear();
  const yearList = Array.from({ length: 80 }, (_, i) => `${currentYear - i}년`);
  const monthList = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

  const dayList = (month) => {
    const monthNumber = parseInt(month, 10);
    if ([1, 3, 5, 7, 8, 10, 12].includes(monthNumber)) {
      return Array.from({ length: 31 }, (_, i) => `${i + 1}일`);
    }
    if ([4, 6, 9, 11].includes(monthNumber)) {
      return Array.from({ length: 30 }, (_, i) => `${i + 1}일`);
    }
    return Array.from({ length: 29 }, (_, i) => `${i + 1}일`);
  };

  return (
    <div className="sellebForm1-container">
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <section className="form-name">
          <FormInput
            title="이름"
            id="first_name"
            register={register}
            error={errors.first_name}
            required={true}
            type="text"
          />
          <FormInput
            title="성"
            id="last_name"
            register={register}
            error={errors.last_name}
            required={true}
            type="text"
          />
        </section>
        <section className="birth-section ">
          <label>
            <span className="required_mark">*</span>생년월일
          </label>
          <div className="option-birth">
            <div>
              <select id="birth_year" name="year" {...register("year")}>
                <option value="">연도</option>
                {yearList.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <span>▼</span>
            </div>
            <div>
              <select name="month" {...register("month")}>
                <option value="">월</option>
                {monthList.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <span>▼</span>
            </div>
            <div>
              <select name="day" {...register("day")}>
                <option value="">일</option>
                {dayList(watch("month")).map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <span>▼</span>
            </div>
          </div>
        </section>
        <section className="section-country">
          <div className="country-dropdown">
            <SelectInput
              label="성별"
              id="gender"
              options={genderList}
              required
              register={register}
            />

            <SelectInputCountry
              register={register}
              watch={watch}
              label="국적"
              id="nationality"
            />

            {/* <div className="select_option">
              <label>
                <span className="required_mark">*</span>국적
              </label>

              <select name="nationality" {...register("nationality")}>
                <option value="" disabled selected>
                  국적
                </option>
                {countryNames.map((country, index) => {
                  const value = (index + 1).toString();
                  const selectedValue = watch("nationality");

                  const isSelected = selectedValue === value;

                  return (
                    <option
                      className="nationality_option"
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
            </div>*/}
          </div>

          {/* <FormInput
            title="국적 추가"
            id="add_country"
            register={register}
            error={errors.country}
            type="text"
          /> */}
        </section>
        <section className="section-address">
          {/* <DropdownForm
            label="사용 가능 언어"
            list={languageList}
            selectedValue=""
            onSelect={(value) => handleSelect("language", value)}
            type="text"
          /> */}
          <SelectInput
            label="언어"
            id="language"
            options={languageList}
            required
            register={register}
          />

          <FormInput
            title="현 거주지"
            id="address"
            register={register}
            error={errors.address}
            required={true}
          />
          <FormInput
            title="전화번호 입력"
            addMessage="(-제외하고 입력)"
            id="phone_number"
            register={register}
            type="number"
            error={errors.phone_number}
            required={true}
          />
          {/* 
          <div className="auth-num-section">
            <FormInput
              title="인증번호 입력"
              id="auth_number"
              register={register}
              type="number"
              error={errors.auth_number}
              required={true}
            />
            <button type="button" onClick={() => console.log("인증번호")}>
              확인
            </button>
          </div> */}
          <FormInput
            title="이메일 주소"
            id="email_address"
            register={register}
            type="email"
            error={errors.email_address}
            required={true}
          />
        </section>

        <NextButton type="submit" />
      </form>
    </div>
  );
};

export default SellebForm1;
