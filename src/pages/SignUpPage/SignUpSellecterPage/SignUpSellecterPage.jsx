import { Container } from "react-bootstrap";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ConsentForm from "../components/ConsentForm/ConsentForm";
import CompleteForm from "../components/CompleteForm/CompleteForm";
import SellecterForm1 from "./components/SellecterForm1/SellecterForm1";
import SellecterForm2 from "./components/SellecterForm2/SellecterForm2";

const tabList = ["사업자 정보", "민감 정보", "동의서", "제출 완료"];
const SignUpSellecterPage = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const goToNextTab = () => {
    setCurrentTabIndex((prevIndex) => prevIndex + 1);
  };

  const goToPrevTab = () => {
    setCurrentTabIndex((prevIndex) => prevIndex - 1);
  };
  const handleTabSelect = (index) => {
    if (index === tabList.length - 1) {
      alert("모든 필드를 입력해야 제출 완료 탭으로 이동할 수 있습니다.");
      return false;
    }
    setCurrentTabIndex(index);
  };

  return (
    <Container>
      <Tabs selectedIndex={currentTabIndex} onSelect={handleTabSelect}>
        <TabList className="tabs_list">
          {tabList.map((item, index) => (
            <Tab
              key={index}
              className={`tab_item ${index < currentTabIndex ? "visited" : ""}`}
            >
              {item}
            </Tab>
          ))}
        </TabList>
        <div>
          <TabPanel>
            <div className="tabs-inner ">
              <SellecterForm1 goToNextTab={goToNextTab} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-inner">
              <SellecterForm2
                goToNextTab={goToNextTab}
                goToPrevTab={goToPrevTab}
              />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tabs-inner">
              <ConsentForm
                type="sellecter"
                goToNextTab={goToNextTab}
                goToPrevTab={goToPrevTab}
              />
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
  );
};

export default SignUpSellecterPage;
