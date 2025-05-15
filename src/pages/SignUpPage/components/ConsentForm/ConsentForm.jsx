import { useState } from "react";
import Modal from "./../../../../components/Modal/Modal";
import PrevButton from "../PrevButton/PrevButton";
import NextButton from "../NextButton/NextButton";
import "./ConsentForm.css";

const ConsentForm = ({ type, goToPrevTab, goToNextTab }) => {
  const [agreements, setAgreements] = useState({
    selleb: {
      publicity: false,
      escrow: false,
      noShow: false,
    },
    sellecter: {
      publicity: false,
      escrow: false,
    },
  });

  const [modals, setModals] = useState({
    selleb1: false,
    selleb2: false,
    selleb3: false,
    sellecter1: false,
    sellecter2: false,
  });

  const toggleModal = (modalName) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  const toggleCheckbox = (key) => {
    setAgreements((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [key]: !prev[type][key],
      },
    }));
  };
  const handleNext = () => {
    const formType = agreements[type];
    const requiredKeys =
      type === "selleb"
        ? ["publicity", "escrow", "noShow"]
        : ["publicity", "escrow"];

    const isAllAgreed = requiredKeys.every((key) => formType[key]);
    console.log(isAllAgreed);
    if (!isAllAgreed) {
      return alert("필수 동의서를 확인해주세요.");
    }

    goToNextTab();
  };

  return (
    <div className="consent_container">
      {type === "selleb" ? (
        <div className="consent">
          <div className="consent-inner">
            <span className="consent-text">
              <input
                type="checkbox"
                id="selleb_publicity"
                checked={agreements.selleb.publicity}
                onChange={() => toggleCheckbox("publicity")}
              />
              <label htmlFor="selleb_publicity">초상권 동의서</label>
            </span>

            <span>
              <button onClick={() => toggleModal("selleb1")}>
                (필수)동의서 읽기
              </button>
              {modals.selleb1 === true ? (
                <Modal
                  title="초상권 동의서"
                  onClose={() => toggleModal("selleb1")}
                >
                  내용
                </Modal>
              ) : null}
            </span>
          </div>
          <div className="consent-inner">
            <span>
              <input
                type="checkbox"
                id="selleb_escrow"
                checked={agreements.selleb.escrow}
                onChange={() => toggleCheckbox("escrow")}
              />

              <label htmlFor="selleb_escrow">에스크로 동의서</label>
            </span>
            <span>
              <button onClick={() => toggleModal("selleb2")}>
                (필수)동의서 읽기
              </button>
              {modals.selleb2 === true ? (
                <Modal
                  title="에스크로 동의서"
                  onClose={() => toggleModal("selleb2")}
                >
                  내용
                </Modal>
              ) : null}
            </span>
          </div>
          <div className="consent-inner">
            <span>
              <input
                type="checkbox"
                id="selleb_noShow"
                checked={agreements.selleb.noShow}
                onChange={() => toggleCheckbox("noShow")}
              />

              <label htmlFor="selleb_noShow">노쇼방지 동의서</label>
            </span>

            <span>
              <button onClick={() => toggleModal("selleb3")}>
                (필수)동의서 읽기
              </button>
              {modals.selleb3 === true ? (
                <Modal
                  title="노쇼방지 동의서"
                  onClose={() => toggleModal("selleb3")}
                >
                  내용
                </Modal>
              ) : null}
            </span>
          </div>
        </div>
      ) : type === "sellecter" ? (
        <div className="consent">
          <div className="consent-inner">
            <span>
              <input
                type="checkbox"
                id="sellecter_publicity"
                checked={agreements.sellecter.publicity}
                onChange={() => toggleCheckbox("publicity")}
              />

              <label htmlFor="sellecter_publicity">초상권 이용 주의사항</label>
            </span>

            <span>
              <button onClick={() => toggleModal("sellecter1")}>
                (필수)동의서 읽기
              </button>
              {modals.sellecter1 === true ? (
                <Modal
                  title="초상권 이용 주의사항"
                  onClose={() => toggleModal("sellecter1")}
                >
                  내용
                </Modal>
              ) : null}
            </span>
          </div>
          <div className="consent-inner">
            <span>
              <input
                type="checkbox"
                id="sellecter_escrow"
                checked={agreements.sellecter.escrow}
                onChange={() => toggleCheckbox("escrow")}
              />

              <label htmlFor="sellecter_escrow">에스크로 동의서</label>
            </span>

            <span>
              <button onClick={() => toggleModal("sellecter2")}>
                (필수)동의서 읽기
              </button>
              {modals.sellecter2 === true ? (
                <Modal
                  title="에스크로 동의서"
                  onClose={() => toggleModal("sellecter2")}
                >
                  내용
                </Modal>
              ) : null}
            </span>
          </div>
        </div>
      ) : null}
      <div className="prev_next_btn">
        <PrevButton onClick={goToPrevTab} />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default ConsentForm;
