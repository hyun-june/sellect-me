import "./FileContent.css";

const FileContent = ({ message }) => {
  if (message.type !== "file") return null;

  let content;

  if (message.fileType.startsWith("image/")) {
    content = (
      <a href={message.fileURL} target="_blank" rel="noopener noreferrer">
        <img src={message.fileURL} alt={message.fileName} />
      </a>
    );
  }
  // pdf 파일 다운로드
  else if (message.fileType === "application/pdf") {
    content = (
      <a href={message.fileURL} target="_blank" rel="noopener noreferrer">
        {message.fileName}
      </a>
    );
  }

  // 기타 파일
  else {
    content = (
      <a
        href={message.fileURL}
        download={message.fileURL}
        rel="noopener noreferrer"
      >
        {message.fileName}
      </a>
    );
  }

  return <div className="file_content">{content}</div>;
};

export default FileContent;
