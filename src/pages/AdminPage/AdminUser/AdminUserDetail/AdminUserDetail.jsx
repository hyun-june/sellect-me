import { useOutletContext, useParams } from "react-router-dom";
import "./AdminUserDetail.css";
import { useState } from "react";

const AdminUserDetail = () => {
  const { user } = useOutletContext();
  const { nickname } = useParams();
  const detailUser = user.find((user) => user.nickname === nickname);
  console.log("🚀 ~ AdminUserDetail ~ detailUser:", detailUser);
  const [rejectedMessage, setRejectedMessage] = useState();

  const userKey = {
    selleb: "셀럽",
    sellecter: "셀렉터",
  };

  const handleMessage = (e) => {
    setRejectedMessage(e.target.value);
  };

  const handleApprove = () => {
    console.log("승인");
  };

  const handleRejected = () => {
    console.log("반려 사유", rejectedMessage);
  };

  return (
    <div className="admin_user_detail_container">
      <h3>회원관리 &gt; 가입 정보 확인</h3>
      <div className="admin_user_detail_box">
        <div>
          <span>{userKey[detailUser.userType]}</span>
          <span>{detailUser.name}</span>
        </div>
        <div>
          <button onClick={handleApprove}>승인</button>
          <button onClick={handleRejected}>반려</button>
        </div>
      </div>
      <div className="admin_user_detail_section">
        <section className="admin_user_detail_inner">
          <div className="admin_user_detail_info">
            <h4>기본정보</h4>
            <div className="admin_info_line">
              <div className="admin_info_box">길동</div>
              <div className="admin_info_box">홍</div>
            </div>
            <div className="admin_info_box">
              <label>생년월일</label> <span>1982.07.01</span>
            </div>
            <div className="admin_info_line">
              <div className="admin_info_box">
                <label>성별</label> <span>여</span>
              </div>
              <div className="admin_info_box">
                <label>국적</label> <span>대한민국</span>
              </div>
            </div>
            <div className="admin_info_box">
              <label>언어</label> <span>한국어</span>
            </div>
            <div className="admin_info_box">
              <label>현 거주지</label>
              <span>서울특별시 xx구 xx로 00아파트 0동 000호</span>
            </div>
            <div className="admin_info_box">
              <label>전화번호</label>
              <span>010-0000-0000</span>
            </div>
            <div className="admin_info_box">
              <label>메일</label>
              <span>asd1234@naver.com</span>
            </div>

            <h4>비자 정보</h4>
            <div className="admin_info_box">
              <label>대한민국 영주권 / 시민권</label>
              <span></span>
            </div>
            <div className="admin_info_box">
              <label>비자종류</label>
              <span></span>
            </div>
            <div className="admin_info_box">
              <label>외국인 등록번호</label>
              <span></span>
            </div>
          </div>
          <div className="admin_user_detail_info">
            <h4>에이전시 정보</h4>
            <div className="admin_info_box">
              <label>대한민국 영주권 / 시민권</label>
              <span></span>
            </div>
            <div className="admin_info_box">
              <label>비자종류</label>
              <span></span>
            </div>
            <div className="admin_info_box">
              <label>외국인 등록번호</label>
              <span></span>
            </div>
            <h4>계좌 정보</h4>
            <div className="admin_info_box">
              <label>수익금 출금 은행</label>
              <span>기업은행</span>
            </div>
            <div className="admin_info_box">
              <label>예금주</label>
              <span>홍길동</span>
            </div>
            <div className="admin_info_box">
              <label>수익금 출금계좌</label>
              <span>000000000000</span>
            </div>
          </div>
        </section>
        <section className="admin_user_detail_picture_section">
          <div className="admin_user_copy">
            <figure className="admin_user_copy_picture">
              <div>
                <img src="/images/test.jpg" alt="" />
              </div>
              <figcaption>신분증</figcaption>
            </figure>
            <figure className="admin_user_copy_picture">
              <div>
                <img src="/images/test.jpg" alt="" />
              </div>
              <figcaption>통장사본</figcaption>
            </figure>
          </div>
          <div className="admin_user_rejected">
            <h4>반려 사유</h4>
            <textarea
              name=""
              id="rejected_message"
              rows="4"
              cols="50"
              onChange={handleMessage}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminUserDetail;
