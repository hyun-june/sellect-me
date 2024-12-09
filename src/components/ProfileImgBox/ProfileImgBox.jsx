import './ProfileImgBox.css'

const ProfileImgBox = ({ src }) => {
    return (
        <div className="profile_container">
            <img src={src} alt="" />
        </div>
    )
}

export default ProfileImgBox
