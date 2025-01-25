'use client'

import { useState } from 'react'

const NoticeForm = () => {
    const [noticeText, setNoticeText] = useState('')

    const handleChange = e => {
        setNoticeText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Submitted Notice:', noticeText)
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
            <h1
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                }}>
                공고문 작성
            </h1>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="notice"
                    style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: 'bold',
                    }}>
                    공고문 내용
                </label>
                <textarea
                    id="notice"
                    value={noticeText}
                    onChange={handleChange}
                    rows="10"
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                    }}
                    placeholder="공고문 내용을 작성하세요..."
                />
                <button
                    type="submit"
                    style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}>
                    제출
                </button>
            </form>
            <div style={{ marginTop: '1.5rem' }}>
                <h2
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                    }}>
                    미리보기
                </h2>
                {/* CSS로 줄 바꿈과 공백 유지 */}
                <div
                    style={{
                        whiteSpace: 'pre-wrap', // 줄 바꿈과 공백 유지
                        padding: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.5rem',
                        backgroundColor: '#f9f9f9',
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        fontFamily: 'inherit',
                    }}>
                    {noticeText || '공고문 내용을 입력하면 여기에 표시됩니다.'}
                </div>
            </div>
        </div>
    )
}
export default NoticeForm
