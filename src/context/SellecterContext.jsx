import { createContext, useState, useContext } from "react";

const SellecterContext = createContext();

export const SellecterProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    const updateFormData = (newData) => {
        setFormData(prev => ({
            ...prev,
            ...newData
        }));
    };

    // 필요시 폼 데이터 초기화 함수 (현재 사용하지 않음)
    // const resetFormData = () => {
    //     setFormData({});
    // };

    return (
        <SellecterContext.Provider value={{ formData, updateFormData }}>
            {children}
        </SellecterContext.Provider>
    );
};

export const useSellecterContext = () => {
    return useContext(SellecterContext);
};
