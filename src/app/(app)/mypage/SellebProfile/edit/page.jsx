'use client'

import { useState } from 'react'
import Button from '@/components/Button/Button'
import ProfileImgBox from '@/components/ProfileImgBox/ProfileImgBox'
import ProfileInfoList from '@/components/ProfileInfoList/ProfileInfoList'
import Tabs from '@/components/Tabs/Tabs'
import TagButton from '@/components/TagButton/TagButton'
import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput/FormInput'
import './css/SellebEditPage.css'
import AddProfile from '../../components/AddProfile/AddProfile'

const tagList = ['사진', '영상', '뮤비', '홈쇼핑']
const testData = {
    height: '180',
    weight: '70',
    gender: '남성',
    chest: '31',
    waist: '32',
    hips: '33',
    top_size: '30',
    pants_size: '31',
    shoes_size: '260',
    hair_color: 'Black',
    eye_color: 'Brown',
    world: 'KOREAN',
    language: 'English',
    pay: 120000,
}

const SellebEditPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: testData,
    })

    const profileData = {
        profileInfoList: [
            {
                title: '성별',
                content: testData.gender,
            },
            {
                title: '키',
                content: (
                    <FormInput
                        register={register}
                        id="height"
                        type="number"
                        error={errors.height}
                    />
                ),
            },
            {
                title: '몸무게',
                content: (
                    <FormInput
                        register={register}
                        id="weight"
                        type="number"
                        error={errors.weight}
                    />
                ),
            },
        ],
        threeSizeList: [
            {
                title: '가슴둘레',
                content: (
                    <FormInput
                        id="chest"
                        register={register}
                        type="number"
                        error={errors.chest}
                    />
                ),
            },
            {
                title: '허리둘레',
                content: (
                    <FormInput
                        id="waist"
                        register={register}
                        type="number"
                        error={errors.waist}
                    />
                ),
            },
            {
                title: '힙 둘레',
                content: (
                    <FormInput
                        id="hips"
                        register={register}
                        type="number"
                        error={errors.hips}
                    />
                ),
            },
        ],
        sizeList: [
            {
                title: '상의 사이즈',
                content: (
                    <FormInput
                        id="top_size"
                        register={register}
                        type="number"
                        error={errors.top_size}
                    />
                ),
            },
            {
                title: '하의 사이즈',
                content: (
                    <FormInput
                        id="pants_size"
                        register={register}
                        type="number"
                        error={errors.pants_size}
                    />
                ),
            },
            {
                title: '신발 사이즈',
                content: (
                    <FormInput
                        id="shoes_size"
                        register={register}
                        type="number"
                        error={errors.shoes_size}
                    />
                ),
            },
        ],
        colorList: [
            {
                title: '헤어컬러',
                content: (
                    <FormInput
                        id="hair_color"
                        register={register}
                        error={errors.hair_color}
                    />
                ),
            },
            {
                title: '아이컬러',
                content: (
                    <FormInput
                        id="eye_color"
                        register={register}
                        error={errors.eye_color}
                    />
                ),
            },
        ],
        countryList: [
            {
                title: '국가',
                content: (
                    <FormInput
                        id="world"
                        register={register}
                        error={errors.world}
                    />
                ),
            },
            {
                title: '언어',
                content: (
                    <FormInput
                        id="language"
                        register={register}
                        error={errors.language}
                    />
                ),
            },
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
    }
    const [mainImg, setMainImg] = useState(null)
    const [subImg, setSubImg] = useState([null, null, null])

    const handleMainImgChange = newImg => {
        setMainImg(newImg)
    }

    const handleImageChange = (index, newImg) => {
        setSubImg(prev => {
            const updated = [...prev]
            updated[index] = newImg
            return updated
        })
    }

    const editSubmit = formData => {
        console.log('FormData:', formData)
        console.log('Main Image:', mainImg)
        console.log('Sub Images:', subImg)
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
                    <AddProfile
                        index={-1}
                        profileImg={mainImg}
                        key="main_img"
                        onImageChange={newImg => handleMainImgChange(newImg)}
                        className="edit_main_img"
                    />
                </div>

                <div>
                    <div className="edit_profile_pictures">
                        {subImg.map((img, index) => (
                            <AddProfile
                                key={`sub_img_${index}`}
                                index={index}
                                profileImg={img}
                                onImageChange={newImg =>
                                    handleImageChange(index, newImg)
                                }
                                className="edit_sub_img"
                            />
                        ))}
                    </div>
                    <div className="edit_profile_List">
                        <ProfileInfoList list={profileData.profileInfoList} />
                        <ProfileInfoList list={profileData.threeSizeList} />
                        <ProfileInfoList list={profileData.sizeList} />
                        <ProfileInfoList list={profileData.colorList} />
                        <ProfileInfoList list={profileData.countryList} />
                    </div>
                </div>
            </section>
            <section className="edit_profile_range">
                <div className="edit_hourly_rangebar">
                    <div>
                        <h5>시간당 금액</h5>
                        <div className="edit_pay">
                            <span>1HR</span>

                            <div>
                                <FormInput
                                    id="pay"
                                    register={register}
                                    error={errors.pay}
                                    type="number"
                                />
                                <label htmlFor="pay">KRW</label>
                            </div>
                        </div>
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
