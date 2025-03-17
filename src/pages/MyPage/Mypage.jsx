import { Link } from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
const MyPage = () => {
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/mypage/selleb">go to selleb</Link>
        <Link to="/mypage/sellecter">go to sellecter</Link>
      </div>
    </MainLayout>
  );
};

export default MyPage;
