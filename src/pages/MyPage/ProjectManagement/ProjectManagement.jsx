import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import ProjectContentBox from "./components/ProjectContentBox/ProjectContentBox";
import "./ProjectManagement.css";

const tabItems = [
  {
    title: "보낸 요청",
    content: <ProjectContentBox />,
  },
  {
    title: "받은 요청",
    content: <div>ㄹㄹ</div>,
  },
  {
    title: "진행 중",
    content: <div>ㅂㅂ</div>,
  },
  {
    title: "진행 완료",
    content: <div>22</div>,
  },
];

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
