export const validationPatterns = {
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "이메일 형식이 올바르지 않습니다.",
  },
  text: {
    value: /^[a-zA-Z가-힣]+$/,
    message: "한글 또는 영어를 입력해주세요.",
  },
  number: {
    value: /^[0-9]*$/,
    message: "숫자만 입력해주세요.",
  },
  none: {
    value: /^[a-zA-Z가-힣0-9\s]+$/,
    message: "한글, 영어, 숫자만 입력 가능합니다.",
  },
};

export const inputMaxLength = {
  first_name: 50,
  last_name: 50,
  address: 85,
  phone_number: 20,
  bank_name: 50,
  bank_depositor: 50,
  bank_account: 50,
  tax_email: 50,
  manager_name: 50,
  visa: 50,
  registration_number: 50,
  agency: 50,
  manager_name: 50,
  visa_type: 50,
  registration_number: 50,
  agency: 50,
};
