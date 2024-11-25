'use client'

import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import SellebForm1 from './components/Selleb/SellebForm1/SellebForm1'
import './css/createSelleb.css'

const createSellebPage = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const goToNextTab = () => {
        setCurrentTabIndex(prevIndex => prevIndex + 1)
    }
    return (
        <Container>
            <Tabs
                selectedIndex={currentTabIndex}
                onSelect={index => setCurrentTabIndex(index)}>
                <TabList className="tabs_list">
                    <Tab className="tab_item">개인 정보</Tab>
                    <Tab className="tab_item">민감 정보</Tab>
                    <Tab className="tab_item">에이전시</Tab>
                    <Tab className="tab_item">프로필</Tab>
                    <Tab className="tab_item">모델료</Tab>
                    <Tab className="tab_item">동의서</Tab>
                    <Tab className="tab_item">제출 완료</Tab>
                </TabList>
                <div>
                    <TabPanel>
                        <div className="tabs-inner">
                            <SellebForm1 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </div>
            </Tabs>
        </Container>
    )
}

export default createSellebPage
