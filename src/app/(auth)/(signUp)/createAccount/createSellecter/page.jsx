'use client'

import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import ConsentForm from '../components/ConsentForm/ConsentForm'
import CompleteForm from '../components/CompleteForm/CompleteForm'
import SellecterForm1 from './components/SellecterForm1/SellecterForm1'
import SellecterForm2 from './components/SellecterForm2/SellecterForm2'

const createSelleterPage = () => {
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
                    <Tab className="tab_item">사업자 정보</Tab>
                    <Tab className="tab_item">민감 정보</Tab>
                    <Tab className="tab_item">동의서</Tab>
                    <Tab className="tab_item">제출 완료</Tab>
                </TabList>
                <div>
                    <TabPanel>
                        <div className="tabs-inner ">
                            <SellecterForm1 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tabs-inner">
                            <SellecterForm2 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="tabs-inner">
                            <ConsentForm type="sellecter" />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tabs-inner">
                            <CompleteForm type="sellecter" />
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </Container>
    )
}

export default createSelleterPage
