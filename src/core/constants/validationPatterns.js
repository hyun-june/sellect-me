export const validationPatterns = {
    email: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: '이메일 형식이 올바르지 않습니다.',
    },
    text: {
        value: /^[a-zA-Z가-힣]+$/,
        message: '한글 또는 영어를 입력해주세요.',
    },
    number: {
        value: /^[0-9]*$/,
        message: '숫자만 입력해주세요.',
    },
}
