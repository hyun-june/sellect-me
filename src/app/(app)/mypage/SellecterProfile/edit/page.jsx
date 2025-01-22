'use client'

import { IoMdStarOutline } from 'react-icons/io'
import { useState } from 'react'
import Button from '@/components/Button/Button'
import ProfileImgBox from '@/components/ProfileImgBox/ProfileImgBox'
import ProfileInfoList from '@/components/ProfileInfoList/ProfileInfoList'
import TagButton from '@/components/TagButton/TagButton'
import CustomTabs from '@/components/CustomTabs/CustomTabs'
import Link from 'next/link'
import AddCareer from '../../components/AddCareer/AddCareer'
import { IoCloseSharp } from 'react-icons/io5'
import './css/SellecterEditPage.css'
import AddProfile from '../../components/AddProfile/AddProfile'
import FormInput from '@/components/FormInput/FormInput'
import { useForm } from 'react-hook-form'

const tabItems = [
    {
        title: '프로젝트',
        content: (
            <div className="project">
                <div>안녕하세요 OOO입니다</div>
                <div>OOO에서 창의적이고 유능한 셀럽 분들을 모집합니다.</div>

                <ul>
                    <div>* 자격요건</div>
                    <li>성별 : 여</li>
                    <li>나이: 20~25</li>
                </ul>
                <div>많은 지원 바랍니다.</div>
            </div>
        ),
    },
    {
        title: '커리어',
        content: <AddCareer className="edit_career" />,
    },
]

const testData = {
    business_name: 'sellecter',
    repressentative_name: '김지은',
    business_address: '서울시 강서구 마곡동 888-2',
    business_registration_number: '123-23-1234567',
    company_website: 'www.sellect.com',
}

const SelleterEditPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: testData })

    const sellecterInfoList = [
        {
            title: '회사명',
            content: (
                <FormInput
                    register={register}
                    id="business_name"
                    error={errors.business_name}
                />
            ),
        },
        {
            title: '대표자',
            content: (
                <FormInput
                    register={register}
                    id="repressentative_name"
                    error={errors.repressentative_name}
                />
            ),
        },
        {
            title: '주소',
            content: (
                <FormInput
                    register={register}
                    id="business_address"
                    error={errors.business_address}
                />
            ),
        },
        {
            title: '사업번호',
            content: (
                <FormInput
                    register={register}
                    id="business_registration_number"
                    type="number"
                    error={errors.business_registration_number}
                />
            ),
        },
    ]

    const tagList = ['사진', '영상', '뮤비', '홈쇼핑']

    const sellecterProjectList = [
        {
            title: '홈페이지',
            content: (
                <FormInput
                    register={register}
                    id="company_website"
                    error={errors.company_website}
                />
            ),
        },
        { title: '프로젝트 범위', content: <TagButton list={tagList} /> },
    ]
    const [mainImg, setMainImg] = useState(null)
    const [subImg, setSubImg] = useState([null, null, null])
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')
    const [defaultTags, setDefaultTags] = useState([...tagList])
    const user = 'me'

    const handleMainImgChange = newImg => {
        setMainImg(newImg)
    }

    const handleAddTag = () => {
        if (tags.length + defaultTags.length >= 8) {
            alert('태그는 최대 8개까지만 추가할 수 있습니다.')
            return
        }
        const inputTag = newTag.trim()

        if (!inputTag) return
        if (!tags.includes(inputTag) && !defaultTags.includes(inputTag)) {
            setTags([...tags, inputTag])
            setNewTag('')
        } else {
            alert('이미 존재하는 태그입니다.')
        }
    }

    const handleDeleteTag = (index, isDefault) => {
        if (isDefault) {
            setDefaultTags(prev => prev.filter((_, i) => i !== index))
        } else {
            setTags(prev => prev.filter((_, i) => i !== index))
        }
    }

    const editSubmit = formData => {
        const updateTags = [...defaultTags, ...tags]
        console.log('FormData:', formData)
        console.log('Main Image:', mainImg)
        console.log('tags', updateTags)
    }

    return (
        <form className="sellecter_profile" onSubmit={handleSubmit(editSubmit)}>
            <header>
                {user === 'me' ? (
                    <>
                        <h3>My Profile</h3>
                        <nav>
                            <Button type="submit">save</Button>
                        </nav>
                    </>
                ) : (
                    <>
                        <h3>VIDEO FACTORY</h3>
                        <nav>
                            <Button>
                                <IoMdStarOutline className="star-icons" />
                            </Button>
                            <Button>Chat</Button>
                            <Button>프로젝트 신청하기</Button>
                        </nav>
                    </>
                )}
            </header>

            <section className="edit_main_profile">
                <div>
                    <AddProfile
                        index={-1}
                        profileImg={mainImg}
                        key="main_img"
                        onImageChange={newImg => handleMainImgChange(newImg)}
                        className="edit_sellecter_img"
                    />
                </div>
                <div className="profile_info_box">
                    <div className="profile_List">
                        <ProfileInfoList list={sellecterInfoList} />
                        <ProfileInfoList list={sellecterProjectList} />
                    </div>
                </div>
            </section>
            <div className="tabs_content">
                <CustomTabs items={tabItems}></CustomTabs>
            </div>
        </form>
    )
}

export default SelleterEditPage
