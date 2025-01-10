'use client'

import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import './AddProfile.css'

const AddProfile = ({
    className,
    profileImg,
    index,
    onImageChange,
    ...props
}) => {
    const [profileImgUrl, setProfileImgUrl] = useState('')
    const [profileImgfile, setProfileImgfile] = useState(null)

    const handleProfileDelete = () => {
        setProfileImgUrl('')
        setProfileImgfile(null)
        onImageChange(null)
    }

    const handleProfileChange = e => {
        if (!e.target.files) return
        const file = e.target.files[0]
        if (file) {
            let profile = window.URL.createObjectURL(file)
            setProfileImgUrl(profile)
            setProfileImgfile(file)
            onImageChange(profile)
        }
    }

    return (
        <div className={className}>
            {profileImg ? (
                <div className="profilePreview">
                    <img src={profileImg} />
                    <button onClick={handleProfileDelete}>
                        <IoCloseSharp className="font-icon-2" />
                    </button>
                </div>
            ) : (
                <section className="profile-Section">
                    <label htmlFor={`profileImage-${index}`}>
                        <FaPlus className="font-icon-2" />
                        <span>사진 넣기</span>
                    </label>
                    <input
                        type="file"
                        id={`profileImage-${index}`}
                        onChange={handleProfileChange}
                    />
                </section>
            )}
        </div>
    )
}

export default AddProfile
