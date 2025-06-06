import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../../../../components/FormInput/FormInput";
import NextButton from "../../../components/NextButton/NextButton";
import UploadBox from "../../../components/UploadBox/UploadBox";
import PrevButton from "../../../components/PrevButton/PrevButton";
import "./SellebForm2.css";

const SellebForm2 = ({ goToNextTab, goToPrevTab }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [images, setImages] = useState({
        id_photo: null,
        consent_photo: null,
        bank_photo: null,
    });

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

    const visaStatus = watch("visaStatus"); // string 결과 출력

const isForeign = visaStatus === "0" ? true : false;

    const onSubmit = (data) => {
        if (images.id_photo === null) {
            return alert("신분증 사진을 등록해주세요.");
        }
        if (images.consent_photo === null && data.parental_consent !== true) {
            console.log("미성년자 동의");
            return alert(
                "미성년자 부모 동의서 사본 또는 해당 사항 없음을 체크해주세요."
            );
        }

        if (data.visaStatus === null) {
            return alert("비자 정보를 입력해주세요.");
        }
        if (images.bank_photo === null) {
            return alert("통장 사본을 등록해주세요.");
        }

        console.log("폼 데이터:", data);
        goToNextTab();
    };

    return (
      <div>
            <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <section className="info-left">
                        <h5>신분증</h5>
                        <p>주민등록증/여권/운전면허증/외국인등록증</p>
                        <UploadBox
                            onChange={(e) => handleImageUpload(e, "id_photo")}
                            onDelete={() => handleDelete("id_photo")}
                            id="id_photo"
                        />
                        <div>
                            <h5 className="info-second-title">
                                미성년자 부모 동의서
                            </h5>
                            <p>
                                미성년자 셀럽 활동을 위한 부모님 동의서 <br />
                                사본을 업로드 해주세요.
                            </p>
                            {/* <span className="info-text">
                        <label htmlFor="info-parents">해당사항없음</label>
                        <input type="checkbox" id="info-parents" />
                        <label
                            htmlFor="info-parents"
                            className="check-box"></label>
                    </span> */}
                            <span className="info-text">
                                <label>
                                    해당사항없음
                                    <input
                                        type="checkbox"
                                        {...register("parental_consent")}
                                    />
                                </label>
                            </span>

                            <UploadBox
                                onChange={(e) =>
                                    handleImageUpload(e, "consent_photo")
                                }
                                onDelete={() => handleDelete("consent_photo")}
                                id="consent_photo"
                            />
                        </div>
                    </section>
                    <section className="info-right">
                        <div className="visa-info-section">
                            <h5>비자 정보</h5>

                            <div className="visa-info">
                                <span>대한민국 영주권 혹은 시민권</span>
                                <div className="visa-check">
                                    <div>
                                        <label htmlFor="visaStatusYes">Y</label>
                                        <input
                                            type="radio"
                                            id="visaStatusYes"
                                            {...register("visaStatus", {valueAsNumber: true})}
                                            value="1"
                                            defaultChecked={true}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="visaStatusNo">N</label>
                                        <input
                                            type="radio"
                                            id="visaStatusNo"
                                            {...register("visaStatus", {valueAsNumber: true})}
                                            value="0"
                                        />
                                    </div>
                                </div>
                            </div>
                            {isForeign  ? (
                                <div className="visa-input">
                                    <FormInput
                                        disableValidation={true}
                                        title="비자 종류"
                                        id="visa"
                                        register={register}
                                        error={errors.visa}
                                        required={isForeign}
                                    />
                                    <FormInput
                                        disableValidation={true}
                                        title="외국인 등록번호"
                                        id="registration_number"
                                        register={register}
                                        error={errors.registration_number}
                                        required={isForeign}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <div className="account-info">
                            <h5>계좌 정보</h5>
                            <FormInput
                                disableValidation={true}
                                title="수익금 출금 은행"
                                addMessage="(-제외하고 입력)"
                                id="bank_name"
                                register={register}
                                required={true}
                                error={errors.bank_name}
                                type="text"
                            />
                            <FormInput
                                disableValidation={true}
                                title="예금주"
                                id="bank_depositor"
                                register={register}
                                required={true}
                                error={errors.bank_depositor}
                                type="text"
                            />
                            <FormInput
                                disableValidation={true}
                                title="수익금 출금계좌"
                                id="bank_account"
                                register={register}
                                required={true}
                                error={errors.bank_account}
                                type="number"
                            />
                            <div className="warning_text">
                                * 계좌 정보는 제출한 통장 사본과 일치해야
                                합니다.
                            </div>
                        </div>

                        <div className="bankbook-info">
                            <h5>통장 사본</h5>
                            <UploadBox
                                onChange={(e) =>
                                    handleImageUpload(e, "bank_photo")
                                }
                                onDelete={() => handleDelete("bank_photo")}
                                id="bank_photo"
                            />

                            <FormInput
                                disableValidation={true}
                                title="세금계산서수취이메일"
                                id="tax_email"
                                register={register}
                            />
                            <FormInput
                                disableValidation={true}
                                title="담당자명"
                                id="manager_name"
                                register={register}
                            />
                        </div>
                    </section>
                </div>
                <div className="prev_next_btn">
                    <PrevButton onClick={goToPrevTab} />
                    <NextButton type="submit" />
                </div>
            </form>
        </div>
    );
};

export default SellebForm2;