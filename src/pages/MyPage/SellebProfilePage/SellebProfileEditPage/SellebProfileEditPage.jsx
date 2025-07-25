import { useState } from "react";
import { useForm } from "react-hook-form";
import ProfileInfoList from "../../../../components/ProfileInfoList/ProfileInfoList";
import CustomTabs from "../../../../components/CustomTabs/CustomTabs";
import FormInput from "../../../../components/FormInput/FormInput";
import AddProfile from "../../components/AddProfile/AddProfile";
import PreviewImg from "./components/PreviewImg/PreviewImg";
import AddCareer from "../../components/AddCareer/AddCareer";
import AddDeleteTag from "../../../../components/AddDeleteTag/AddDeleteTag";
import Button from "../../../../components/Button/Button";
import MainLayout from "../.././../../Layouts/MainLayout/MainLayout";
import SelectInput from "./../../../../components/SelectInput/SelectInput";
import SelectInputCountry from "../../../../components/SelectInputCountry/SelectInputCountry";
import "./SellebProfileEditPage.css";

const testData = {
  height: "180",
  weight: "70",
  gender: "1",
  chest: "31",
  waist: "32",
  hips: "33",
  top_size: "30",
  bottom_size: "31",
  shoe_size: "260",
  hair_color: "1",
  eye_color: "2",
  nationality: "10",
  language: "2",
  pay: 120000,
  city: "서울",
  copyright: 1,
};

const languageList = [
  "Korean",
  "English",
  "Japanese",
  "Chinese",
  "Spanish",
  "French",
  "German",
  "Russian",
  "Portuguese",
  "Hindi",
  "Arabic",
  "Italian",
  "Vietnamese",
  "Thai",
  "Indonesian",
];

const colorList = [
  "Black",
  "Dark Brown",
  "Brown",
  "Light Brown",
  "Blonde",
  "Red",
  "Gray",
  "White",
  "Blue",
  "Green",
  "Hazel",
];

const careerList = [
  "2020.01.01 OOO브랜드OOO화보촬영",
  "2021.05.30 OOO브랜드OOO화보촬영",
];

const genderList = ["남성", "여성"];

const SellebProfileEditPage = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: testData,
  });

  const [mainImg, setMainImg] = useState(null);
  const [subImg, setSubImg] = useState([null, null, null, null]);
  const [tags, setTags] = useState([]);
  const [defaultTags, setDefaultTags] = useState(["사진", "뮤비"]);
  const [careers, setCareers] = useState([...careerList]);

  const profileData = {
    profileInfoList: [
      {
        title: "Gender",
        content: (
          <SelectInput
            register={register}
            id="gender"
            options={genderList}
            title="성별"
          />
        ),
      },
      {
        title: "Height",
        content: (
          <FormInput
            register={register}
            id="height"
            type="number"
            error={errors.height}
          />
        ),
      },
      {
        title: "Weight",
        content: (
          <FormInput
            register={register}
            id="weight"
            type="number"
            error={errors.weight}
          />
        ),
      },
    ],
    threeSizeList: [
      {
        title: "Chest",
        content: (
          <FormInput
            id="chest"
            register={register}
            type="number"
            error={errors.chest}
          />
        ),
      },
      {
        title: "Waist",
        content: (
          <FormInput
            id="waist"
            register={register}
            type="number"
            error={errors.waist}
          />
        ),
      },
      {
        title: "Hip size",
        content: (
          <FormInput
            id="hips"
            register={register}
            type="number"
            error={errors.hips}
          />
        ),
      },
    ],
    sizeList: [
      {
        title: "Top size",
        content: (
          <FormInput
            id="top_size"
            register={register}
            type="number"
            error={errors.top_size}
          />
        ),
      },
      {
        title: "Bottom size",
        content: (
          <FormInput
            id="bottom_size"
            register={register}
            type="number"
            error={errors.bottom_size}
          />
        ),
      },
      {
        title: "Shoe size",
        content: (
          <FormInput
            id="shoe_size"
            register={register}
            type="number"
            error={errors.shoe_size}
          />
        ),
      },
    ],
    colorList: [
      {
        title: "Hair Color",
        content: (
          <SelectInput
            id="hair_color"
            title="헤어컬러"
            options={colorList}
            register={register}
          />
        ),
      },
      {
        title: "아이컬러",
        content: (
          <SelectInput
            id="eye_color"
            title="아이컬러"
            options={colorList}
            register={register}
          />
        ),
      },
    ],
    countryList: [
      {
        title: "Nationality",
        content: (
          // <FormInput id="world" register={register} error={errors.world} />
          <SelectInputCountry
            register={register}
            watch={watch}
            id="nationality"
          />
        ),
      },
      {
        title: "Language",
        content: (
          <SelectInput
            id="language"
            title="언어"
            options={languageList}
            register={register}
          />
        ),
      },
    ],
    tabItems: [
      //  {
      //     title: "이미지",
      //     content: <PreviewImg />,
      //   },
      {
        title: "커리어",
        content: (
          <AddCareer
            className="selleb_edit_career"
            careers={careers}
            setCareers={setCareers}
          />
        ),
      },
    ],
  };

  const handleTagsChange = (updatedTags, updatedDefaultTags) => {
    setTags(updatedTags);
    setDefaultTags(updatedDefaultTags);
  };

  const handleMainImgChange = (newImg) => {
    setMainImg(newImg);
  };

  const handleImageChange = (index, newImg) => {
    setSubImg((prev) => {
      const updated = [...prev];
      updated[index] = newImg;
      return updated;
    });
  };

  const editSubmit = (formData) => {
    const updateTags = [...defaultTags, ...tags];
    console.log("FormData:", formData);
    console.log("Main Image:", mainImg);
    console.log("Sub Images:", subImg);
    console.log("tags", updateTags);
    console.log("🚀 ~ SellebProfileEditPage ~ careers:", careers);
  };

  return (
    <MainLayout {...props}>
      <form className="selleb_edit_profile" onSubmit={handleSubmit(editSubmit)}>
        <div className="selleb_edit_header">
          <h3>My Profile</h3>
          <div>
            <Button type="submit">save</Button>
          </div>
        </div>
        <section className="selleb_edit_main_profile">
          <AddProfile
            index={-1}
            profileImg={mainImg}
            key="main_img"
            onImageChange={(newImg) => handleMainImgChange(newImg)}
            className="selleb_edit_main_img"
          />

          <div className="selleb_edit_info">
            <div className="selleb_edit_profile_pictures">
              {subImg.map((img, index) => (
                <AddProfile
                  key={`sub_img_${index}`}
                  index={index}
                  profileImg={img}
                  onImageChange={(newImg) => handleImageChange(index, newImg)}
                  className="selleb_edit_sub_img"
                />
              ))}
            </div>
            <div className="selleb_edit_profile_List">
              <ProfileInfoList list={profileData.profileInfoList} />
              <ProfileInfoList list={profileData.threeSizeList} />
              <ProfileInfoList list={profileData.sizeList} />
              <div className="option_list">
                <ProfileInfoList list={profileData.colorList} />
              </div>
              <div className="option_list">
                <ProfileInfoList list={profileData.countryList} />
              </div>
            </div>
          </div>
        </section>
        <section className="selleb_edit_profile_range">
          <div className="selleb_edit_hourly_rangebar">
            <div>
              <h5>시간당 금액</h5>
              <div className="selleb_edit_pay">
                <span>1HR</span>

                <div>
                  <FormInput
                    id="pay"
                    register={register}
                    error={errors.pay}
                    type="number"
                  />
                  <label htmlFor="pay">KRW</label>
                </div>
              </div>
            </div>
          </div>
          <div className="selleb_edit_work_scope">
            <h5>프로젝트 가능 범위</h5>

            <AddDeleteTag
              tags={tags}
              defaultTags={defaultTags}
              handleTagsChange={handleTagsChange}
              className="selleb_tags_list"
            />
          </div>
          <div className="selleb_range_info">
            <div>
              <h5>촬영 가능 지역</h5>

              <FormInput id="city" register={register} error={errors.city} />
            </div>
            <div>
              <h5>저작권 사용기간</h5>
              <div className="copyright_input">
                <FormInput
                  id="copyright"
                  register={register}
                  error={errors.copyright}
                />
                <span>년</span>
              </div>
            </div>
          </div>
        </section>
        <div>
          <CustomTabs items={profileData.tabItems} />
        </div>
      </form>
    </MainLayout>
  );
};

export default SellebProfileEditPage;
