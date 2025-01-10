'use client'

import { useState } from 'react'
import './test.css'

const page = () => {
    const [testImg, setTestImg] = useState([])
    const [preImg, setPreImg] = useState('')

    const 사진등록 = e => {
        const file = e.target.files[0]
        if (file) {
            let profile = window.URL.createObjectURL(file)
            setTestImg(prev => [...prev, profile])
        }
    }

    const 사진보여라 = e => {
        setPreImg(e.target.src)
    }

    const 지우기 = index => {
        setTestImg(prev => prev.filter((_, idx) => idx !== index))
    }

    return (
        <div className="padding">
            <div className="미리보기">
                {preImg ? <img src={preImg} alt="" /> : <div></div>}
            </div>
            <div>
                <label htmlFor="dd">사진추가</label>
                <input type="file" id="dd" onChange={사진등록} />
                <div>
                    {testImg.map((img, index) => (
                        <div key={index} onClick={사진보여라}>
                            <img src={img} alt={`img_${index}`} />
                            <button onClick={() => 지우기(index)}>x</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
