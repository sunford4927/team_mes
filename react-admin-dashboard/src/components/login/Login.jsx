import "./Login.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Login() {
  // django 연결
  const [id, setId] = useState(""); // 아이디
  const [password, setPassword] = useState(""); // 비밀번호

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
      .post("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/users/login/", user)
      .then((res) => {
        if (res.data.token) {
            console.log(res.data);
          localStorage.clear();
          localStorage.setItem("token", res.data.token);
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          localStorage.setItem("userId", id); // 로그인할때 유저ID 저장
          window.location.replace("/info/Client");
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

  const[imgLeft,setimgLeft]=useState(0);

  useEffect(function(){
      if(imgLeft<150){
       setTimeout(()=>  setimgLeft(imgLeft+15),150);          
      }else{
          setimgLeft(0)
      }
   },[imgLeft])

  return (
    <div className="login-div">
      <div className="form-div"> 
      
            <img 
                   style={{position:"sticky",left:imgLeft}}
                                            className="loginturtle"
                                            src="images/turtle_log.png" 
                                            alt ="log"/>      
          
          <h1>MES</h1>
          
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
      <img 
      className="window"
      src="images/login.png"
      alt="login"/>
      
    </div>
  );
}

export default Login;