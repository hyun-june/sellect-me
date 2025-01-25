'use client'

import Button from '@/components/Button/Button'
import { useState } from 'react'
import './NoticeForm.css'

const NoticeForm = () => {
    const [noticeText, setNoticeText] = useState('')

    const handleChange = e => {
        const updatedText = e.target.value
        setNoticeText(updatedText)

        autoResize(e.target)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Submitted Notice:', noticeText)
    }

    const autoResize = textarea => {
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    return (
        <div className="notice_container">
            <div>
                <h4>공고 작성</h4>
                <div>
                    <textarea
                        value={noticeText}
                        onChange={handleChange}
                        rows="10"
                        placeholder="공고문 내용을 작성하세요."></textarea>
                    <Button type="button" onClick={handleSubmit}>
                        저장
                    </Button>
                </div>
            </div>

            <div>
                <h4>미리보기</h4>
                <div className="notice_preview">
                    {noticeText || '공고문 내용을 입력하면 여기에 표시됩니다.'}
                </div>
            </div>
        </div>
    )
}

export default NoticeForm
