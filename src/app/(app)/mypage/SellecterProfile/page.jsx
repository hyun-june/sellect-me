import { IoMdStarOutline } from 'react-icons/io'
import Button from '@/components/Button/Button'
import ProfileImgBox from '@/components/ProfileImgBox/ProfileImgBox'
import ProfileInfoList from '@/components/ProfileInfoList/ProfileInfoList'
import TagButton from '@/components/TagButton/TagButton'
import Tabs from '@/components/Tabs/Tabs'
import './css/SellecterProfilePage.css'

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
        content: (
            <ul className="career">
                <li>2020.01.01 OOO브랜드OOO화보촬영</li>
                <li>2021.05.30 OOO브랜드OOO화보촬영</li>
            </ul>
        ),
    },
]

const SellecterProfilePage = () => {
    const user = 'edit'
    return (
        <div className="sellecter_profile">
            <header>
                {user === 'me' ? (
                    <>
                        <h5>My Profile</h5>
                        <nav>
                            <Button>edit</Button>
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
                <Tabs items={tabItems}></Tabs>
            </div>
        </div>
    )
}

export default SellecterProfilePage
