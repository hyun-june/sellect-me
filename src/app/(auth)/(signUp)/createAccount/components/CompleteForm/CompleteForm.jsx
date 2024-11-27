const CompleteForm = ({ type }) => {
    return (
        <div className="text-center">
            <h3>축하합니다</h3>
            <p>
                이제 셀렉트의 <span>CREATIVE</span>한 {type.toUpperCase()}로
                활동하세요.
            </p>
            <p>
                {type === 'selleb' ? (
                    <span>프로필을 꾸미면 매칭률이 높아집니다.</span>
                ) : type === 'sellecter' ? (
                    <span>총 15카테고리의 다양한 셀럽들을 만나보세요!</span>
                ) : null}
            </p>
            <span>
                <a href="">MY PAGE 바로가기</a>
            </span>
        </div>
    )
}

export default CompleteForm
