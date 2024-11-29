import FormInput from '@/components/FormInput/FormInput'
import { useForm } from 'react-hook-form'
import './SellebForm3.css'
import NextButton from '../../../components/NextButton/NextButton'

const SellebForm3 = ({ goToNextTab }) => {
    const { register, handleSubmit } = useForm()

    const handleInfo = formData => {
        console.log('Form 3:', formData)
        goToNextTab()
    }

    return (
        <form className="agency-section" onSubmit={handleSubmit(handleInfo)}>
            <p>에이전시 정보</p>
            <div className="agency-info">
                <label htmlFor="">에이전시 소속</label>
                <div>
                    <span>
                        <span>Y</span>
                        <input
                            type="radio"
                            value="yes"
                            {...register('agencyStatus')}
                        />
                    </span>
                    <span>
                        <span>N</span>
                        <input
                            type="radio"
                            value="no"
                            {...register('agencyStatus')}
                        />
                    </span>
                </div>
            </div>
            <FormInput title="에이전시 입력" id="agency" register={register} />
            <div className="agency-date">
                <FormInput
                    title="계약 시작일"
                    id="start_date"
                    register={register}
                />
                <FormInput
                    title="계약 종료일"
                    id="end_date"
                    register={register}
                />
            </div>
            <NextButton type="submit" />
        </form>
    )
}

export default SellebForm3
