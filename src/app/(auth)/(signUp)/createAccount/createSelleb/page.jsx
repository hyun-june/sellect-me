'use client'

import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import SellebForm1 from './components/Selleb/SellebForm1/SellebForm1'
import SellebForm2 from './components/Selleb/SellebForm2/SellebForm2'
import SellebForm3 from './components/Selleb/SellebForm3/SellebForm3'
import './css/createSelleb.css'
import SellebForm4 from './components/Selleb/SellebForm4/SellebForm4'
import SellebForm5 from './components/Selleb/SellebForm5/SellebForm5'

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
                        <div className="tabs-inner ">
                            <SellebForm1 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tabs-form2">
                            <SellebForm2 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tabs-inner">
                            <SellebForm3 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tabs-inner ">
                            <SellebForm4 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tabs-inner">
                            <SellebForm5 goToNextTab={goToNextTab} />
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </div>
            </Tabs>
        </Container>
    )
}

export default createSellebPage
