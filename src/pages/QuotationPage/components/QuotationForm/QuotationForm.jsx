import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { IoCloseSharp } from "react-icons/io5";
import DropdownForm from "./../../../../components/DropdownForm/DropdownForm";
import FormInput from "./../../../../components/FormInput/FormInput";
import TagButton from "./../../../../components/TagButton/TagButton";
import Button from "./../../../../components/Button/Button";
import AddDeleteTag from "./../../../../components/AddDeleteTag/AddDeleteTag";
import "react-calendar/dist/Calendar.css";
import "./QuotationForm.css";

const timeTable = Array.from(
  { length: 25 },
  (_, i) => `${i.toString().padStart(2, "0")}:00`
);

const QuotationForm = ({ user }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  // const src =
  //     'https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg'
  const src = undefined;

  const [value, onChange] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [tags, setTags] = useState([]);
  const [defaultTags, setDefaultTags] = useState([]);
  const [businessHours, setBusinessHours] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const calculateTime = () => {
    const parseTime = (time) => {
      if (!time) return 0;
      const [hours, minutes] = time.split(":").map(Number);
      return hours + minutes / 60;
    };

    const start = parseTime(startTime);
    const end = parseTime(endTime);

    const calculatedHours = end - start;
    setBusinessHours(calculatedHours);
  };

  useEffect(() => {
    calculateTime();
  }, [startTime, endTime]);

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const handleDateChange = (date) => {
    onChange(date);
    setValue("date", date);
    setIsOpen(false);
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (fieldName, value) => {
    if (fieldName == "start_time") {
      setStartTime(value);
    } else if (fieldName == "end_time") {
      setEndTime(value);
    }
    setValue(fieldName, value);
  };

  const onSchedule = (formData) => {
    if (!formData.date) {
      alert("날짜를 선택해주세요.");
      return;
    }
    console.log("form", formData);
    console.log("tags", tags);
    calculateTime(formData);
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [
      ...prevFiles,
      ...newFiles.map((file) => file.name),
    ]);
  };

  const handleDeleteFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // 시급
  const payValue = 200000;

  const price = businessHours * payValue;
  const commission = price * 0.2;
  const vat = (price + commission) * 0.1;
  const totalPrice = price + commission + vat;

  return (
    <div className="quotationForm_container">
      <h4>
        {user === "selleb"
          ? "섭외 요청하기"
          : user === "sellecter"
          ? "프로젝트 신청하기"
          : ""}
      </h4>

      <section className="top_section">
        <div>
          {src ? <img src={src}></img> : <div className="img_box"></div>}
          <span>LEE OOOOO OOOO</span>
        </div>
        <div className="description_box">
          {user === "selleb" ? (
            <>
              셀럽에게 프로젝트 세부사항을 전달하고 견적을 확인하세요.
              <br /> 셀럽과의 협의는 Chat으로 이루어지며, 섭외 요청이 수락되면
              계약서를 작성하실 수 있습니다.
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
            <span>촬영 날짜</span>

            <button onClick={toggleCalendar} type="button">
              <span> {isOpen ? "▲" : "▼"} </span>
            </button>

            <p>{value ? value.toLocaleDateString() : "날짜를 선택해주세요."}</p>
            {isOpen && <Calendar onChange={handleDateChange} value={value} />}
          </div>

          <div className="time_section">
            <DropdownForm
              label="시작 시간"
              selectedValue=""
              list={timeTable}
              onSelect={(value) => handleSelect("start_time", value)}
            />
            <DropdownForm
              label="종료 시간"
              selectedValue=""
              list={timeTable}
              onSelect={(value) => handleSelect("end_time", value)}
            />
            <span>{businessHours}hr</span>
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
                {files.map((fileName, index) => (
                  <TagButton key={index}>
                    {fileName}
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
          ></textarea>
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
          <Button type="submit">섭외 요청하기</Button>
        </div>
      </form>
    </div>
  );
};

export default QuotationForm;
