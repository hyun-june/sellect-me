'use client'

import Button from '../Button/Button'
import ProfileImgBox from '../ProfileImgBox/ProfileImgBox'
import { IoMdStarOutline } from 'react-icons/io'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProfileLayout.css'
import { Container } from 'react-bootstrap'
import ProfileInfoList from './components/ProfileInfoList/ProfileInfoList'

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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }
    const user = '11'

    return (
        <Container className="create_profile">
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
                    {/* <div>
                        <div>
                            <strong>성별</strong>
                            <span>FEMALE</span>
                        </div>
                        <div>
                            <strong>국가</strong>
                            <span>KOREA</span>
                        </div>
                        <div>
                            <strong>언어</strong>
                            <span>KOREAN</span>
                        </div>
                    </div> */}
                    <div className="profile_List">
                        <ProfileInfoList list={profileInfoList} />
                        <ProfileInfoList list={profileThreeSizeList} />
                        <ProfileInfoList list={profileSizeList} />
                        <ProfileInfoList list={profileColorList} />
                        <ProfileInfoList list={profileCountryList} />
                    </div>
                    <div className="profile_range">
                        <div>
                            <div>예상 금액</div>
                            <div>6HR 720,000KRW</div>
                            <input type="range" />
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
                    </div>
                </div>
            </section>
            {/* <div className="slider_section">
                <Slider {...settings} className="slider-container">
                    <div className="sub_profile_img">
                        <ProfileImgBox src="/images/test.jpg" />
                        <ProfileImgBox src="/images/test.jpg" />
                        <ProfileImgBox src="/images/test.jpg" />
                        <ProfileImgBox src="/images/test.jpg" />
                    </div>
                </Slider>
            </div> */}
        </Container>
    )
}

export default ProfileLayout
