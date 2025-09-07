import { useParams, Link } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout/MainLayout";
import "./BoardDetailPage.css";

const BoardDetailPage = ({ ...props }) => {
  const { id } = useParams();
  const loginUser = 200;
  const data = [
    {
      id: 1,
      title: "게시판 테스트 제목1",
      user: "글쓴이1",
      date: "2025-08-10",
      views: 11,
      isNotice: true,
      userId: 200,
      des: "뭐시기 어쩌구 저쩌구",
    },
  ];

  const boardDelete = () => {
    console.log("보드 삭제", data[0].id);
  };
  const mySelf = loginUser === data[0]?.userId;
  console.log("🚀 ~ BoardDetailPage ~ mySelf:", mySelf);
  return (
    <MainLayout {...props}>
      <div className="board_detail_container">
        <h5>{data[0]?.title}</h5>
        <div className="board_detail_top">
          <span>{data[0]?.user}</span>
          <span>{data[0]?.date}</span>
          <span>조회: {data[0]?.views}</span>
        </div>
        {mySelf && (
          <div className="board_detail_btn">
            <Link to={`/board/create/${data[0].id}`}>수정</Link>
            <button onClick={boardDelete}>삭제</button>
          </div>
        )}
        <div className="board_detail_main">{data[0]?.des}</div>
      </div>
    </MainLayout>
  );
};

export default BoardDetailPage;
