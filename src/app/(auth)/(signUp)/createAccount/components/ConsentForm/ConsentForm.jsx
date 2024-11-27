import './ConsentForm.css'
const ConsentForm = ({ type }) => {
    return (
        <div>
            {type === 'selleb' ? (
                <div className="selleb-consent">
                    <div className="selleb-consent-inner">
                        <span>
                            <input type="checkbox" className="input-check" />
                            <label htmlFor="">초상권 동의서</label>
                        </span>

                        <span>
                            <a href="">(필수)동의서 읽기</a>
                        </span>
                    </div>
                    <div className="selleb-consent-inner">
                        <span>
                            <input type="checkbox" className="input-check" />
                            <label htmlFor="">에스크로 동의서</label>
                        </span>

                        <span>
                            <a href="">(필수)동의서 읽기</a>
                        </span>
                    </div>
                    <div className="selleb-consent-inner">
                        <span>
                            <input type="checkbox" className="input-check" />
                            <label htmlFor="">노쇼방지 동의서</label>
                        </span>

                        <span>
                            <a href="">(필수)동의서 읽기</a>
                        </span>
                    </div>
                </div>
            ) : type === 'sellecter' ? (
                <div>여기는 "sellecter"에 최종 제출</div>
            ) : null}
        </div>
    )
}

export default ConsentForm
