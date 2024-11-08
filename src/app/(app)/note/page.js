"use client";

import Header from '@/app/(app)/Header';
import { useEffect, useState } from 'react'; // useState 훅을 import 합니다.
import axios from 'axios';

const Note = () => { // 컴포넌트 이름은 React로 유지합니다.

    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/notes'); // 노트를 가져오는 API 호출
                setNotes(response.data); // 상태에 노트를 저장
            } catch (error) {
                console.error("Failed to fetch notes:", error);
            }
        };

        fetchNotes(); // 데이터 가져오기 호출
    }, []);

    return (
        <>
            <Header title="Note" />
            <h1 className='text-3xl mb-5'> 글 목록 가져오기 </h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id} className='mb-2'>
                        {note.note} {/* 노트 내용 출력 */}
                    </li>
                ))}
            </ul>
            
        </>
    );
};

export default Note; // 컴포넌트를 기본 내보냅니다.
