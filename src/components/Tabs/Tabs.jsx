'use client'
import { useState } from 'react'
import './Tabs.css'

const Tabs = ({ defaultIdx = 0, items = [] }) => {
    const [tabIdx, setTabIdx] = useState(defaultIdx)
    return (
        <div>
            <ul className="tabs-header">
                {items?.map(({ title }, i) => (
                    <li
                        key={i}
                        className={tabIdx === i ? 'active' : ''}
                        onClick={() => setTabIdx(i)}>
                        <span>{title}</span>
                    </li>
                ))}
            </ul>
            {items[tabIdx]?.content}
        </div>
    )
}

export default Tabs
