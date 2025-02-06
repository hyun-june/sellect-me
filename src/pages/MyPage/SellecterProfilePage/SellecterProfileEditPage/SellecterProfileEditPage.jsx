import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdStarOutline } from "react-icons/io";
import ProfileInfoList from "./../../../../components/ProfileInfoList/ProfileInfoList";
import CustomTabs from "./../../../../components/CustomTabs/CustomTabs";
import AddCareer from "../../components/AddCareer/AddCareer";
import AddProfile from "../../components/AddProfile/AddProfile";
import FormInput from "./../../../../components/FormInput/FormInput";
import NoticeForm from "./components/NoticeForm/NoticeForm";
import AddDeleteTag from "./../../../../components/AddDeleteTag/AddDeleteTag";
import Button from "./../../../../components/Button/Button";
import "./SellecterProfileEditPage.css";

const testData = {
  business_name: "sellecter",
  repressentative_name: "김지은",
  business_address: "서울시 강서구 마곡동 888-2",
  business_registration_number: "123-23-1234567",
  company_website: "www.sellect.com",
  noticeText: "",
};

const SellecterProfileEditPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: testData });

  const sellecterInfoList = [
    {
      title: "회사명",
      content: (
        <FormInput
          register={register}
          id="business_name"
          error={errors.business_name}
          disableValidation={true}
        />
      ),
    },
    {
      title: "대표자",
      content: (
        <FormInput
          register={register}
          id="repressentative_name"
          error={errors.repressentative_name}
          disableValidation={true}
        />
      ),
    },
    {
      title: "주소",
      content: (
        <FormInput
          register={register}
          id="business_address"
          error={errors.business_address}
          disableValidation={true}
        />
      ),
    },
    {
      title: "사업번호",
      content: (
        <FormInput
          register={register}
          id="business_registration_number"
          type="number"
          error={errors.business_registration_number}
          disableValidation={true}
        />
      ),
    },
  ];

  const sellecterProjectList = [
    {
      title: "홈페이지",
      content: (
        <FormInput
          register={register}
          id="company_website"
          error={errors.company_website}
          disableValidation={true}
        />
      ),
    },
    ,
  ];
  const [mainImg, setMainImg] = useState(null);
  const [noticeText, setNoticeText] = useState("");
  const user = "me";

  const handleNoticeSave = (text) => {
    setNoticeText(text);
  };

  const tabItems = [
    {
      title: "프로젝트",
      content: <NoticeForm noticeText={noticeText} onSave={handleNoticeSave} />,
    },
    {
      title: "커리어",
      content: <AddCareer className="edit_career" />,
    },
  ];

  const handleMainImgChange = (newImg) => {
    setMainImg(newImg);
  };

  const [tags, setTags] = useState([]);
  const [defaultTags, setDefaultTags] = useState([]);

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const editSubmit = (formData) => {
    console.log("FormData:", formData);
    console.log("Main Image:", mainImg);
    console.log("noticeText", noticeText);
    console.log("tags", tags);
  };

  return (
    <form className="sellecter_profile" onSubmit={handleSubmit(editSubmit)}>
      <header>
        {user === "me" ? (
          <>
            <h3>My Company</h3>
            <nav>
              <Button type="submit">save</Button>
            </nav>
          </>
        ) : (
          <>
            <h3>VIDEO FACTORY</h3>
            <nav>
              <Button>
                <IoMdStarOutline className="star-icons" />
              </Button>
              <Button>Chat</Button>
              <Button>프로젝트 신청하기</Button>
            </nav>
          </>
        )}
      </header>

      <section className="edit_main_profile">
        <div>
          <AddProfile
            index={-1}
            profileImg={mainImg}
            key="main_img"
            onImageChange={(newImg) => handleMainImgChange(newImg)}
            className="edit_sellecter_img"
          />
        </div>
        <div className="profile_info_box">
          <div className="profile_List">
            <ProfileInfoList list={sellecterInfoList} />
            <div>
              <ProfileInfoList list={sellecterProjectList} />

              <span className="project_title">프로젝트 범위</span>
              <AddDeleteTag
                tags={tags}
                defaultTags={defaultTags}
                handleTagsChange={handleTagsChange}
                className="tags_list"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="tabs_content">
        <CustomTabs items={tabItems}></CustomTabs>
      </div>
    </form>
  );
};

export default SellecterProfileEditPage;
