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
import "./SellebProfileEditPage.css";

const testData = {
  height: "180",
  weight: "70",
  gender: "남성",
  chest: "31",
  waist: "32",
  hips: "33",
  top_size: "30",
  pants_size: "31",
  shoes_size: "260",
  hair_color: "Black",
  eye_color: "Brown",
  world: "KOREAN",
  language: "English",
  pay: 120000,
};

const SellebProfileEditPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: testData,
  });

  const [mainImg, setMainImg] = useState(null);
  const [subImg, setSubImg] = useState([null, null, null]);
  const [tags, setTags] = useState([]);
  const [defaultTags, setDefaultTags] = useState(["사진", "뮤비"]);

  const profileData = {
    profileInfoList: [
      {
        title: "성별",
        content: testData.gender,
      },
      {
        title: "키",
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
        title: "몸무게",
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
        title: "가슴둘레",
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
        title: "허리둘레",
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
        title: "힙 둘레",
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
        title: "상의 사이즈",
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
        title: "하의 사이즈",
        content: (
          <FormInput
            id="pants_size"
            register={register}
            type="number"
            error={errors.pants_size}
          />
        ),
      },
      {
        title: "신발 사이즈",
        content: (
          <FormInput
            id="shoes_size"
            register={register}
            type="number"
            error={errors.shoes_size}
          />
        ),
      },
    ],
    colorList: [
      {
        title: "헤어컬러",
        content: (
          <FormInput
            id="hair_color"
            register={register}
            error={errors.hair_color}
          />
        ),
      },
      {
        title: "아이컬러",
        content: (
          <FormInput
            id="eye_color"
            register={register}
            error={errors.eye_color}
          />
        ),
      },
    ],
    countryList: [
      {
        title: "국가",
        content: (
          <FormInput id="world" register={register} error={errors.world} />
        ),
      },
      {
        title: "언어",
        content: (
          <FormInput
            id="language"
            register={register}
            error={errors.language}
          />
        ),
      },
    ],
    tabItems: [
      {
        title: "이미지",
        content: <PreviewImg />,
      },
      {
        title: "커리어",
        content: <AddCareer className="edit_career" />,
      },
    ],
  };

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
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
  };

  return (
    <form className="edit_profile" onSubmit={handleSubmit(editSubmit)}>
      <header>
        <h3>My Profile</h3>
        <nav>
          <Button type="submit">save</Button>
        </nav>
      </header>
      <section className="edit_main_profile">
        <div className="edit_main_profile_img">
          <AddProfile
            index={-1}
            profileImg={mainImg}
            key="main_img"
            onImageChange={(newImg) => handleMainImgChange(newImg)}
            className="edit_main_img"
          />
        </div>

        <div>
          <div className="edit_profile_pictures">
            {subImg.map((img, index) => (
              <AddProfile
                key={`sub_img_${index}`}
                index={index}
                profileImg={img}
                onImageChange={(newImg) => handleImageChange(index, newImg)}
                className="edit_sub_img"
              />
            ))}
          </div>
          <div className="edit_profile_List">
            <ProfileInfoList list={profileData.profileInfoList} />
            <ProfileInfoList list={profileData.threeSizeList} />
            <ProfileInfoList list={profileData.sizeList} />
            <ProfileInfoList list={profileData.colorList} />
            <ProfileInfoList list={profileData.countryList} />
          </div>
        </div>
      </section>
      <section className="edit_profile_range">
        <div className="edit_hourly_rangebar">
          <div>
            <h5>시간당 금액</h5>
            <div className="edit_pay">
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
        <div className="work_scope">
          <h5>프로젝트 가능 범위</h5>

          <AddDeleteTag
            tags={tags}
            defaultTags={defaultTags}
            handleTagsChange={handleTagsChange}
            className="tags_list"
          />
        </div>
        <div className="flex_column gap-3em">
          <div>
            <h5>이동 가능 지역 범위</h5>
            <span>서울</span>
          </div>
          <div>
            <h5>저작권 사용기간</h5>
            <span>1년</span>
          </div>
        </div>
      </section>
      <div>
        <CustomTabs items={profileData.tabItems} />
      </div>
    </form>
  );
};

export default SellebProfileEditPage;
