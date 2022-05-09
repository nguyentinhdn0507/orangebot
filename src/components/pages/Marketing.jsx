import React, { useRef } from "react";
import Button from "../button/Button";
import { searchinfoImg } from "../../assets/index";
import {
  plus,
  savecomment,
  selectarrowdown,
  sendComment,
} from "../../svg/index";
import { Editor } from "@tinymce/tinymce-react";

const Marketing = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="flex gap-x-6 h-full ">
      <div className="bg-white max-w-[367px] w-full rounded-lg flex flex-col justify-between">
        <div className="px-10 mt-10">
          <div className="w-[200px] h-[200px] mx-auto">
            <img src={searchinfoImg} alt="" className="w-full" />
          </div>
          <h3 className="text-center">
            まだ投稿はありません。 今すぐ投稿を作成しましょう！
          </h3>
        </div>
        <div className="px-10 mb-[16px]">
          <Button
            bgColor="bg-bgOrange"
            className="w-full py-2 text-white rounded-sm flex items-center justify-center gap-x-2"
            icon={plus}
          >
            新規投稿作成
          </Button>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg px-4">
        <div>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <div className="flex justify-between mt-2 mb-[16px] items-center">
            <div className="flex">
              <Button className="flex items-center  border rounded-sm border-slate-300 py-2 px-3">
                <span className="mr-2">
                  <img src={sendComment} />
                </span>
                <span>今すぐ投稿</span>
              </Button>
              <Button className="py-3 px-4 border rounded-sm ">
                <span>
                  <img src={selectarrowdown} alt="" />
                </span>
              </Button>
            </div>
            <Button
              onClick={log}
              className="bg-bgOrange text-white py-2 px-8 flex items-center gap-3 rounded-sm"
            >
              <img src={savecomment} alt="" />
              保存
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
