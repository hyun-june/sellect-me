import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import FormInput from "../../../../../components/FormInput/FormInput";
import DropdownForm from "../../../../../components/DropdownForm/DropdownForm";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import UploadBox from "../../../components/UploadBox/UploadBox";
import "./SellecterForm2.css";
import { useSellecterContext } from "../../../../../context/SellecterContext";

const SellecterForm2 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      business_bank: "",
      business_account: "",
      tax_email: "",
      manager_name: "",
    },
  });

  const { formData, updateFormData } = useSellecterContext();

  useEffect(() => {
    console.log("SellebForm2에서 확인한 전체 formData:", formData);
  }, [formData]);

  useEffect(() => {
    if (formData) {
      reset(formData);
    }
  }, [formData]);

  const [images, setImages] = useState({
    bankbook_img: null,
    business_registration_img: null,
  });

  const handleInfo = (formData) => {
    if (formData.business_bank === "") {
      return alert("사업자 통장 은행을 선택해주세요.");
    }
    if (images.bankbook_img === null) {
      return alert("통장 사본을 등록해주세요.");
    }
    if (images.business_registration_img === null) {
      return alert("사업자등록증 사본을 등록해주세요.");
    }
    console.log("FormData:", formData);
    console.log("images", images);
    goToNextTab();
  };

  const handleSelect = (fieldName, value) => {
    setValue(fieldName, value);
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    setImages((prev) => ({
      ...prev,
      [type]: file,
    }));
  };

  const handleDelete = (type) => {
    setImages((prev) => ({
      ...prev,
      [type]: null,
    }));
  };

  const bankList = [
    "국민은행",
    "신한은행",
    "우리은행",
    "하나은행",
    "농협은행",
    "기업은행",
    "SC제일은행",
    "씨티은행",
    "케이뱅크",
    "카카오뱅크",
    "토스뱅크",
    "수협은행",
    "대구은행",
    "부산은행",
    "광주은행",
    "전북은행",
    "제주은행",
  ];

  return (
    <form onSubmit={handleSubmit(handleInfo)} className="sellecter-form">
      <div className="form-gap">
        <h5>계좌정보</h5>
        {/* <DropdownForm
          label="사업자 통장 은행"
          list={bankList}
          selectedValue=""
          onSelect={(value) => handleSelect("business_bank", value)}
        /> */}
        <FormInput
          title="사업자 통장 은행"
          id="business_bank"
          required={true}
          register={register}
          error={errors.business_bank}
        />
        <FormInput
          title="사업자 계좌"
          addMessage="(-제외하고 입력)"
          id="business_account"
          register={register}
          required={true}
          error={errors.business_account}
          type="number"
        />
        <div className="warning_text">
          * 계좌 정보는 제출한 통장 사본과 일치해야 합니다.
        </div>
      </div>
      <div className="form-gap">
        <h5>통장사본</h5>
        <UploadBox
          onChange={(e) => handleImageUpload(e, "bankbook_img")}
          onDelete={() => handleDelete("bankbook_img")}
          id="bankbook_img"
        />

        <FormInput
          title="세금계산서 수취 이메일"
          id="tax_email"
          register={register}
          required={true}
          type="email"
          error={errors.tax_email}
        />
        <FormInput
          title="담당자명"
          id="manager_name"
          register={register}
          required={true}
          error={errors.manager_name}
          type="text"
        />
      </div>
      <div className="form-gap">
        <h5>사업자등록증 사본</h5>
        <UploadBox
          onChange={(e) => handleImageUpload(e, "business_registration_img")}
          onDelete={() => handleDelete("business_registration_img")}
          id="business_registration_img"
        />
      </div>
      <div className="message-box">
        <p>
          <strong>* 확인해주세요</strong>
        </p>

        <section>
          <p>[사업자정보및수익금출금계좌정보작성유의사항]</p>
          <ul>
            <li>
              사업자등록증정보와 모두 일치하게 입력해주세요. (상호, 업태, 사업자
              소재지 등) 불일치하는 경우 승인이 거절될 수 있습니다.
            </li>
            <li>
              수익금 출금 계좌정보는 통장 사본 정보와 모두 일치하게
              입력해주세요. 예금주 정보는 인증된 기업정보와 일치해야 하며,
              상호가 포함된 경우 대표자명(상호)와 같이 소괄호를 포함하여 모두
              입력하셔야 합니다. 불일치하는 경우 승인이 거절될 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <p>[인증정보변경관련안내]</p>
          <ul>
            <li>
              사업자 정보를 최초로 인증받거나 정보를 변경할 경우 별도의 승인
              시간이 필요합니다.
            </li>
            <li>
              특정 사유로 인해 계좌, 사업자 인증 정보를 변경할 경우 고객센터로
              연락주세요.
            </li>
            <li>
              크몽의 수수료 세금계산서는 구매 확정일을 기준으로 해당 시점에
              인증되어 있는 기업정보를 대상으로 발행됩니다. 사업자 정보에
              변동사항이 있는 경우, 새로 승인받아 최신 정보로 유지해주세요.
            </li>
          </ul>
        </section>
      </div>
      <div className="prev_next_btn">
        <PrevButton onClick={goToPrevTab} />
        <NextButton type="submit" />
      </div>
    </form>
  );
};

export default SellecterForm2;
