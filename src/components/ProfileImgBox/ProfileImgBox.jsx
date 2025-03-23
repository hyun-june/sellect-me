import "./ProfileImgBox.css";

const ProfileImgBox = ({ src, ...props }) => {
  return (
    <>
      {src ? (
        <div className="profile_container" {...props}>
          <img src={src} alt="" />
        </div>
      ) : (
        <div className="skeleton_profile_container" {...props}></div>
      )}
    </>
  );
};

export default ProfileImgBox;
