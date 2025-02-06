import './ProfileImgBox.css'

const ProfileImgBox = ({ src, className }) => {
    return (
        <>
            {src ? (
                <div className="profile_container">
                    <img src={src} alt="" />
                </div>
            ) : (
                <div className={className}></div>
            )}
        </>
    )
}

export default ProfileImgBox
