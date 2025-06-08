import AppRouter from "./routes/AppRouter";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { MobileProvider } from "./context/MobileContext";

// 메인 페이지 입니다.
function App() {
  return (
    <div>
      <MobileProvider>
      <AppRouter />
      </MobileProvider>
    </div>
  );
}

export default App;
