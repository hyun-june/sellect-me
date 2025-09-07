import "./BoardRow.css";
import { useNavigate } from "react-router-dom";

const BoardRow = ({ ...props }) => {
  const { num, tit, user, date, views, isNotice } = props;
  const navigate = useNavigate();

  const handleDetailMove = () => {
    navigate(`${num}`);
  };

  return (
    <tr className="board_row" onClick={handleDetailMove}>
      <td className={`board_row_num ${isNotice ? "notice" : ""}`}>
        {isNotice ? "공지" : num}
      </td>
      <td className="board_row_tit">{tit}</td>
      <td className="board_row_user">{user}</td>
      <td className="board_row_date">{date}</td>
      <td className="board_row_view">{views}</td>
    </tr>
  );
};
export default BoardRow;
