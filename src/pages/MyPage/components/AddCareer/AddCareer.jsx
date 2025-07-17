import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import "./AddCareer.css";

const AddCareer = ({ ...props }) => {
  const { careers, setCareers } = props;
  const [newCareer, setNewCareer] = useState("");

  const handleAddCareer = () => {
    if (newCareer.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    if (!careers.includes(newCareer)) {
      setCareers([...careers, newCareer]);
      setNewCareer("");
    } else {
      alert("중복된 내용이 있습니다.");
    }
  };

  const handleDeleteCareer = (index) => {
    setCareers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="career">
      <ul {...props}>
        {careers.map((carrer, index) => (
          <li key={index}>
            {carrer}{" "}
            <button
              type="button"
              onClick={() =>
                index < careers.length
                  ? handleDeleteCareer(index, true)
                  : handleDeleteCareer(index - careers.length, false)
              }
            >
              <IoCloseSharp />
            </button>
          </li>
        ))}
      </ul>
      <div className="add_career">
        <input
          type="text"
          value={newCareer}
          onChange={(e) => setNewCareer(e.target.value)}
          placeholder="내용을 입력해주세요"
          onKeyPress={(e) => e.key === "Enter" && handleAddCareer()}
        />
        <button type="button" onClick={handleAddCareer}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default AddCareer;
