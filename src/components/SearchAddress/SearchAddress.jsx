import { useEffect, useRef, useState } from "react";
import "./SearchAddress.css";

const SearchAddress = ({ setAddress }) => {
  const [addr, setAddr] = useState(localStorage.getItem("address") || "");
  const [postcode, setPostcode] = useState(
    localStorage.getItem("postcode") || ""
  );
  const [detailAddr, setDetailAddr] = useState(
    localStorage.getItem("detailAddr") || ""
  );
  const [extraAddr, setExtraAddr] = useState(
    localStorage.getItem("extraAddr") || ""
  );
  const detailAddressRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("postcode", postcode);
    localStorage.setItem("address", addr);
    localStorage.setItem("detailAddr", detailAddr);
    localStorage.setItem("extraAddr", extraAddr);
  }, [postcode, addr, detailAddr, extraAddr]);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("postcode");
      localStorage.removeItem("address");
      localStorage.removeItem("detailAddr");
      localStorage.removeItem("extraAddr");
    }, 10 * 60 * 1000);
    return () => clearTimeout(timer);
  });

  const openPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        if (data.userSelectedType === "R") {
          setAddr(data.roadAddress);
        } else {
          setAddr(data.jibunAddress);
        }

        let extra = "";
        if (data.bname && /[동|로|가]$/g.test(data.bname)) {
          extra += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extra += extra ? `, ${data.buildingName}` : data.buildingName;
        }
        if (extra) {
          extra = `(${extra})`;
        }

        setAddr(data.address);
        setPostcode(data.zonecode);
        setExtraAddr(extra);

        if (detailAddressRef.current) {
          detailAddressRef.current.focus();
        }

        setAddress(`${data.zonecode} ${data.address} ${detailAddr} ${extra}`);
      },
    }).open();
  };

  return (
    <div className="SearchAddress_form">
      <input type="text" placeholder="우편번호" value={postcode} readOnly />
      <button type="button" onClick={openPostcode}>
        우편번호 찾기
      </button>
      <br />
      <input type="text" placeholder="주소" value={addr} />
      <br />
      <div>
        <input
          type="text"
          placeholder="상세주소"
          value={detailAddr}
          onChange={(e) => {
            setDetailAddr(e.target.value);

            const combined = `${postcode} ${addr} ${e.target.value} ${extraAddr}`;
            setAddress(combined);
          }}
        />
        <input type="text" placeholder="참고항목" value={extraAddr} />
      </div>
    </div>
  );
};

export default SearchAddress;
