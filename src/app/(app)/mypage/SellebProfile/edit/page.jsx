'use client'

import Button from '@/components/Button/Button'
import { useState } from 'react'
import ProfileImgBox from '@/components/ProfileImgBox/ProfileImgBox'
import ProfileInfoList from '@/components/ProfileInfoList/ProfileInfoList'
import Tabs from '@/components/Tabs/Tabs'
import TagButton from '@/components/TagButton/TagButton'
import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput/FormInput'
import './css/SellebEditPage.css'

const profileData = {
    threeSizeList: [
        { title: '가슴둘레', content: '00' },
        { title: '허리둘레', content: '00' },
        { title: '힙 둘레', content: '00' },
    ],
    sizeList: [
        { title: '상의 사이즈', content: '00' },
        { title: '하의 사이즈', content: '30' },
        { title: '신발 사이즈', content: '250' },
    ],
    colorList: [
        { title: '헤어컬러', content: 'BROWN' },
        { title: '아이컬러', content: 'RED' },
    ],
    countryList: [
        { title: '국가', content: 'KOREA' },
        { title: '언어', content: 'KOREAN' },
    ],
    tabItems: [
        {
            title: '이미지',
            content: [
                <ProfileImgBox key="1" src="/images/test1.png" />,
                <ProfileImgBox key="2" src="/images/test2.jpg" />,
            ],
        },
        {
            title: '커리어',
            content: (
                <ul className="edit_career">
                    <li>2020.01.01 OOO브랜드OOO화보촬영</li>
                    <li>2021.05.30 OOO브랜드OOO화보촬영</li>
                </ul>
            ),
        },
    ],
    tagList: ['사진', '영상', '뮤비', '홈쇼핑'],
    defaultValues: { weight: '177', height: '70', gender: 'FEMALE' },
}

const tagList = ['사진', '영상', '뮤비', '홈쇼핑']
const testData = { weight: '177', height: '70' }

const SellebEditPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: profileData.defaultValues,
    })

    const [payValue, setPayValue] = useState(0)
    const handlePayChange = e => {
        setPayValue(e.target.value)
    }
    const hourlyPay = (payValue * 120000).toLocaleString()
    const profileInfoList = [
        {
            title: '성별',
            content: (
                <div>
                    <select name="gender" {...register('gender')}>
                        <option value="">성별</option>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                    </select>
                </div>
            ),
        },
        {
            title: '키',
            content: (
                <FormInput register={register} id="height" type="number" />
            ),
        },
        {
            title: '몸무게',
            content: (
                <FormInput register={register} id="weight" type="number" />
            ),
        },
    ]

    const editSubmit = formData => {
        console.log('FormData:', formData)
    }

    return (
        <form className="edit_profile" onSubmit={handleSubmit(editSubmit)}>
            <header>
                <h3>My Profile</h3>
                <nav>
                    <Button type="submit">save</Button>
                </nav>
            </header>
            <section className="edit_main_profile">
                <div className="edit_main_profile_img">
                    <ProfileImgBox src="/images/test.jpg" />
                </div>

                <div>
                    <div className="edit_profile_pictures">
                        <ProfileImgBox src="/images/test1.png" />
                        <ProfileImgBox src="/images/test2.jpg" />
                        <ProfileImgBox src="/images/test3.jpg" />
                    </div>
                    <div className="edit_profile_List">
                        <ProfileInfoList list={profileInfoList} />
                        <ProfileInfoList list={profileData.threeSizeList} />
                        <ProfileInfoList list={profileData.sizeList} />
                        <ProfileInfoList list={profileData.colorList} />
                        <ProfileInfoList list={profileData.countryList} />
                    </div>
                </div>
            </section>
            <section className="edit_profile_range">
                <div className="edit_hourly_rangebar">
                    <div className="edit_pay_text">
                        <h5>예상 금액</h5>
                        <div className="margin-bottom-1">
                            <span>{payValue}HR</span>
                            <span>{hourlyPay}KRW</span>
                        </div>
                    </div>

                    <input
                        type="range"
                        id="edit_hourlyPay_bar"
                        min="2"
                        max="12"
                        step="1"
                        value={payValue}
                        onChange={handlePayChange}
                    />
                    <div>
                        <label>2hr</label>
                        <label>12hr</label>
                    </div>
                </div>
                <div>
                    <h5>프로젝트 가능 범위</h5>
                    <TagButton list={tagList} />
                </div>
                <div className="flex_column gap-3em">
                    <div>
                        <h5>이동 가능 지역 범위</h5>
                        <span>서울</span>
                    </div>
                    <div>
                        <h5>저작권 사용기간</h5>
                        <span>1년</span>
                    </div>
                </div>
            </section>
            <div className="edit_tabs_content">
                <Tabs items={profileData.tabItems} />
            </div>
        </form>
    )
}

export default SellebEditPage
