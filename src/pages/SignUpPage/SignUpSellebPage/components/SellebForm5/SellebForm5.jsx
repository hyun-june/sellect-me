import { useForm } from "react-hook-form";
import { useState } from "react";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import "./SellebForm5.css";

const SellebForm5 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [payValue, setPayValue] = useState(0);
  const handleInfo = (formData) => {
    if (getValues("currency-input") && formData.payValue) {
      setValue("payValue", 0);
    }

    console.log("Form 5:", { ...formData, payValue: getValues("payValue") });
    goToNextTab();
  };

  const handlePayChange = (e) => {
    const pay = e.target.value;
    setPayValue(pay);
    setValue("payValue", pay);
  };

  return (
    <form className="pay-section" onSubmit={handleSubmit(handleInfo)}>
      <h5>시간 당 모델료로 희망하는 최소금액을 설정해 주세요.</h5>
      <p>
        언제든 시간 당 모델료를 자유롭게 조절할 수 있으며 <br />
        촬영 건에 따라 셀렉터(클라이언트)와 자유롭게 협상이 가능합니다.
      </p>
      <div className="select-currency">
        <label>
          한화
          <input type="radio" value="won" {...register("currency")} />
        </label>
        <label>
          달러
          <input type="radio" value="dollar" {...register("currency")} />
        </label>
      </div>
      <div className="pay-bar-section">
        <div>
          <span>0</span>
          <span>300</span>
        </div>
        <input
          id="pay-rangebar"
          type="range"
          min="0"
          max="300"
          step="5"
          value={payValue}
          onChange={handlePayChange}
        />
        <div>
          <span className="unit-text">단위 : 10,000</span>
        </div>
      </div>

      {payValue !== 0 ? (
        <div className="pay_section">
          <strong>pay</strong>: <div>{payValue}</div>
        </div>
      ) : (
        ""
      )}

      <div className="select-currency-self">
        <FormInput title="직접입력" id="currency-input" register={register} />
        <p>
          pay와 직접 입력한 값이 둘 다 있는 경우 직접 입력의 값이 적용됩니다.
        </p>
      </div>
      <div className="flex justify-between width-100">
        <PrevButton onClick={goToPrevTab} />
        <NextButton />
      </div>
    </form>
  );
};

export default SellebForm5;
