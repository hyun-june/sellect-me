import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import MainLayout from "../../../Layouts/MainLayout/MainLayout";
import { useRef, useState } from "react";
import "./BoardCreate.css";

const data = [
  {
    id: 1,
    title: "게시판 테스트 제목1",
    user: "글쓴이1",
    date: "2025-08-10",
    views: 11,
    isNotice: true,
    userId: 200,
    des: "뭐시기 어쩌구 저쩌구",
  },
];

const BoardCreate = ({ ...props }) => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState(data[0]?.title || "");
  const [content, setContent] = useState(data[0]?.des || "");

  const handleSubmit = () => {
    if (!editorRef.current) return;
    const markdown = editorRef.current.getInstance().getMarkdown();
    const html = editorRef.current.getInstance().getHTML();
    console.log("markdown", markdown);
    console.log("html", html);
    console.log("title", title);
  };
  // id는 db값 사용 하면 될 것 같음, date도 기록

  return (
    <MainLayout {...props}>
      <div className="board_create">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="board_create_title"
        />
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          hideModeSwitch={true}
          initialValue={content}
          hooks={{
            addImageBlobHook: (blob, callback) => {
              console.log("업로드된 이미지 파일:", blob);
              // callback에는 URL이 필요함. 서버 없이 테스트용 URL
              const tempUrl = URL.createObjectURL(blob);
              callback(tempUrl, "임시 이미지"); // 에디터에 이미지 표시
            },
          }}
        />
        <div className="create_btn_wrapper">
          <button className="create_btn" onClick={handleSubmit}>
            제출
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default BoardCreate;
