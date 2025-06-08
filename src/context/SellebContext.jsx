// src/context/SellebContext.js
// 값을 담아놓는 파일 SignUpSellebPage.jsx의
import { createContext, useState, useContext } from "react";

// Context 생성
const SellebContext = createContext();

// Provider 컴포넌트
export const SellebProvider = ({ children }) => {
    // 모든 폼 데이터를 저장할 상태
    const [formData, setFormData] = useState({});

    // 폼 데이터 업데이트 함수
    const updateFormData = (newData) => {
        setFormData(prev => ({
            ...prev,
            ...newData
        }));
    };

    return (
        <SellebContext.Provider value={{ formData, updateFormData }}>
            {children}
        </SellebContext.Provider>
    );
};

// 커스텀 훅 - Context 사용을 쉽게 해줌
export const useSellebContext = () => {
    return useContext(SellebContext);
};