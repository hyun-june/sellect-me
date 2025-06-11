import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import ServiceForm from "./components/ServiceForm/ServiceForm";
import "./ServicePage.css";

const ServicePage = (props) => {
  return (
    <MainLayout {...props}>
      <ServiceForm />
    </MainLayout>
  );
};

export default ServicePage;
