'use client'

import Header from '@/app/(app)/Header';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation'; // 추가: Next.js의 useRouter 훅 사용

const Write = () => {
    const router = useRouter(); // 추가: useRouter 훅 선언
    // CSRF 토큰 요청 함수
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    

    // 서버에 데이터 전송하는 함수
    const write = async ({ ...props }) => {
        await csrf(); // CSRF 보호를 위해 토큰을 가져옴

        axios
            .post('/write', props) // 서버로 폼 데이터 전송
            .then(() => {
                // 성공 시 추가 동작 (필요시 작성)
                router.push('/note');
            })
            .catch(error => {
                if (error.response.status !== 422) throw error;

                // 에러 처리: 422 상태 코드를 제외한 다른 에러 처리
                console.error(error.response.data.errors);
            });
    };

    // 폼 제출 핸들러
    const submitForm = event => {
        event.preventDefault();

        const note = event.target.note.value; // 폼에서 note 값을 가져옴

        write({
            note,
        });
    };
    
    return (
        <>
            <Header title="Write" />
            <div className='p-5'>
                <div className='text-3xl mb-5'>글 작성하기</div>
                <form onSubmit={submitForm}>
                    <input
                        className='w-full rounded h-24 mb-5'
                        type='text'
                        id='note'
                        name='note'
                        
                    />
                    <button
                        type="submit" 
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        글작성
                    </button>
                    
                </form>
            </div>
        </>
    );
}

export default Write;
