import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { staffCheck } from "../../reducer/staff_info"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StaffCreate() {
  const [form, setForm] = useState({
    name: "",
    user_id: "",
    password: "",
    author: "",
    position: "",
    phone_num: null,
    email_addr: null,
    status: "P",
    reg_date: "",
    reg_id: "0",
    mod_date: "",
    mod_id: "0",
    department:'',
  });
  const dispatch = useDispatch();
  const onStaffCheck = (data) => dispatch(staffCheck(data))

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/mes/TbStaff/", {
        name: form.name,
        id: form.user_id,
        password: form.password,
        author: parseInt(form.author),
        department: form.department,
        position: form.position,
        phone_num: form.phone_num,
        email_addr: form.email_addr,
        status: "P",
        reg_date: form.reg_date,
        reg_id: "0",
        mod_date: form.reg_date,
        mod_id: "0",
      })
      .then(() => {
        onStaffCheck(form)
        alert("저장되었습니다.")
        nav("/staff")
      })
      .catch((err) => console.log(err));

    setForm({
      name: "",
      user_id: "",
      password: "",
      author: "",
      position: "",
      phone_num: null,
      email_addr: null,
      status: "P",
      reg_date: "",
      reg_id: "0",
      mod_date: "",
      mod_id: "0",
      department:''
    });
  };
  // // input-date 오늘날짜로 설정
  // document.getElementById("today").value = new Date()
  //   .toISOString()
  //   .substring(0, 10);
  return (
    <div className="inner">
      <div className="customer_box">
        <h3 className="prcessPR">사원 정보 관리</h3>
        <h5 className="processR">사원 정보 등록</h5>
        <h6 className="processnext">* 필수 항목</h6>
        <div></div>
        <div className="input_container">
          <form onSubmit={handleSubmit}>
            <span className="pp">*</span>
            <label htmlFor="author">사용 권한</label>
            <select
              name="author"
              value={form.author}
              onChange={handleChange}
            >
              <option name value="1">미설정</option>
              <option value="2">일반 사용자</option>
              <option value="3">관리자</option>
              <option value="1002">슈퍼 어드민</option>
            </select>
            <span className="pp">*</span>
            <label htmlFor="department">담당 부서</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
            >
              <option value="부서선택">부서선택</option>
              <option value="경영">경영</option>
              <option value="생산본부">생산본부</option>
              <option value="영업팀">영업팀</option>
              <option value="생산관리팀">생산관리팀</option>
              <option value="부설연구소">부설연구소</option>
              <option value="생산팀">생산팀</option>
              <option value="총무팀">총무팀</option>
              <option value="마케팅본부">마케팅본부</option>
              <option value="품질관리팀">품질관리팀</option>
              <option value="개발팀">개발팀</option>
              <option value="기술연구소">기술연구소</option>
              <option value="구매팀">구매팀</option>
              <option value="연구개발부">연구개발부</option>
            </select>

            <span className="pp">*</span>
            <label htmlFor="position">직 책</label>
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
            >
              <option name="department" value="부서선택">
                직책을 선택하세요
              </option>
              <option value="사원">사원</option>
              <option value="책임연구원">책임연구원</option>
              <option value="주임">주임</option>
              <option value="매니저">매니저</option>
              <option value="반장">반장</option>
              <option value="팀장">팀장</option>
              <option value="대리">대리</option>
              <option value="본부장">본부장</option>
              <option value="과장">과장</option>
              <option value="차장">차장</option>
              <option value="부장">부장</option>
            </select>

            <span className="pp">*</span>
            <label htmlFor="name">사원 명</label>
            <input
              required
              type="text"
              name="name"
              placeholder="사원 명을 입력하세요."
              value={form.name}
              onChange={handleChange}
            />
            <label htmlFor="phone_num">연락처</label>
            <input
              type="text"
              name="phone_num"
              placeholder="연락처를 입력하세요"
              value={form.phone_num}
              onChange={handleChange}
            />
            <span className="pp">*</span>
            <label htmlFor="user_id">아이디</label>
            <input
              type="text"
              name="user_id"
              placeholder="아이디를 입력하세요"
              value={form.user_id}
              onChange={handleChange}
            />
            <span className="pp">*</span>
            <label htmlFor="password">비밀번호</label>
            <input
              type="text"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={form.password}
              onChange={handleChange}
            />
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력하세요"
              value={form.email_addr}
              onChange={handleChange}
            />
            <span className="pp">*</span>
            <label htmlFor="reg_date">등록 날짜</label>
            <input
              type="date"
              name="reg_date"
              id="today"
              value={form.reg_date}
              onChange={handleChange}
            />
            <button className="planNumberButton1 btn-r">취소</button>
            <button className="planNumberButton1 btn-r" type="submit">
              저장
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default StaffCreate;

