'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import FormInput from '@/components/FormInput'
import './SellebForm1.css'
import NextButton from '../../NextButton/NextButton'

const SellebForm1 = ({ goToNextTab }) => {
    const { register, handleSubmit } = useForm()

    const [selectYear, setSelectYear] = useState('')
    const [selectMonth, setSelectMonth] = useState('')
    const [selectDay, setSelectDay] = useState('')
    const [selectGender, setSelectGender] = useState('')
    const [selectWorld, setSelectWorld] = useState('')
    const [selectFormDataInfo, setSelectFormDataInfo] = useState({})

    const handleData = () => {
        const formData1 = {
            year: selectYear,
            month: selectMonth,
            day: selectDay,
            world: selectWorld,
            gender: selectGender,
        }
        setSelectFormDataInfo(formData1)
        console.log('form1', formData1)

        goToNextTab()
    }

    const handleInfo = formData => {
        // sessionStorage.setItem(formTitle, formData)
        console.log('formData', formData)
        handleData()
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

    const handleYearChange = e => {
        const year = e.target.value
        setSelectYear(year)
    }

    const handleMonthChange = e => {
        const month = e.target.value
        setSelectMonth(month)
    }

    const handleDayChange = e => {
        const day = e.target.value
        setSelectDay(day)
    }

    const handleGender = e => {
        const gender = e.target.value
        setSelectGender(gender)
    }
    const handleWorld = e => {
        const world = e.target.value
        setSelectWorld(world)
    }

    const authNumber = () => {
        console.log('인증번호')
    }
    return (
        <div className="sellebForm1-container">
            <form onSubmit={handleSubmit(handleInfo)}>
                <section className="form-name">
                    <FormInput
                        title="이름"
                        id="first-name"
                        register={register}
                    />
                    <FormInput title="성" id="last-name" register={register} />
                </section>
                <section className="birth-section">
                    <span>생년월일</span>
                    <div className="option-birth">
                        <select onChange={handleYearChange} value={selectYear}>
                            <option value="">연도 ▼</option>
                            {yearList.map((year, index) => (
                                <option key={index}>{year}</option>
                            ))}
                        </select>
                        <select
                            onChange={handleMonthChange}
                            value={selectMonth}>
                            <option value="">월 ▼</option>
                            {monthList.map((month, index) => (
                                <option key={index}>{month}</option>
                            ))}
                        </select>
                        <select onChange={handleDayChange} value={selectDay}>
                            <option value="">일 ▼</option>
                            {dayList(selectMonth).map((day, index) => (
                                <option key={index}>{day}</option>
                            ))}
                        </select>
                    </div>
                </section>
                <section className="section-country">
                    <select value={selectGender} onChange={handleGender}>
                        <option value="">성별 ▼</option>

                        <option>남성</option>
                        <option>여성</option>
                    </select>

                    <select value={selectWorld} onChange={handleWorld}>
                        <option value="">국적 ▼</option>
                        {worldList.map((world, index) => (
                            <option key={index}>{world}</option>
                        ))}
                    </select>
                    <FormInput
                        title="국적 입력"
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
                        id="phone-number"
                        register={register}
                    />
                    <div className="auth-num-section">
                        <FormInput
                            title="인증번호 입력"
                            id="auth-number"
                            register={register}
                        />
                        <button type="button" onClick={authNumber}>
                            확인
                        </button>
                    </div>
                    <FormInput
                        title="이메일 주소"
                        id="email-address"
                        register={register}
                    />
                </section>

                <NextButton type="submit" />
            </form>
        </div>
    )
}

export default SellebForm1
