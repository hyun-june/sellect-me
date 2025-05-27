import { useNavigate } from "react-router-dom";
import "./AdminUserTable.css";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

const AdminUserTable = ({ list = [], table, ...props }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const ITEMS_PER_PAGE = 10;
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentList = list.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const maxPage = Math.ceil(list.length / ITEMS_PER_PAGE) - 1;
  const userCount = String(list.length).padStart(2, "0");
  const tableType = table.title.includes("회원");
  console.log("🚀 ~ AdminUserTable ~ table:", table);
  const userStatusMessage = {
    pending: "승인 대기",
    approve: "승인 완료",
    rejected: "승인 반려",
  };

  const navigate = useNavigate();

  const handleNavigate = (nickname) => {
    navigate(`/admin/user/${nickname}`);
  };

  const handleNextList = () => {
    if (currentPage < maxPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevList = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="admin_user_table">
      <div className="admin_user_table_header">
        <h4>{`${table.title} (총 ${userCount}개)`}</h4>
        <div>
          <button
            onClick={handlePrevList}
            disabled={currentPage === 0}
            aria-disabled={currentPage === 0}
          >
            <FaCaretLeft />
          </button>

          <button
            onClick={handleNextList}
            disabled={currentPage >= maxPage}
            aria-disabled={currentPage >= maxPage}
          >
            <FaCaretRight />
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {table.options.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({
            length: Math.max(ITEMS_PER_PAGE, currentList.length),
          }).map((_, index) => {
            const user = currentList[index];
            return (
              <tr key={user?.id ?? `empty-${index}`}>
                <td>{currentPage * ITEMS_PER_PAGE + index + 1}</td>
                <td>{user?.type || ""}</td>
                <td>{user?.nickname || ""}</td>
                <td>{user?.name || ""}</td>
                <td>{user?.email || ""}</td>
                <td>{user?.number || ""}</td>
                {tableType ? (
                  <>
                    <td>{user?.country || ""}</td>
                    <td>{user?.team || ""}</td>
                    <td>{user?.work || ""}</td>
                    <td>{user?.joinDate || ""}</td>
                    <td>{user?.now || ""}</td>
                  </>
                ) : (
                  <td>{user?.status ? userStatusMessage[user.status] : ""}</td>
                )}
                <td>
                  {user ? (
                    <button onClick={() => handleNavigate(user.nickname)}>
                      상세
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;
