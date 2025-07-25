import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import "./UploadBox.css";

const UploadBox = ({ onChange, onDelete, id }) => {
  const [imagePreview, setImagePreview] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 가능합니다.");
      return;
    }
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
    onChange(e);
  };

  const handleDelete = () => {
    setImagePreview(null);
    onDelete();
  };

  return (
    <div className="upload-container">
      <div className="image-box">
        {imagePreview ? (
          <img src={imagePreview} className="image-preview" />
        ) : (
          <label htmlFor={id}>이미지 업로드</label>
        )}
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          id={id}
          onChange={handleImageChange}
        />
      </div>

      <div className="trash-box">
        <IoTrashOutline className="trash-icon" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default UploadBox;
