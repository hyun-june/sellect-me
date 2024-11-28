import { useState } from 'react'
import Modal from '@/components/Modal/Modal'
import './ConsentForm.css'

const ConsentForm = ({ type }) => {
    const [modals, setModals] = useState({
        selleb1: false,
        selleb2: false,
        selleb3: false,
        sellecter1: false,
        sellecter2: false,
    })

    const toggleModal = modalName => {
        setModals(prevState => ({
            ...prevState,
            [modalName]: !prevState[modalName],
        }))
    }

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
                            <button onClick={() => toggleModal('selleb1')}>
                                (필수)동의서 읽기
                            </button>
                            {modals.selleb1 === true ? (
                                <Modal
                                    title="초상권 동의서"
                                    onClose={() => toggleModal('selleb1')}>
                                    내용
                                </Modal>
                            ) : null}
                        </span>
                    </div>
                    <div className="selleb-consent-inner">
                        <span>
                            <input type="checkbox" className="input-check" />
                            <label htmlFor="">에스크로 동의서</label>
                        </span>
                        <span>
                            <button onClick={() => toggleModal('selleb2')}>
                                (필수)동의서 읽기
                            </button>
                            {modals.selleb2 === true ? (
                                <Modal
                                    title="에스크로 동의서"
                                    onClose={() => toggleModal('selleb2')}>
                                    내용
                                </Modal>
                            ) : null}
                        </span>
                    </div>
                    <div className="selleb-consent-inner">
                        <span>
                            <input type="checkbox" className="input-check" />
                            <label htmlFor="">노쇼방지 동의서</label>
                        </span>

                        <span>
                            <button onClick={() => toggleModal('selleb3')}>
                                (필수)동의서 읽기
                            </button>
                            {modals.selleb3 === true ? (
                                <Modal
                                    title="노쇼방지 동의서"
                                    onClose={() => toggleModal('selleb3')}>
                                    내용
                                </Modal>
                            ) : null}
                        </span>
                    </div>
                </div>
            ) : type === 'sellecter' ? (
                <div className="selleb-consent">
                    <div className="selleb-consent-inner">
                        <span>
                            <input type="checkbox" className="input-check" />
                            <label htmlFor="">초상권 이용 주의사항</label>
                        </span>

                        <span>
                            <button onClick={() => toggleModal('sellecter1')}>
                                (필수)동의서 읽기
                            </button>
                            {modals.sellecter1 === true ? (
                                <Modal
                                    title="초상권 이용 주의사항"
                                    onClose={() => toggleModal('sellecter1')}>
                                    내용
                                </Modal>
                            ) : null}
                        </span>
                    </div>
                    <div className="selleb-consent-inner">
                        <span>
                            <input type="checkbox" className="input-check" />
                            <label htmlFor="">에스크로 동의서</label>
                        </span>

                        <span>
                            <button onClick={() => toggleModal('sellecter2')}>
                                (필수)동의서 읽기
                            </button>
                            {modals.sellecter2 === true ? (
                                <Modal
                                    title="에스크로 동의서"
                                    onClose={() => toggleModal('sellecter2')}>
                                    내용
                                </Modal>
                            ) : null}
                        </span>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ConsentForm
