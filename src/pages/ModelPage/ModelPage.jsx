import { useLocation } from "react-router-dom";
import ModelForm from "./components/ModelForm/ModelForm";
import MainLayout from "./../../components/Layout/MainLayout/MainLayout";

const ModelPage = (props) => {
  const location = useLocation();
  const type = location.pathname.replace("/model/", "");
  console.log("page Type", type);

  return (
    <MainLayout {...props}>
      <ModelForm type={type} />
    </MainLayout>
  );
};

export default ModelPage;
