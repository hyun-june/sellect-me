'use client'

import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput/FormInput'
import NextButton from '../../../components/NextButton/NextButton'
import './SellebForm1.css'

const SellebForm1 = ({ goToNextTab }) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            year: '',
            month: '',
            day: '',
            gender: '',
            world: '',
            country: '',
            address: '',
            phone_number: '',
            auth_number: '',
            email_address: '',
        },
    })

    const handleInfo = formData => {
        console.log('FormData:', formData)
        sessionStorage.setItem('infoFormData', JSON.stringify(formData))
        goToNextTab()
    }

    const worldList = ['대한민국', '미국', '일본', '중국']
    const currentYear = new Date().getFullYear()
    const yearList = Array.from(
        { length: 80 },
        (_, i) => `${currentYear - i}년`,
    )
    const monthList = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)

    const dayList = month => {
        const monthNumber = parseInt(month, 10)
        if ([1, 3, 5, 7, 8, 10, 12].includes(monthNumber)) {
            return Array.from({ length: 31 }, (_, i) => `${i + 1}일`)
        }
        if ([4, 6, 9, 11].includes(monthNumber)) {
            return Array.from({ length: 30 }, (_, i) => `${i + 1}일`)
        }
        return Array.from({ length: 28 }, (_, i) => `${i + 1}일`)
    }

    return (
        <div className="sellebForm1-container">
            <form onSubmit={handleSubmit(handleInfo)}>
                <section className="form-name">
                    <FormInput
                        title="이름"
                        id="first_name"
                        register={register}
                    />
                    <FormInput title="성" id="last_name" register={register} />
                </section>
                <section className="birth-section">
                    <span>생년월일</span>
                    <div className="option-birth">
                        <div>
                            <select
                                id="birth_year"
                                name="year"
                                {...register('year')}>
                                <option value="">연도</option>
                                {yearList.map((year, index) => (
                                    <option key={index} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <span>▼</span>
                        </div>
                        <div>
                            <select name="month" {...register('month')}>
                                <option value="">월</option>
                                {monthList.map((month, index) => (
                                    <option key={index} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                            <span>▼</span>
                        </div>
                        <div>
                            <select name="day" {...register('day')}>
                                <option value="">일</option>
                                {dayList(watch('month')).map((day, index) => (
                                    <option key={index} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                            <span>▼</span>
                        </div>
                    </div>
                </section>
                <section className="section-country">
                    <select name="gender" {...register('gender')}>
                        <option value="">성별 ▼</option>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                    </select>

                    <select name="world" {...register('world')}>
                        <option value="">국적 ▼</option>
                        {worldList.map((world, index) => (
                            <option key={index} value={world}>
                                {world}
                            </option>
                        ))}
                    </select>
                    <FormInput
                        title="국적 추가"
                        id="country"
                        register={register}
                    />
                </section>
                <section className="section-address">
                    <FormInput
                        title="현 거주지"
                        id="address"
                        register={register}
                    />
                    <FormInput
                        title="전화번호 입력"
                        id="phone_number"
                        register={register}
                    />
                    <div className="auth-num-section">
                        <FormInput
                            title="인증번호 입력"
                            id="auth_number"
                            register={register}
                        />
                        <button
                            type="button"
                            onClick={() => console.log('인증번호')}>
                            확인
                        </button>
                    </div>
                    <FormInput
                        title="이메일 주소"
                        id="email_address"
                        register={register}
                    />
                </section>

                <NextButton type="submit" />
            </form>
        </div>
    )
}

export default SellebForm1
