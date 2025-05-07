import { useLocation } from "react-router-dom";
import ModelForm from "./components/ModelForm/ModelForm";
import MainLayout from "./../../components/Layout/MainLayout/MainLayout";

const ModelPage = () => {
  const location = useLocation();
  const type = location.pathname.replace("/model/", "");
  console.log("yy", type);

  return (
    <MainLayout>
      <ModelForm type={type} />
    </MainLayout>
  );
};

export default ModelPage;
