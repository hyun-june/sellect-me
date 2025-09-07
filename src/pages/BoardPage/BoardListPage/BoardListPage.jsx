import MainLayout from "../../../Layouts/MainLayout/MainLayout";
import BoardRow from "./components/BoardRow/BoardRow";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "./../../../components/Pagination/Pagination";
import "./BoardListPage.css";

const boardData = [
  {
    id: 1,
    title: "게시판 테스트 제목1",
    user: "글쓴이1",
    date: "2025-08-10",
    views: 11,
    isNotice: true,
    userId: 1,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
    userId: 2,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-10",
    views: 22,
    isNotice: false,
  },
  {
    id: 2,
    title: "게시판 테스트 제목2",
    user: "글쓴이2",
    date: "2025-08-12",
    views: 22,
    isNotice: true,
  },
];

const BoardListPage = (props) => {
  const [searchParams] = useSearchParams();
  const itemsPerPage = 10;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  boardData.sort((a, b) => {
    if (a.isNotice && !b.isNotice) return -1;
    if (!a.isNotice && b.isNotice) return 1;
    return 0;
  });
  const currentData = boardData.slice(startIdx, endIdx);

  return (
    <MainLayout {...props}>
      <div className="board_list_container">
        <div className="board_list_header">
          <h3>게시판</h3>
          <Link to="create">글쓰기</Link>
        </div>

        <div className="board_list">
          <table>
            <colgroup>
              <col style={{ width: "10%" }} />
              <col style={{ width: "40%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "5%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>등록일</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody>
              {currentData?.map((item) => (
                <BoardRow
                  num={item.id}
                  user={item.user}
                  tit={item.title}
                  date={item.date}
                  views={item.views}
                  isNotice={item.isNotice}
                  userId={item.userId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        totalItems={boardData.length}
        itemsPerPage={itemsPerPage}
        pageCount={5}
      />
    </MainLayout>
  );
};

export default BoardListPage;
