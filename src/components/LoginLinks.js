import { Link } from "react-router-dom";
import { useAuth } from "../core/hooks/auth.js";

const LoginLinks = () => {
  const { user } = useAuth({ middleware: "guest" });

  return (
    <div>
      {user ? (
        <>
          <Link to="/createAccount" className="LoginLink">
            dashboard
          </Link>
          <Link to="/dashboard" className="LoginLink">
            My Page
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="LoginLink">
            Log in
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginLinks;
