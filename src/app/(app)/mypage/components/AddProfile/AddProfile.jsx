'use client'

import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import './css/AddProfile.css'

const AddProfile = ({ className, ...props }) => {
    // const [profileImgUrl, setProfileImgUrl] = useState('')
    // const [profileImgfile, setProfileImgfile] = useState(null)
    // const handleProfileChange = e => {
    //     if (!e.target.files) return
    //     const file = e.target.files[0]
    //     if (file) {
    //         let profile = window.URL.createObjectURL(file)
    //         setProfileImgUrl(profile)
    //         setProfileImgfile(file)
    //     }
    // }
    return (
        <div className={className}>
            <section className="profile-Section">
                <label htmlFor="profileImage">
                    <FaPlus className="profile-icon" />
                </label>
                <input
                    type="file"
                    id="profileImage"
                    // onChange={handleProfileChange}
                />
            </section>
        </div>
    )
}

export default AddProfile
