import { useForm } from "react-hook-form";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import DropdownForm from "../../components/DropdownForm/DropdownForm";
import FormInput from "../../components/FormInput/FormInput";
import AddDeleteTag from "../../components/AddDeleteTag/AddDeleteTag";
import Button from "../../components/Button/Button";
import { IoCloseSharp } from "react-icons/io5";
import TagButton from "../../components/TagButton/TagButton";
import "./QuotationPage.css";

const QuotationPage = (props) => {
  // user가 셀럽인지 셀렉터인지 구분 그에 따른 내용이 다르게 보임
  const user = "selleb";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const src =
    "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg";

  const [value, onChange] = useState(null);
  const [calendarDate, setCalendarDate] = useState({
    start_date: null,
    end_date: null,
  });
  const [calendarOpen, setCalendarOpen] = useState({
    start_date_calendar: false,
    end_date_calendar: false,
  });
  const [files, setFiles] = useState([]);
  const [tags, setTags] = useState([]);
  const [defaultTags, setDefaultTags] = useState([]);
  const [businessHours, setBusinessHours] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const timeTable = Array.from(
    { length: 25 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (date.getDay() === 0) {
        return "sunday";
      }
      return "not_sunday";
    }
    return null;
  };

  useEffect(() => {
    calculateTime();
  }, [startTime, endTime, calendarDate]);

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const handleDateChange = (id, date) => {
    onChange(date);
    setCalendarDate((prev) => ({
      ...prev,
      [id]: date,
    }));
    setValue(id, date);

    setCalendarOpen((prev) => ({
      ...prev,
      [`${id}_calendar`]: false,
    }));
  };

  const toggleCalendar = (id) => {
    setCalendarOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelect = (fieldName, value) => {
    if (fieldName === "start_time") {
      setStartTime(value);
    } else if (fieldName === "end_time") {
      setEndTime(value);
    }
    setValue(fieldName, value);
  };

  const calculateTime = () => {
    if (!calendarDate.start_date || !calendarDate.end_date) {
      setBusinessHours(0);
      return;
    }

    // start_date, end_date 복사
    const startDateTime = new Date(calendarDate.start_date);

    const endDateTime = new Date(calendarDate.end_date);

    // startTime이 "HH:mm" 형태일 때 시간과 분 설정
    if (startTime) {
      const hour = Number(startTime.split(":")[0]);
      startDateTime.setHours(hour, 0, 0, 0);
    } else {
      startDateTime.setHours(0, 0, 0, 0);
    }

    if (endTime) {
      const hour = Number(endTime.split(":")[0]);
      endDateTime.setHours(hour, 0, 0, 0);
    } else {
      endDateTime.setHours(0, 0, 0, 0);
    }

    const calenderMinute = endDateTime - startDateTime; // 밀리초 차이
    const calenderHours = calenderMinute / (1000 * 60 * 60); // 시간 단위 변환

    if (calenderHours < 0) {
      alert("시간을 다시 확인해주세요.");
      setBusinessHours(0);
      return;
    }

    setBusinessHours(calenderHours);
  };

  const onSchedule = (formData) => {
    if (!calendarDate.start_date || !calendarDate.end_date) {
      return alert("날짜를 선택해주세요.");
    }

    if (businessHours < 0) {
      return alert("시간을 다시 확인해주세요.");
    }
    console.log("form", formData);
    console.log("tags", tags);
    calculateTime(formData);
  };

  // const handleFileChange = (event) => {
  //   const newFiles = Array.from(event.target.files);

  //   setFiles((prevFiles) => [
  //     ...prevFiles,
  //     ...newFiles.map((file) => file.name),
  //   ]);
  // };

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
      <div>
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
                  <span>촬영 시작 날짜</span>

                  <button
                    onClick={() => toggleCalendar("start_date_calendar")}
                    type="button"
                  >
                    <span>
                      {" "}
                      {calendarOpen.start_date_calendar ? "▲" : "▼"}{" "}
                    </span>
                  </button>

                  <p>
                    {calendarDate.start_date
                      ? calendarDate.start_date.toLocaleDateString()
                      : "날짜를 선택해주세요."}
                  </p>
                  {calendarOpen.start_date_calendar && (
                    <Calendar
                      tileClassName={tileClassName}
                      onChange={(date) => handleDateChange("start_date", date)}
                      calendarType="Hebrew"
                      value={calendarDate.start_date}
                      formatDay={(locale, date) => date.getDate()}
                    />
                  )}
                </div>
                <DropdownForm
                  label="시작 시간"
                  selectedValue=""
                  list={timeTable}
                  onSelect={(value) => handleSelect("start_time", value)}
                />
              </div>
              <div className="date_section">
                <div className="date_calendar">
                  <span>촬영 종료 날짜</span>

                  <button
                    onClick={() => toggleCalendar("end_date_calendar")}
                    type="button"
                  >
                    <span> {calendarOpen.end_date_calendar ? "▲" : "▼"} </span>
                  </button>

                  <p>
                    {calendarDate.end_date
                      ? calendarDate.end_date.toLocaleDateString()
                      : "날짜를 선택해주세요."}
                  </p>
                  {calendarOpen.end_date_calendar && (
                    <Calendar
                      tileClassName={tileClassName}
                      onChange={(date) => handleDateChange("end_date", date)}
                      calendarType="Hebrew"
                      value={calendarDate.end_date}
                      formatDay={(locale, date) => date.getDate()}
                    />
                  )}
                </div>
                <DropdownForm
                  label="종료 시간"
                  selectedValue=""
                  list={timeTable}
                  onSelect={(value) => handleSelect("end_time", value)}
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
              <Button type="submit">섭외 요청하기</Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default QuotationPage;
