import { FaBuilding } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import AdminUserUi from "./../components/AdminUserUi/AdminUserUi";
import { useState } from "react";
import AdminFilterBox from "../components/AdminFilterBox/AdminFilterBox";
import "./AdminUserApprove.css";
import AdminUserTable from "../components/AdminUserTable/AdminUserTable";

const AdminUserApprove = ({ user, tableKey, ...props }) => {
  const adminFilters = [
    {
      title: "승인처리",
      options: ["전체", "승인 대기", "승인 완료", "승인 반려"],
    },
    {
      title: "회원",
      options: ["전체", "셀럽", "셀렉터"],
    },
  ];

  const adminUserData = [
    {
      icon: <FaBuilding className="admin_icon" />,
      label: "셀렉터",
    },
    {
      label: "승인 요청",
      value: 0,
      unit: "명",
    },
    {
      label: "승인 대기",
      value: 0,
      unit: "명",
    },
    {
      label: "승인 완료",
      value: 0,
      unit: "명",
    },
    {
      icon: <IoPersonSharp className="admin_icon" />,
      label: "셀럽",
    },
    {
      label: "승인 요청",
      value: 0,
      unit: "명",
    },
    {
      label: "승인 대기",
      value: 0,
      unit: "명",
    },
    {
      label: "승인 완료",
      value: 0,
      unit: "명",
    },
  ];

  const defaultFilter = {
    filterName: "",
    filterId: "",
    filterUserType: [],
    filterBusinessType: [],
  };

  const [filter, setFilter] = useState(defaultFilter);

  return (
    <div>
      <h3>회원관리 &gt; 승인관리</h3>

      <AdminUserUi data={adminUserData} />

      <AdminFilterBox
        filter={filter}
        setFilter={setFilter}
        defaultFilter={defaultFilter}
        adminFilters={adminFilters}
        countryFilter={false}
        title="승인"
      />

      <AdminUserTable list={user} table={tableKey} />
    </div>
  );
};

export default AdminUserApprove;
