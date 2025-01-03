'use client'

import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import './css/AddProfile.css'

const AddProfile = ({ className, ...props }) => {
    const [profileImgUrl, setProfileImgUrl] = useState('')
    const [profileImgfile, setProfileImgfile] = useState(null)

    const handleProfileDelete = () => {
        setProfileImgUrl('')
        setProfileImgfile(null)
    }

    const handleProfileChange = e => {
        if (!e.target.files) return
        const file = e.target.files[0]
        if (file) {
            let profile = window.URL.createObjectURL(file)
            setProfileImgUrl(profile)
            setProfileImgfile(file)
        }
    }

    return (
        <div className={className}>
            {profileImgUrl ? (
                <div className="profilePreview">
                    <img src={profileImgUrl} />
                    <button onClick={handleProfileDelete}>
                        <IoCloseSharp className="profile-icon" />
                    </button>
                </div>
            ) : (
                <section className="profile-Section">
                    <label htmlFor="profileImage">
                        <FaPlus className="profile-icon" />
                        <span>사진 넣기</span>
                    </label>
                    <input
                        type="file"
                        id="profileImage"
                        onChange={handleProfileChange}
                    />
                </section>
            )}
        </div>
    )
}

export default AddProfile
