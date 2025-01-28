import QuotationForm from './components/QuotationForm/QuotationForm'

const Quotation = ({ user, ...props }) => {
    return (
        <>
            {user === 'selleb' ? (
                <div>
                    {/* <h3>섭외 요청하기</h3> */}
                    <QuotationForm />
                </div>
            ) : user === 'sellecter' ? (
                <div>
                    <h3>프로젝트 요청하기</h3>
                </div>
            ) : (
                <div>로그인이 필요합니다.</div>
            )}
        </>
    )
}

export default Quotation
