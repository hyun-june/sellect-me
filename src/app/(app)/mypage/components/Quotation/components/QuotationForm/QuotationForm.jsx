import './QuotationForm.css'

const QuotationForm = () => {
    // const src =
    //     'https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg'
    const src = undefined
    return (
        <div className="quotationForm_container">
            <h4>섭외 요청하기</h4>
            <section className="top_section">
                <div>
                    {src ? (
                        <img src={src}></img>
                    ) : (
                        <div className="img_box"></div>
                    )}
                    <span>LEE OOOOO OOOO</span>
                </div>
                <div className="description_box">
                    셀럽에게 프로젝트 세부사항을 전달하고 견적을 확인하세요.{' '}
                    <br /> 셀럽과의 협의는 Chat으로 이루어지며, 섭외 요청이
                    수락되면 계약서를 작성하실 수 있습니다.
                </div>
            </section>

            <form className="info_section">
                <fieldset>
                    <legend>촬영 정보</legend>
                    <span>촬영 날짜</span>
                    <span>촬영 시간</span>
                    <span>촬영 장소</span>
                </fieldset>
                <fieldset>
                    <legend>프로젝트 정보</legend>
                    <span>브랜드 이름</span>
                    <span>프로젝트 이름</span>
                    <span>촬영 타입</span>
                    <span>포트폴리오 파일</span>
                </fieldset>

                <fieldset>
                    <legend>기타 사항</legend>
                    <span>메시지를 입력해주세요.</span>
                </fieldset>
                <div className="confirm_section">
                    <span>프로젝트명 : OOO 화보 촬영</span>
                    <span>촬영 시간 : 5시간</span>
                    <span>금액 : 1,000,000원</span>
                    <span>+ 수수료 : 200,000원(20%)</span>
                    <span>+ 부가세 : 120,000원(10%)</span>
                </div>
            </form>
        </div>
    )
}

export default QuotationForm
