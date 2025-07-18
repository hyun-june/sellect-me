import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import PrevButton from "../../../components/PrevButton/PrevButton";
import "./SellebForm5.css";
import { useSellebContext } from "../../../../../context/SellebContext";

const SellebForm5 = ({ goToNextTab, goToPrevTab }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currency: "won",
    },
  });

  const { formData, updateFormData } = useSellebContext();

  useEffect(() => {
    console.log("SellebForm5에서 확인한 전체 formData:", formData);
  }, [formData]);

  useEffect(() => {
    if (formData) {
      reset(formData);
    }
  }, [formData]);

  const [payValue, setPayValue] = useState(0);

  const selectedCurrency = watch("currency");
  const currencyType =
    selectedCurrency === "won"
      ? "원"
      : selectedCurrency === "dollar"
      ? "$"
      : null;

  const onSubmit = (data) => {
    if (data.currency === null) {
      return alert("기준 통화를 체크해주세요.");
    }
    if (!payValue && !data.currency_input?.trim()) {
      return alert("pay를 입력해주세요.");
    }
    if (getValues("currency_input") && data.payValue) {
      setValue("payValue", 0);
    }

    console.log("Form 5:", { ...data, payValue: getValues("payValue") });
    goToNextTab();
  };

  // const handlePayChange = (e) => {
  //   const pay = e.target.value;
  //   if (pay) {
  //     setPayValue(pay);
  //     setInputValue(pay);
  //   }
  //   setPayValue(pay);

  //   setValue("payValue", pay);
  // };

  return (
    <form className="pay-section" onSubmit={handleSubmit(onSubmit)}>
      <h5>시간 당 모델료로 희망하는 최소금액을 설정해 주세요.</h5>
      <p>
        언제든 시간 당 모델료를 자유롭게 조절할 수 있으며 <br />
        촬영 건에 따라 셀렉터(클라이언트)와 자유롭게 협상이 가능합니다.
      </p>
      <div className="select-currency">
        <label>
          한화
          <input
            type="radio"
            value="won"
            {...register("currency")}
            defaultChecked={true}
          />
        </label>
        <label>
          달러
          <input type="radio" value="dollar" {...register("currency")} />
        </label>
      </div>
      {/*<div className="pay-bar-section">*/}
      {/*    <div>*/}
      {/*        <span>0</span>*/}
      {/*        <span>300</span>*/}
      {/*    </div>*/}
      {/*    <input*/}
      {/*        id="pay-rangebar"*/}
      {/*        type="range"*/}
      {/*        min="0"*/}
      {/*        max="300"*/}
      {/*        step="5"*/}
      {/*        value={payValue}*/}
      {/*        onChange={handlePayChange}*/}
      {/*    />*/}
      {/*    <div>*/}
      {/*        <span className="unit-text">단위 : 10,000</span>*/}
      {/*    </div>*/}
      {/*</div>*/}

      {/* {payValue > 0 ? (
        <div className="show_payvalue">
          <strong>pay</strong>: <div>{payValue}</div>
        </div>
      ) : null} */}

      <div className="select-currency-self">
        <div>
          <FormInput
            disableValidation={true}
            title="직접입력"
            id="currency_input"
            register={register}
            type="number"
            error={errors.currency_input}
          />
          <span>{currencyType}</span>
        </div>

        {/* <p>
          * 바와 직접 입력한 값이 둘 다 있는 경우 직접 입력의 값이 적용됩니다.
        </p> */}
      </div>
      <div className="prev_next_btn">
        <PrevButton onClick={goToPrevTab} />
        <NextButton />
      </div>
    </form>
  );
};

export default SellebForm5;
