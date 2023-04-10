import React, { useState } from "react";
import axios from "axios";

function Post({ onSaveData }) {
  const [form, setForm] = useState({
    notice_content: "",
    id: "",
    reg_date: "",
    reg_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/mes/TbNotice/", {
        notice_subject: form.notice_subject,
        notice_content: form.notice_content,
        reg_date: form.reg_date,
        reg_id: parseInt(form.reg_id),
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(form);
    setForm({
      notice_subject: "",
      notice_content: "",
      id: "",
      reg_date: "",
      reg_id: "",
    });
  };
  return (
    <>
      <div className="post_container">
        <div><p className="table_name">공지사항 추가하기</p></div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="subject">
            Subject
            </label>
            <input
              required
              placeholder="제목을 입력해주세요"
              type="text"
              name="notice_subject"
              value={form.notice_subject}
              onChange={handleChange}
            />


          <label htmlFor="reg_date">
            Reg_Date
            </label>
            <input
              required
              placeholder="작업 날짜를 입력해주세요"
              type="date"
              name="reg_date"
              value={form.reg_date}
              onChange={handleChange}
            />

          <label htmlFor="reg_id">
            Reg_Id
            </label>
            <input
              required
              placeholder="작업 번호를 입력해주세요"
              type="text"
              name="reg_id"
              value={form.reg_id}
              onChange={handleChange}
            />

        <label htmlFor="content">
            Content
            </label>
            <input
            //   style={{width: '570px'}}
              required
              placeholder="내용을 입력해주세요"
              type="text"
              name="notice_content"
              value={form.notice_content}
              onChange={handleChange}
            />



          <button className="save_btn save_btn_input" type="submit">저장</button>

      </form>
      </div>
    </>
  );
}

export default Post;
