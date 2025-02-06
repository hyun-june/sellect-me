import { Link } from "react-router-dom";
import { useAuth } from "../core/hooks/auth.js";

const LoginLinks = () => {
  const { user } = useAuth({ middleware: "guest" });

  return (
    <div>
      {user ? (
        <>
          <Link to="/createAccount" className="LoginLink">
            회원가입
          </Link>
          <Link to="/dashboard" className="LoginLink">
            Dashboard
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="LoginLink">
            로그인
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginLinks;
