'use client'

import Button from '../Button/Button'
import ProfileImgBox from '../ProfileImgBox/ProfileImgBox'
import { IoMdStarOutline } from 'react-icons/io'
import { Container } from 'react-bootstrap'
import ProfileInfoList from './components/ProfileInfoList/ProfileInfoList'
import { useState } from 'react'
import './ProfileLayout.css'

const profileInfoList = [
    { title: '성별', content: 'FEMALE' },
    { title: '키', content: '160cm' },
    { title: '몸무게', content: '44kg' },
]

const profileThreeSizeList = [
    { title: '가슴둘레', content: '00' },
    { title: '허리둘레', content: '00' },
    { title: '힙 둘레', content: '00' },
]

const profileSizeList = [
    { title: '상의 사이즈', content: '00' },
    { title: '하의 사이즈', content: '30' },
    { title: '신발 사이즈', content: '250' },
]

const profileColorList = [
    { title: '헤어컬러', content: 'BROWN' },
    { title: '아이컬러', content: 'RED' },
]

const profileCountryList = [
    { title: '국가', content: 'KOREA' },
    { title: '언어', content: 'KOREAN' },
]

const ProfileLayout = () => {
    const [payValue, setPayValue] = useState(0)
    const handlePayChange = e => {
        const pay = e.target.value
        setPayValue(pay)
    }

    const hourlyPay = payValue * 120000
    const user = '11'

    return (
        <div className="create_profile">
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
                        <h5>닉네임</h5>
                        <nav>
                            <Button>
                                <IoMdStarOutline className="star-icons" />
                            </Button>
                            <Button>Com-Card</Button>
                            <Button>Chat</Button>
                            <Button>견적 확인하기</Button>
                        </nav>
                    </>
                )}
            </header>
            <section>
                <div className="main_profile_img">
                    <ProfileImgBox src="/images/test.jpg" />
                </div>

                <div className="profile_info_box">
                    <div className="profile_pictures">
                        <ProfileImgBox src="/images/test1.png" />
                        <ProfileImgBox src="/images/test2.jpg" />
                        <ProfileImgBox src="/images/test3.jpg" />
                    </div>
                    <div className="profile_List">
                        <ProfileInfoList list={profileInfoList} />
                        <ProfileInfoList list={profileThreeSizeList} />
                        <ProfileInfoList list={profileSizeList} />
                        <ProfileInfoList list={profileColorList} />
                        <ProfileInfoList list={profileCountryList} />
                    </div>
                </div>
            </section>
            {/* <div className="profile_range">
                <div className="hourly_rangebar">
                    <div>예상 금액</div>
                    <div>
                        <span>{payValue}HR</span>
                        <span>{hourlyPay}KRW</span>
                    </div>

                    <input
                        type="range"
                        id="hourlyPay_bar"
                        min="2"
                        max="12"
                        step="1"
                        value={payValue}
                        onChange={handlePayChange}
                    />
                    <div>
                        <span>2hr</span>
                        <span>12hr</span>
                    </div>
                </div>
                <div>
                    <div>프로젝트 가능 범위</div>
                    <span>사진</span>
                    <span>영상</span>
                </div>
                <div>
                    <>
                        <div>이동 가능 지역 범위</div>
                        <span>서울</span>
                    </>
                    <>
                        <div>저작권 사용기간</div>
                        <span>1년</span>
                    </>
                </div>
            </div> */}
        </div>
    )
}

export default ProfileLayout
