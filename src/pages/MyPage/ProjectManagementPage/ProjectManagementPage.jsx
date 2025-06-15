import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import MainLayout from ".././../../Layouts/MainLayout/MainLayout";
import ProjectContentBox from "./components/ProjectContentBox/ProjectContentBox";
import "./ProjectManagementPage.css";

const testData = {
  send: {
    1: {
      name: "aaa",
      description: "AAA테스트AA스트테스트AAA테스트",
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
      memo: [
        { id: 1, content: " LLL 매트리스제품화보촬영" },
        { id: 2, content: "파주OOO스튜디오" },
        {
          id: 3,
          content:
            "의상: 흰 상의 + 청바지 + 흰 운동화 / 플라워 패턴 원피스 + 베이지 단화/ 흰 잠옷 원피스",
        },
      ],
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

// const tabItems = Object.keys(testData).map((status) => {
//   const items = Object.entries(testData[status] || {}).map(([id, item]) => ({
//     id,
//     ...item,
//   }));

//   const filledItems = [...items, ...Array(6).fill(null)].slice(0, 6);

//   return {
//     title: {
//       send: "보낸 요청",
//       approve: "받은 요청",
//       processing: "진행중",
//       done: "진행완료",
//     }[status],
//     content: (
//       <div className="project_content_section">
//         {filledItems.map((item, index) =>
//           item ? (
//             <ProjectContentBox
//               key={item.id}
//               id={item.id}
//               name={item.name}
//               description={item.description}
//               date={item.date}
//               status={status}
//               memo={item.memo}
//             />
//           ) : (
//             <ProjectContentBox key={`empty-${index}`} isPlaceholder={true} />
//           )
//         )}
//       </div>
//     ),
//   };
// });

const ProjectManagementPage = (props) => {
  return (
    <MainLayout {...props}>
      <div className="management_container">
        <h3>프로젝트 관리</h3>
        <CustomTabs items={tabItems} />
      </div>
    </MainLayout>
  );
};

export default ProjectManagementPage;
