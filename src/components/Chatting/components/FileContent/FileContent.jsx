import "./FileContent.css";

const FileContent = ({ message }) => {
  if (!message.file) return null;
  let content;

  if (message.fileType.startsWith("image/")) {
    content = (
      <a href={message.file} target="_blank" rel="noopener noreferrer">
        <img src={message.file} alt={message.text} />
      </a>
    );
  }
  // pdf 파일 다운로드
  else if (message.fileType === "application/pdf") {
    content = (
      <a href={message.file} target="_blank" rel="noopener noreferrer">
        {message.text}
      </a>
    );
  }

  // 기타 파일
  else {
    content = (
      <a href={message.file} download={message.text} rel="noopener noreferrer">
        {message.text}
      </a>
    );
  }

  return <div className="file_content">{content}</div>;
};

export default FileContent;
