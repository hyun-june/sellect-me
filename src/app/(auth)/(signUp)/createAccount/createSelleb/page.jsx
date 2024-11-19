'use client'
import { Container } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput'
import './css/createSelleb.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const createSellebPage = () => {
    const { register, handleSubmit } = useForm()
    const handleInfo = formData => {
        // sessionStorage.setItem(formTitle, formData)
        console.log('formData', formData)
    }
    // const onSubmit = (formData, e) => {
    //     const formTitle = e.target.title
    //     console.log('11', formTitle)
    //     handleInfo(formData, formTitle)
    // }

    const [selectMonth, setSelectMonth] = useState(null)

    const currentYear = new Date().getFullYear()
    const yearList = Array.from(
        { length: 80 },
        (_, i) => `${currentYear - i}년`,
    )
    const monthList = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)
    const dayList = month => {
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            return Array.from({ length: 31 }, (_, i) => `${i + 1}일`)
        }
        if ([4, 6, 9, 11].includes(month)) {
            return Array.from({ length: 30 }, (_, i) => `${i + 1}일`)
        }
        return Array.from({ length: 28 }, (_, i) => `${i + 1}일`)
    }

    const handleMonthChange = e => {
        const month = parseInt(e.target.value, 10) // 선택된 월 값
        setSelectMonth(month)
    }

    return (
        <Container>
            <Tabs defaultIndex={0}>
                <TabList className="tabs_list">
                    <Tab className="tab_item">개인 정보</Tab>
                    <Tab className="tab_item">민감 정보</Tab>
                    <Tab className="tab_item">에이전시</Tab>
                    <Tab className="tab_item">프로필</Tab>
                    <Tab className="tab_item">모델료</Tab>
                    <Tab className="tab_item">동의서</Tab>
                    <Tab className="tab_item">제출 완료</Tab>
                </TabList>

                <TabPanel>
                    <form onSubmit={handleSubmit(handleInfo)}>
                        <FormInput title="이름" id="name" register={register} />
                        <div>
                            <select className="box">
                                <option value="" disabled selected>
                                    <span>
                                        <span>출생 연도</span>
                                        <span>▼</span>
                                    </span>
                                </option>
                                {yearList.map((year, index) => (
                                    <option key={index}>{year}</option>
                                ))}
                            </select>
                            <select onChange={handleMonthChange}>
                                <option value="" disabled selected>
                                    <span>
                                        <span>월</span>
                                        <span>▼</span>
                                    </span>
                                </option>
                                {monthList.map((month, index) => (
                                    <option key={index}>{month}</option>
                                ))}
                            </select>
                            <select>
                                <option value="" disabled selected>
                                    <span>
                                        <span>일</span>
                                        <span>▼</span>
                                    </span>
                                </option>
                                {dayList(selectMonth).map((day, index) => (
                                    <option key={index}>{day}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">버튼</button>
                    </form>
                </TabPanel>
                <TabPanel>
                    <form onSubmit={handleSubmit(handleInfo)}>
                        <FormInput
                            title="이름2"
                            id="name2"
                            register={register}
                        />
                        <button type="submit">버튼</button>
                    </form>
                </TabPanel>
                <TabPanel>
                    <form onSubmit={handleSubmit(handleInfo)}>
                        <FormInput
                            title="이름"
                            id="name3"
                            register={register}
                        />
                        <button type="submit">버튼</button>
                    </form>
                </TabPanel>
                <TabPanel>
                    <FormInput title="이름4" {...register('name4')} />
                </TabPanel>
                <TabPanel>
                    <FormInput title="이름5" {...register('name5')} />
                </TabPanel>
                <TabPanel>
                    <button type="submit">버튼</button>
                </TabPanel>
                <TabPanel>
                    <FormInput title="이름7" {...register('name7')} />
                </TabPanel>
            </Tabs>
        </Container>
    )
}

export default createSellebPage
