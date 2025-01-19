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

const sellecterInfoList = [
    { title: '회사명', content: 'SELLECT' },
    { title: '대표자', content: '김지은' },
    { title: '주소', content: '서울시 강서구 마곡동 888-2' },
    { title: '사업번호', content: '000-00-000000' },
]

const tagList = ['사진', '영상', '뮤비', '홈쇼핑']

const sellecterProjectList = [
    { title: '홈페이지', content: 'www.sellect.com' },
    { title: '프로젝트 범위', content: <TagButton list={tagList} /> },
]

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

const SelleterEditPage = () => {
    const [mainImg, setMainImg] = useState(null)
    const [subImg, setSubImg] = useState([null, null, null])
    const [tabImg, setTabImg] = useState([null])
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')
    const [defaultTags, setDefaultTags] = useState([...tagList])
    const user = 'me'

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

    return (
        <div className="sellecter_profile">
            <header>
                {user === 'me' ? (
                    <>
                        <h3>My Profile</h3>
                        <nav>
                            <Link href="/mypage/SellecterProfile/edit">
                                <Button>edit</Button>
                            </Link>

                            <Button>save</Button>
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
            <section className="main_profile">
                <div className="main_profile_img">
                    <ProfileImgBox />
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
        </div>
    )
}

export default SelleterEditPage
