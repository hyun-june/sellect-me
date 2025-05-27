import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import AdminUserApprove from "./AdminUserApprove/AdminUserApprove";
import AdminUserManagement from "./AdminUserManagement/AdminUserManagement";
import { useOutletContext } from "react-router-dom";
import "./AdminUser.css";

const userList = [
  {
    id: 1,
    type: "셀럽",
    nickname: "user123",
    name: "홍길동",
    email: "hong@example.com",
    number: "000-0000-0000",
    country: "대한민국",
    joinDate: "2024-01-01",
    now: "2025-05-11",
    team: "에이컴퍼니",
    work: 5,
  },
  {
    id: 2,
    type: "셀렉터",
    nickname: "user456",
    name: "김철수",
    email: "kim@example.com",
    number: "000-0000-0000",
    country: "USA",
    joinDate: "2024-02-15",
    now: "2025-05-11",
    team: "철수컴퍼니",
    work: 3,
  },
  {
    id: 3,
    type: "셀럽",
    nickname: "user123",
    name: "홍길동",
    email: "hong@example.com",
    number: "000-0000-0000",
    country: "대한민국",
    joinDate: "2024-01-01",
    now: "2025-05-11",
    team: "에이컴퍼니",
    work: 5,
  },
  {
    id: 4,
    type: "셀렉터",
    nickname: "user456",
    name: "김철수",
    email: "kim@example.com",
    number: "000-0000-0000",
    country: "USA",
    joinDate: "2024-02-15",
    now: "2025-05-11",
    team: "철수컴퍼니",
    work: 3,
  },
  {
    id: 5,
    type: "셀럽",
    nickname: "user123",
    name: "홍길동",
    email: "hong@example.com",
    number: "000-0000-0000",
    country: "대한민국",
    joinDate: "2024-01-01",
    now: "2025-05-11",
    team: "에이컴퍼니",
    work: 5,
  },
  {
    id: 6,
    type: "셀렉터",
    nickname: "user456",
    name: "김철수",
    email: "kim@example.com",
    number: "000-0000-0000",
    country: "USA",
    joinDate: "2024-02-15",
    now: "2025-05-11",
    team: "철수컴퍼니",
    work: 3,
  },
  {
    id: 7,
    type: "셀럽",
    nickname: "user123",
    name: "홍길동",
    email: "hong@example.com",
    number: "000-0000-0000",
    country: "대한민국",
    joinDate: "2024-01-01",
    now: "2025-05-11",
    team: "에이컴퍼니",
    work: 5,
  },
  {
    id: 8,
    type: "셀렉터",
    nickname: "user456",
    name: "김철수",
    email: "kim@example.com",
    number: "000-0000-0000",
    country: "USA",
    joinDate: "2024-02-15",
    now: "2025-05-11",
    team: "철수컴퍼니",
    work: 3,
  },
  {
    id: 9,
    type: "셀럽",
    nickname: "user123",
    name: "홍길동",
    email: "hong@example.com",
    number: "000-0000-0000",
    country: "대한민국",
    joinDate: "2024-01-01",
    now: "2025-05-11",
    team: "에이컴퍼니",
    work: 5,
  },
  {
    id: 10,
    type: "셀렉터",
    nickname: "user456",
    name: "김철수",
    email: "kim@example.com",
    number: "000-0000-0000",
    country: "USA",
    joinDate: "2024-02-15",
    now: "2025-05-11",
    team: "철수컴퍼니",
    work: 3,
  },
  {
    id: 11,
    type: "셀렉터",
    nickname: "user456",
    name: "김철수",
    email: "kim@example.com",
    number: "000-0000-0000",
    country: "USA",
    joinDate: "2024-02-15",
    now: "2025-05-11",
    team: "철수컴퍼니",
    work: 3,
  },
];

const newUserList = [
  {
    id: 1,
    type: "셀럽",
    nickname: "newUser123",
    name: "홍길동",
    email: "hong@example.com",
    number: "000-0000-0000",
    status: "pending",
  },
  {
    id: 2,
    type: "셀렉터",
    nickname: "newUser456",
    name: "김철수",
    email: "kim@example.com",
    number: "000-0000-0000",
    status: "approve",
  },
];

// status: pending => 승인 대기 / approve => 승인 완료 / rejected => 승인 반려

const tableKey = [
  {
    title: "회원 목록",
    options: [
      "NO.",
      "회원타입",
      "아이디",
      "이름",
      "이메일",
      "휴대폰",
      "국적",
      "소속",
      "작업횟수",
      "가입일",
      "최근 접속일",
      "관리",
    ],
  },
  {
    title: "승인 목록",
    options: [
      "NO.",
      "회원타입",
      "아이디",
      "이름",
      "이메일",
      "휴대폰",
      "처리결과",
      "관리",
    ],
  },
];

const adminUserTabItems = [
  {
    title: "회원관리",
    content: (
      <AdminUserManagement
        user={userList}
        tableKey={tableKey.find((item) => item.title.includes("회원"))}
      />
    ),
  },
  {
    title: "승인관리",
    content: (
      <AdminUserApprove
        user={newUserList}
        tableKey={tableKey.find((item) => item.title.includes("승인"))}
      />
    ),
  },
];

const AdminUser = () => {
  const { user } = useOutletContext();
  console.log("🚀 ~ AdminUser ~ user:", user);

  return (
    <div className="admin_user_container">
      <CustomTabs items={adminUserTabItems} />
    </div>
  );
};

export default AdminUser;
