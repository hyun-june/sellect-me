import { MdOutlineHub } from "react-icons/md";
import { FaPersonWalking } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
import AdminUserTable from "../components/AdminUserTable/AdminUserTable";
import AdminUserUi from "./../components/AdminUserUi/AdminUserUi";
import AdminFilterBox from "./../components/AdminFilterBox/AdminFilterBox";
import "./AdminUserManagement.css";

const AdminUserManagement = ({ user, tableKey, ...props }) => {
  const adminFilters = [
    {
      title: "회원종류",
      options: ["전체", "셀렉트", "셀럽", "탈퇴"],
    },
    {
      title: "회원소속",
      options: ["전체", "에이전시 소속", "개인사업자", "법인사업자"],
    },
  ];

  const adminUserData = [
    {
      icon: <MdOutlineHub className="admin_icon" />,
      label: "전체",
      value: 0,
      unit: "명",
    },
    {
      icon: <FaBuilding className="admin_icon" />,
      label: "셀렉터",
      value: 0,
      unit: "명",
    },
    {
      icon: <IoPersonSharp className="admin_icon" />,
      label: "셀럽",
      value: 0,
      unit: "명",
    },
    {
      icon: <FaPersonWalking className="admin_icon" />,
      label: "탈퇴",
      value: 0,
      unit: "명",
    },
  ];

  const defaultFilter = {
    filterName: "",
    filterId: "",
    filterCountry: "",
    filterUserType: [],
    filterBusinessType: [],
  };

  const [filter, setFilter] = useState(defaultFilter);

  return (
    <div className="admin_user_container">
      <h3>회원관리 &gt; 회원관리</h3>

      <AdminUserUi data={adminUserData} />

      <AdminFilterBox
        filter={filter}
        setFilter={setFilter}
        defaultFilter={defaultFilter}
        adminFilters={adminFilters}
        countryFilter={true}
        title="회원"
      />

      <AdminUserTable list={user} table={tableKey} />
    </div>
  );
};

export default AdminUserManagement;
