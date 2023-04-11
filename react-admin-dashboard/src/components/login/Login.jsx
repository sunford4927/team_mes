import "./Login.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { customerCheck } from "../../reducer/customer_info";
import { machineCheck } from "../../reducer/machine_info";
import { itemCheck } from "../../reducer/item_info";
import { orderCheck } from "../../reducer/order_management";
import { planCheck } from "../../reducer/plan_management";
import { staffCheck } from "../../reducer/staff_info";
import { materialsCheck } from "../../reducer/materials_info";
import { monitoringCheck } from "../../reducer/monitoring_info";
import { noticeCheck } from "../../reducer/notice_info";

function Login(props) {
  // django 연결
  const [id, setId] = useState(""); // 아이디
  const [password, setPassword] = useState(""); // 비밀번호

  const dispatch = useDispatch();
  const oncustomerCheck = (data) => dispatch(customerCheck(data));
  const onmachineCheck = (data) => dispatch(machineCheck(data));
  const onitemCheck = (data) => dispatch(itemCheck(data));
  const onorderCheck = (data) => dispatch(orderCheck(data));
  const onplanCheck = (data) => dispatch(planCheck(data));
  const onstaffCheck = (data) => dispatch(staffCheck(data));
  const onmaterialsCheck = (data) => dispatch(materialsCheck(data));
  const onmonitorCheck = (data) => dispatch(monitoringCheck(data));
  const onnoticeCheck = (data) => dispatch(noticeCheck(data));

  useEffect(() => {
    axios
    .all([
      axios.get("http://127.0.0.1:8000/mes/orders/"),
      axios.get("http://127.0.0.1:8000/mes/items/"),
      axios.get("http://127.0.0.1:8000/mes/plans/"),
      axios.get("http://127.0.0.1:8000/mes/materials/"),
      axios.get("http://127.0.0.1:8000/mes/customers/"),
      axios.get("http://127.0.0.1:8000/mes/TbMachine/"),
      axios.get("http://127.0.0.1:8000/mes/TbStaff/"),
      axios.get("http://127.0.0.1:8000/mes/TbProductionLog/"),
      axios.get("http://127.0.0.1:8000/mes/TbNotice/"),
    ])
    .then(
      axios.spread((res1, res2, res3, res4, res5, res6, res7, res8, res9) => {
        onorderCheck(res1.data);
        onitemCheck(res2.data);
        onplanCheck(res3.data);
        onmaterialsCheck(res4.data);
        oncustomerCheck(res5.data);
        onmachineCheck(res6.data);
        onstaffCheck(res7.data);
        onmonitorCheck(res8.data);
        onnoticeCheck(res9.data);
      })
    );
  },[])

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      // window.location.replace('http://localhost:3000/');
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    

    const user = {
      username: id,
      password: password,
    };

    // 로그인
    axios
      .post("http://127.0.0.1:8000/users/login/", user)
      .then((res) => {
        if (res.data.token) {

          console.log(res.data);
          // localStorage.clear();
          localStorage.setItem("token", res.data.token);
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          localStorage.setItem("userId", id); // 로그인할때 유저ID 저장
          window.location.href = "staff/"
        } else {
          setId("");
          setPassword("");
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.clear();
        alert("아이디 또는 비밀번호가 일치하지 않습니다");
        setId("");
        setPassword("");
      });


  };

  const [imgLeft, setimgLeft] = useState(0);

  useEffect(
    function () {
      if (imgLeft < 300) {
        setTimeout(() => setimgLeft(imgLeft + 0.5), 300);
      } else {
        setimgLeft(0);
      }
    },
    [imgLeft]
  );

  return (
    <div className="login-div">
      <div className="form-div">
        <img
          style={{ position: "sticky", left: imgLeft }}
          className="loginturtle"
          src="images/turtle_log.png"
          alt="log"
        />

        <h2 className="Title">광주 제약</h2>
        <h4 className="title">Gwang_Ju Pharmaceutical Company</h4>

        <hr />

        <Form inline onSubmit={onSubmit}>
          <FormGroup floating>
            <Label className="loginId">아이디 </Label>
            <Input
              className="loginIdname"
              id="loginId"
              name="loginId"
              placeholder="ID"
              type="string"
              value={id}
              onChange={onChangeId}
            />
          </FormGroup>{" "}
          <FormGroup floating>
            <Label className="loginPassword">비밀번호 </Label>

            <Input
              id="loginPassword"
              name="loginPassword"
              placeholder="Password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </FormGroup>{" "}
          <Button className="login-btn" type="submit">
            로그인
          </Button>
        </Form>

        <div className="join-btn-div">
          <Link to="/join">
            <span className="join-link">회원가입</span>
          </Link>
        </div>
      </div>
      <img className="window" src="images/login.png" alt="login" />
    </div>
  );
}


export default Login;
