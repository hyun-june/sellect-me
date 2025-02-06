'use client'
import { useState } from 'react'
import TagButton from '../TagButton/TagButton'
import { IoCloseSharp } from 'react-icons/io5'

const AddDeleteTag = ({
    tags = [],
    defaultTags = [],
    handleTagsChange,
    className,
    ...props
}) => {
    const [newTag, setNewTag] = useState('')
    const handleAddTag = () => {
        if (tags.length + defaultTags.length >= 8) {
            alert('태그는 최대 8개까지만 추가할 수 있습니다.')
            return
        }

        const inputTag = newTag.trim()
        if (
            !inputTag ||
            tags.includes(inputTag) ||
            defaultTags.includes(inputTag)
        ) {
            alert('이미 존재하는 태그입니다.')
            return
        }
        const updatedTags = [...tags, inputTag]
        handleTagsChange(updatedTags)
        setNewTag('')
    }

    const handleDeleteTag = (index, isDefault) => {
        let updatedTags = [...tags]
        if (isDefault) {
            const updatedDefaultTags = defaultTags.filter((_, i) => i !== index)
            handleTagsChange([...updatedDefaultTags, ...tags])
        } else {
            updatedTags = updatedTags.filter((_, i) => i !== index)
            handleTagsChange(updatedTags)
        }
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleAddTag()
        }
    }

    return (
        <div className={className}>
            <ul>
                {[...defaultTags, ...tags].map((tag, index) => (
                    <li key={index}>
                        <TagButton>{tag}</TagButton>
                        <button
                            type="button"
                            onClick={() =>
                                index < defaultTags.length
                                    ? handleDeleteTag(index, true)
                                    : handleDeleteTag(
                                          index - defaultTags.length,
                                          false,
                                      )
                            }>
                            <IoCloseSharp />
                        </button>
                    </li>
                ))}
            </ul>

            <div className="input_container">
                <input
                    type="text"
                    value={newTag}
                    placeholder="예)사진,뮤비"
                    onChange={e => setNewTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleAddTag} type="button">
                    +
                </button>
            </div>
        </div>
    )
}

export default AddDeleteTag
