import FormInput from '@/components/FormInput'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import './SellebForm5.css'
import NextButton from '../../../components/NextButton/NextButton'

const SellebForm5 = ({ goToNextTab }) => {
    const { register, handleSubmit, setValue } = useForm()
    const [payValue, setPayValue] = useState(150)
    const handleInfo = formData => {
        console.log('Form 5:', formData)

        goToNextTab()
    }

    const handlePayChange = e => {
        const pay = e.target.value
        setPayValue(pay)
        setValue('payValue', pay)
    }
    console.log('pay', payValue)
    return (
        <form className="pay-section" onSubmit={handleSubmit(handleInfo)}>
            <h5>시간 당 모델료로 희망하는 최소금액을 설정해 주세요.</h5>
            <span>
                언제든 시간 당 모델료를 자유롭게 조절할 수 있으며 <br />
                촬영 건에 따라 셀렉터(클라이언트)와 자유롭게 협상이 가능합니다.
            </span>
            <div className="select-currency">
                <label>
                    한화{' '}
                    <input
                        type="checkbox"
                        value="won"
                        {...register('currency')}
                    />
                </label>
                <label>
                    달러{' '}
                    <input
                        type="checkbox"
                        value="dollar"
                        {...register('currency')}
                    />
                </label>
            </div>
            <div className="pay-bar-section">
                <div>
                    <span>0</span>
                    <span>300</span>
                </div>
                <input
                    id="pay-rangebar"
                    type="range"
                    min="0"
                    max="300"
                    step="10"
                    value={payValue}
                    onChange={handlePayChange}
                />
                <div>
                    <span>단위 : 10,000</span>
                </div>
            </div>

            <div className="select-currency-self">
                <FormInput
                    title="직접입력"
                    id="currency-input"
                    register={register}
                />
            </div>
            <NextButton />
        </form>
    )
}

export default SellebForm5
