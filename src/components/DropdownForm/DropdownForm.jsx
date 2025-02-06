'use client'
import { useState, useRef, useEffect } from 'react'
import './DropdownForm.css'

const DropdownForm = ({ list, selectedValue, label, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(selectedValue)
    const dropDownRef = useRef()
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClick = value => {
        setSelected(value)
        onSelect(value)
        setIsOpen(false)
    }

    const focusOut = event => {
        if (
            dropDownRef.current &&
            !dropDownRef.current.contains(event.target)
        ) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', focusOut)
        return () => {
            document.removeEventListener('mousedown', focusOut)
        }
    }, [])

    return (
        <div className="custom-dropdown" ref={dropDownRef}>
            <label>{label}</label>
            <div className="dropdown-container">
                <div className="selected-section" onClick={toggleDropdown}>
                    <div className="selected-item">
                        <div>{selected || <>&nbsp;</>}</div>
                        <span>▼</span>
                    </div>
                </div>
                {isOpen && (
                    <div className="dropdown-list">
                        {list.map((item, index) => (
                            <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => handleOptionClick(item)}>
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropdownForm
