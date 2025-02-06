import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import './AddCareer.css'

const carrersList = [
    '2020.01.01 OOO브랜드OOO화보촬영',
    '2021.05.30 OOO브랜드OOO화보촬영',
]

const AddCareer = ({ ...props }) => {
    const [careers, setCareers] = useState([])
    const [newCareer, setNewCareer] = useState('')
    const [dafaultCareers, setDefaultCareers] = useState([...carrersList])

    const handleAddCareer = () => {
        if (newCareer.trim() === '') {
            alert('내용을 입력해주세요.')
            return
        }

        if (
            !careers.includes(newCareer) &&
            !dafaultCareers.includes(newCareer)
        ) {
            setCareers([...careers, newCareer])
            setNewCareer('')
        } else {
            alert('중복된 내용이 있습니다.')
        }
    }

    const handleDeleteCareer = (index, isDefault) => {
        if (isDefault) {
            setDefaultCareers(prev => prev.filter((_, i) => i !== index))
        } else {
            setCareers(prev => prev.filter((_, i) => i !== index))
        }
    }

    return (
        <div className="career">
            <ul {...props}>
                {[...dafaultCareers, ...careers].map((carrer, index) => (
                    <li key={index}>
                        {carrer}{' '}
                        <button
                            type="button"
                            onClick={() =>
                                index < dafaultCareers.length
                                    ? handleDeleteCareer(index, true)
                                    : handleDeleteCareer(
                                          index - dafaultCareers.length,
                                          false,
                                      )
                            }>
                            <IoCloseSharp />
                        </button>
                    </li>
                ))}
            </ul>
            <div className="add_career">
                <input
                    type="text"
                    value={newCareer}
                    onChange={e => setNewCareer(e.target.value)}
                    placeholder="내용을 입력해주세요"
                    onKeyPress={e => e.key === 'Enter' && handleAddCareer()}
                />
                <button type="button" onClick={handleAddCareer}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default AddCareer
