import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import ProjectContentBox from "./components/ProjectContentBox/ProjectContentBox";
import "./ProjectManagement.css";

const testData = {
  send: {
    1: {
      name: "aaa",
      description: "AAA테스트",
      date: "10.22",
      memo: [
        { id: 1, content: "내용이있음" },
        { id: 2, content: "내용ㅇ옹오오오오오오" },
      ],
    },
    2: {
      name: "dddd",
      description: "dddd테스트",
      date: "10.22",
      memo: [
        { id: 1, content: "테스트 메모" },
        { id: 2, content: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ" },
      ],
    },
  },

  approve: {
    1: {
      name: "aaa",
      description: "AAAfff테스트",
      date: "10.22",
      status: "",
    },
    2: {
      name: "dddd",
      description: "dddd테스트",
      date: "10.22",
    },
  },
  processing: {
    1: {
      name: "aaa",
      description: "AAAfff테스트",
      date: "10.22",
      status: "",
    },
    2: {
      name: "dddd",
      description: "dddd테스트",
      date: "10.22",
    },
  },
  done: {
    1: {
      name: "aaa",
      description: "AAAfff테스트",
      date: "10.22",
      status: "",
    },
    2: {
      name: "dddd",
      description: "dddd테스트",
      date: "10.22",
    },
  },
};

const tabItems = Object.keys(testData).map((status) => ({
  title: {
    send: "보낸 요청",
    approve: "받은 요청",
    processing: "진행중",
    done: "진행완료",
  }[status],
  content: (
    <div className="project_content_section">
      {Object.entries(testData[status]).map(([key, item]) => (
        <ProjectContentBox
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          date={item.date}
          status={status}
          memo={item.memo}
        />
      ))}
    </div>
  ),
}));

const ProjectManagement = () => {
  return (
    <MainLayout>
      <div className="management_container">
        <h5>프로젝트 관리</h5>
        <CustomTabs items={tabItems} />
      </div>
    </MainLayout>
  );
};

export default ProjectManagement;
