'use client'

import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput'
import DropdownForm from '@/components/DropdownForm'
import NextButton from '../../../components/NextButton/NextButton'
import './SellecterForm2.css'

const SellecterForm2 = ({ goToNextTab }) => {
    const { register, handleSubmit, setValue } = useForm()

    const handleInfo = formData => {
        console.log('FormData:', formData)
        goToNextTab()
    }

    const handleSelect = (fieldName, value) => {
        setValue(fieldName, value)
    }

    const bankList = ['국민은행', '농협']

    return (
        <div>
            <form
                onSubmit={handleSubmit(handleInfo)}
                className="sellecter-form">
                <div>
                    <p>계좌정보</p>
                    <DropdownForm
                        label="사업자 통장 은행"
                        list={bankList}
                        selectedValue=""
                        onSelect={value => handleSelect('business_bank', value)}
                    />
                    <FormInput
                        title="사업자 계좌(통장사본과 일치)"
                        id="business_account"
                        register={register}
                    />
                </div>
                <div>
                    <p>통장사본</p>
                </div>
            </form>
        </div>
    )
}

export default SellecterForm2
