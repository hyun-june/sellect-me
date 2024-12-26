import './ProfileImgBox.css'

const ProfileImgBox = ({ src }) => {
    return (
        <>
            {src ? (
                <div className="profile_container">
                    <img src={src} alt="" />
                </div>
            ) : (
                <div className="skeleton_container"></div>
            )}
        </>
    )
}

export default ProfileImgBox
