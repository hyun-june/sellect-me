import { Container } from "react-bootstrap";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SellebForm1 from "./components/SellebForm1/SellebForm1";
import SellebForm2 from "./components/SellebForm2/SellebForm2";
import SellebForm3 from "./components/SellebForm3/SellebForm3";
import SellebForm4 from "./components/SellebForm4/SellebForm4";
import SellebForm5 from "./components/SellebForm5/SellebForm5";
import ConsentForm from "../components/ConsentForm/ConsentForm";
import CompleteForm from "../components/CompleteForm/CompleteForm";
import "./SignUpSellebPage.css";

const tabList = [
  "개인 정보",
  "민감 정보",
  "에이전시",
  "프로필",
  "모델료",
  "동의서",
  "제출 완료",
];

const SignUpSellebPage = () => {
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

    if (currentTabIndex === tabList.length - 1) {
      alert("현재 제출 완료 탭에 있습니다. 다른 탭으로 이동할 수 없습니다.");
      return;
    }
    setCurrentTabIndex(index);
  };

  return (
    <Container>
      <Tabs selectedIndex={currentTabIndex} onSelect={handleTabSelect}>
        <TabList className="tabs_list">
          {tabList.map((item, index) => (
            <>
              <Tab
                key={index}
                className={`tab_item ${
                  index < currentTabIndex ? "visited" : ""
                }`}
              >
                {item}
              </Tab>
            </>
          ))}
        </TabList>
        <div>
          <TabPanel>
            <div className="tabs-inner">
              <SellebForm1 goToNextTab={goToNextTab} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-form2">
              <SellebForm2
                goToNextTab={goToNextTab}
                goToPrevTab={goToPrevTab}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-inner">
              <SellebForm3
                goToNextTab={goToNextTab}
                goToPrevTab={goToPrevTab}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-inner">
              <SellebForm4
                goToNextTab={goToNextTab}
                goToPrevTab={goToPrevTab}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-inner">
              <SellebForm5
                goToNextTab={goToNextTab}
                goToPrevTab={goToPrevTab}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-inner">
              <ConsentForm
                type="selleb"
                goToNextTab={goToNextTab}
                goToPrevTab={goToPrevTab}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-inner">
              <CompleteForm type="selleb" goToPrevTab={goToPrevTab} />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </Container>
  );
};

export default SignUpSellebPage;
