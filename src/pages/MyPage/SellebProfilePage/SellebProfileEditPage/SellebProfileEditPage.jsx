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
import MainLayout from "../.././../../Layouts/MainLayout/MainLayout";
import SelectInput from "./../../../../components/SelectInput/SelectInput";
import SelectInputCountry from "./../../../../components/SelectInputCountry/SelectInputCountry";
import {
  colorList,
  genderList,
  languageList,
  modelCategoryList,
  modelDetailCategory,
  regions,
} from "../../../../core/constants/optionList";
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
  const [subImg, setSubImg] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [tags, setTags] = useState([]);
  const [careers, setCareers] = useState([]);
  const [defaultTags, setDefaultTags] = useState(["사진", "뮤비"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);

  // console.log("🚀 ~ selectedCategory:", selectedCategory);
  // console.log(modelDetailCategory[selectedCategory]);
  // console.log("check", checkedValues);

  const profileData = {
    profileInfoList: [
      {
        title: "성별",
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
        title: "체중",
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
        title: "엉덩이둘레",
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
            id="bottom_size"
            register={register}
            type="number"
            error={errors.bottom_size}
          />
        ),
      },
      {
        title: "신발 사이즈",
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
        title: "머리색",
        content: (
          <SelectInput
            id="hair_color"
            title="머리색"
            options={colorList}
            register={register}
          />
        ),
      },
      {
        title: "눈동자색",
        content: (
          <SelectInput
            id="eye_color"
            title="눈동자색"
            options={colorList}
            register={register}
          />
        ),
      },
    ],
    countryList: [
      {
        title: "국적",
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
        title: "언어",
        content: (
          <SelectInput
            id="language"
            title="언어"
            options={languageList}
            register={register}
          />
        ),
      },
      {
        title: "학력사항",
        content: (
          <FormInput
            id="education"
            register={register}
            error={errors.education}
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
    console.log("checked", checkedValues);
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
          <div className="selleb_edit_main_img">
            <AddProfile
              index={-1}
              profileImg={mainImg}
              key="main_img"
              onImageChange={(newImg) => handleMainImgChange(newImg)}
            />
          </div>

          <div className="selleb_edit_info">
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
        </section>
        <section className="selleb_edit_profile_List">
          <ProfileInfoList list={profileData.profileInfoList} />
          <ProfileInfoList list={profileData.threeSizeList} />
          <ProfileInfoList list={profileData.sizeList} />
          <div className="option_list">
            <ProfileInfoList list={profileData.colorList} />
          </div>

          <div className="option_list">
            <ProfileInfoList list={profileData.countryList} />
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

            <div className="selleb_edit_model_category">
              <select
                name="model_category"
                id=""
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">선택안함</option>
                {modelCategoryList.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              <span className="dropdown_mark">▼</span>
            </div>

            <div className="selleb_edit_checked_box">
              {selectedCategory &&
                modelDetailCategory[selectedCategory]?.map((value, index) => (
                  <label key={`${selectedCategory}-${index}`}>
                    {value}
                    <input
                      type="checkbox"
                      checked={checkedValues.includes(value)}
                      onChange={(e) =>
                        setCheckedValues((prev) =>
                          e.target.checked
                            ? [...prev, value]
                            : prev.filter((v) => v !== value)
                        )
                      }
                    />
                  </label>
                ))}
            </div>

            {/* <AddDeleteTag
              tags={tags}
              defaultTags={defaultTags}
              handleTagsChange={handleTagsChange}
              className="selleb_tags_list"
            /> */}
          </div>
          <div className="selleb_range_info">
            <div>
              <h5>촬영 가능 지역</h5>

              <SelectInput
                register={register}
                id="region_1"
                options={regions}
                title="지역 선택"
              />
              <SelectInput
                register={register}
                id="region_2"
                options={regions}
                title="지역 선택"
              />

              {/* <FormInput id="city" register={register} error={errors.city} /> */}
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
