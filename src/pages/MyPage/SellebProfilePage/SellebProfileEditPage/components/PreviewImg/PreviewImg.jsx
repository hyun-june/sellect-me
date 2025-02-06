import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../../../../../../components/Button/Button";
import "./PreviewImg.css";

const PreviewImg = () => {
  const [previewImgs, setPreviewImgs] = useState([]);
  const [preImg, setPreImg] = useState("");

  const handleAddImg = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (previewImgs.length >= 7) {
      return alert("사진은 최대 7개까지 등록이 가능합니다.");
    }

    if (
      previewImgs.some(
        (img) => img.name === file.name && img.size === file.size
      )
    ) {
      return alert("등록되어 있는 사진입니다.");
    }

    const profile = window.URL.createObjectURL(file);
    setPreviewImgs((prev) => [
      ...prev,
      { url: profile, name: file.name, size: file.size },
    ]);
  };

  const handlePreviewImgChange = (imgUrl) => {
    setPreImg(imgUrl);
  };

  const handleDeleteImg = (index) => {
    setPreviewImgs((prev) => {
      window.URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, idx) => idx !== index);
    });
  };

  const handleImgSave = () => {
    console.log("이미지 저장중~", previewImgs);
  };

  return (
    <div className="preview">
      <div className="previews_section">
        <div className="previewBox">
          {preImg ? (
            <img src={preImg} alt="" />
          ) : (
            <div>하단 이미지를 클릭시 미리보기</div>
          )}
        </div>
        <div className="previews_ImgSection">
          {Array(7)
            .fill(null)
            .map((_, index) => (
              <div key={index}>
                {previewImgs[index] ? (
                  <div>
                    <img
                      src={previewImgs[index].url}
                      alt={`img_${index}`}
                      onClick={() =>
                        handlePreviewImgChange(previewImgs[index].url)
                      }
                    />
                    <button onClick={() => handleDeleteImg(index)}>
                      <IoCloseSharp className="font-icon-2" />
                    </button>
                  </div>
                ) : (
                  <div className="empty-slot"></div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="btn_section">
        <label htmlFor="addImg">사진추가</label>
        <input type="file" id="addImg" onChange={handleAddImg} />
        <Button type="button" onClick={handleImgSave}>
          사진저장
        </Button>
      </div>
    </div>
  );
};

export default PreviewImg;
