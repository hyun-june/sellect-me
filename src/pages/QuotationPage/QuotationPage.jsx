import { useForm } from "react-hook-form";
import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import { useEffect, useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import AddDeleteTag from "../../components/AddDeleteTag/AddDeleteTag";
import Button from "../../components/Button/Button";
import { IoCloseSharp } from "react-icons/io5";
import TagButton from "../../components/TagButton/TagButton";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import SelectInput from "./../../components/SelectInput/SelectInput";
import "./QuotationPage.css";

const timeTable = Array.from(
  { length: 25 },
  (_, i) => `${i.toString().padStart(2, "0")}:00`
);

const QuotationPage = (props) => {
  // user가 셀럽인지 셀렉터인지 구분 그에 따른 내용이 다르게 보임
  const user = "selleb";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      brand_name: "",
      messages: "",
      project_name: "",
      shooting_location: "",
      quotation_startDate: "",
      quotation_endDate: "",
      quotation_startTime: "",
      quotation_endTime: "",
    },
  });
  const src =
    "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg";

  const quotation_startDate = watch("quotation_startDate");
  const quotation_endDate = watch("quotation_endDate");
  const quotation_startTime = watch("quotation_startTime");
  const quotation_endTime = watch("quotation_endTime");

  const [files, setFiles] = useState([]);
  const [tags, setTags] = useState([]);
  const [defaultTags, setDefaultTags] = useState([]);
  const [businessHours, setBusinessHours] = useState(0);
  console.log("🚀 ~ QuotationPage ~ businessHours:", businessHours);

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const calculateTime = () => {
    if (!quotation_startDate || !quotation_endDate) {
      setBusinessHours(0);
      return;
    }

    const startTimeStr = quotation_startTime || "00:00";
    const endTimeStr = quotation_endTime || "00:00";

    const startDateTimeStr = `${quotation_startDate}T${startTimeStr}:00`;
    const endDateTimeStr = `${quotation_endDate}T${endTimeStr}:00`;

    const startDateTime = new Date(startDateTimeStr);
    const endDateTime = new Date(endDateTimeStr);

    if (isNaN(startDateTime) || isNaN(endDateTime)) {
      setBusinessHours(0);
      return;
    }

    const diffMs = endDateTime - startDateTime;
    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours < 0) {
      setValue("quotation_startTime", "");
      setValue("quotation_endTime", "");
      setValue("quotation_startDate", "");
      setValue("quotation_endDate", "");
      setBusinessHours(0);
      alert("종료 시간이 시작 시간보다 이전일 수 없습니다.");
      return;
    }

    setBusinessHours(diffHours);
  };

  useEffect(() => {
    calculateTime();
  }, [
    quotation_startDate,
    quotation_endDate,
    quotation_startTime,
    quotation_endTime,
  ]);

  useEffect(() => {
    return () => {
      files.forEach((file) => {
        if (file.fileURL) {
          URL.revokeObjectURL(file.fileURL);
        }
      });
    };
  }, [files]);

  const handleSelect = (fieldName, value) => {
    setValue(fieldName, value);
  };

  const onSchedule = (formData) => {
    if (!formData.quotation_startDate || !formData.quotation_endDate) {
      alert("날짜를 선택해주세요.");
      return;
    }

    if (businessHours <= 0) {
      alert("시간을 다시 확인해주세요.");
      return;
    }

    console.log("formData", formData);
    console.log("총 촬영시간", businessHours);
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);

    newFiles.forEach((file) => {
      const fileURL = URL.createObjectURL(file);

      const userFile = {
        sender: "user",
        fileName: file.name,
        fileURL: fileURL,
        type: "file",
        fileType: file.type,
      };

      setFiles((prev) => [...prev, userFile]);
    });
  };

  console.log("files", files);

  const handleDeleteFile = (index) => {
    if (files[index]?.fileURL) {
      URL.revokeObjectURL(files[index].fileURL);
    }
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // 시급
  const payValue = 200000;

  const price = businessHours * payValue;
  const commission = price * 0.2;
  const vat = (price + commission) * 0.1;
  const totalPrice = price + commission + vat;

  return (
    <MainLayout {...props}>
      <div className="quotation_container">
        <h3>
          {user === "selleb"
            ? "섭외 요청하기"
            : user === "sellecter"
            ? "프로젝트 신청하기"
            : ""}
        </h3>

        <div className="quotationForm">
          <section className="top_section">
            <div>
              {src ? <img src={src}></img> : <div className="img_box"></div>}
              <span>LEE OOOOO OOOO</span>
            </div>
            <div className="description_box">
              {user === "selleb" ? (
                <>
                  셀럽에게 프로젝트 세부사항을 전달하고 견적을 확인하세요.
                  <br /> 셀럽과의 협의는 Chat으로 이루어지며, 섭외 요청이
                  수락되면 계약서를 작성하실 수 있습니다.
                </>
              ) : user === "sellecter" ? (
                <>
                  셀렉터의 프로젝트에 신청하세요.
                  <br /> 셀렉터와의 협의는 Chat으로 이루어지며, 요청이 수락되면
                  계약서를 작성 할 수 있습니다.
                </>
              ) : (
                ""
              )}
            </div>
          </section>

          <form className="info_section" onSubmit={handleSubmit(onSchedule)}>
            <fieldset>
              <legend>촬영 정보</legend>
              <div className="date_section">
                <div className="date_calendar">
                  <CustomCalendar
                    id="quotation_startDate"
                    label="촬영 시작일"
                    setValue={setValue}
                    value={watch("quotation_startDate")}
                  />
                </div>

                <SelectInput
                  register={register}
                  options={timeTable}
                  label="시작 시간"
                  id="quotation_startTime"
                  onChange={(value) =>
                    handleSelect("quotation_startTime", value)
                  }
                />
              </div>
              <div className="date_section">
                <div className="date_calendar">
                  <CustomCalendar
                    id="quotation_endDate"
                    label="촬영 종료일"
                    setValue={setValue}
                    value={watch("quotation_endDate")}
                  />
                </div>

                <SelectInput
                  register={register}
                  options={timeTable}
                  label="종료 시간"
                  id="quotation_endTime"
                  onChange={(value) => handleSelect("quotation_endTime", value)}
                />
              </div>

              <div className="label_input">
                <label htmlFor="shooting_location">촬영 장소</label>
                <FormInput id="shooting_location" register={register} />
              </div>
            </fieldset>
            <fieldset>
              <legend>프로젝트 정보</legend>
              <div className="label_input">
                <label htmlFor="brand_name">브랜드 이름</label>
                <FormInput id="brand_name" register={register} />
              </div>
              <div className="label_input">
                <label htmlFor="project_name">프로젝트 이름</label>
                <FormInput id="project_name" register={register} />
              </div>
              <div className="work_scope">
                <span>촬영 타입</span>
                <AddDeleteTag
                  tags={tags}
                  defaultTags={defaultTags}
                  handleTagsChange={handleTagsChange}
                  className="tags_list"
                />
              </div>

              <div className="portfolio_file">
                <span>포트폴리오 파일</span>

                <input
                  type="file"
                  id="files"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
              <ul className="files_name">
                {files.length > 0 && (
                  <li>
                    {files.map((file, index) => (
                      <TagButton key={index}>
                        {file.fileName}
                        <button
                          type="button"
                          onClick={() => handleDeleteFile(index)}
                        >
                          <IoCloseSharp />
                        </button>
                      </TagButton>
                    ))}
                  </li>
                )}
              </ul>
            </fieldset>

            <fieldset>
              <legend>기타 사항</legend>

              <textarea
                name=""
                id="messages"
                placeholder="메시지를 입력해주세요."
                rows="4"
                cols="50"
                {...register("messages")}
              />
            </fieldset>

            <table className="confirm_section">
              <tbody>
                <tr>
                  <th>프로젝트명</th>
                  <td>OOO 화보 촬영</td>
                </tr>

                <tr>
                  <th>촬영 시간</th>
                  <td>{businessHours}시간</td>
                </tr>
                <tr>
                  <th>금액</th>
                  <td>{price.toLocaleString()} 원</td>
                </tr>
                <tr>
                  <th>+ 수수료</th>
                  <td>{commission.toLocaleString()}원 (20%)</td>
                </tr>
                <tr>
                  <th>+ 부가세 </th>
                  <td>{vat.toLocaleString()} (10%) 원</td>
                </tr>
                <tr className="total_row">
                  <th>총 금액</th>
                  <td>{totalPrice.toLocaleString()} (원)</td>
                </tr>
              </tbody>
            </table>
            <div className="submit_btn">
              <Button type="submit" disabled={businessHours <= 0}>
                섭외 요청하기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default QuotationPage;
