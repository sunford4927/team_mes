import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./client.css";
import { make_div } from "../../make";
import ManageMent from "../../pages/management/ManageMent";
import Loading from "../../components/loading/Loading";
import { useSelector } from "react-redux";

function Client() {
  const [loading, setLoading] = useState(false);
  // const element = document.createElement('div')

  const [form, setForm] = useState({});
  const [dummyData, setDummyData] = useState([]);

  const client = useSelector((state) => state.customerReducer.customer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm({
      input1: "",
      input2: "",
      input3: "",
      startdate: "",
      enddate: "",
    });
  };

  // 변경사항이 있을때마다 원본 list에 필터를 새로 적용한다.
  const filterData = () => {
    //아무 필터도 없는 맨 처음은 원본 list가 나와야 함
    if (
      form.input1 &&
      form.input2 &&
      form.input3 &&
      form.startdate &&
      form.enddate === undefined
    ) {
      setDummyData(client);
    } else {
      // 실제 필터를 적용하는 부분
      const filteredList = client.reduce((acc, cur) => {
        const fristinput = form.input1
          ? cur.customer_name.includes(form.input1) 
          : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.
        const secinput = form.input2 ? cur.customer_code.includes(form.input2) : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.
        const thrinput = form.input3 ? cur.representative_name.includes(form.input3) : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.
        const startdate = form.startdate
          ? new Date(form.startdate).getTime() -
              new Date(cur.due_date).getTime() <=
            0
          : true;
        const enddate = form.enddate
          ? new Date(cur.due_date).getTime() -
              new Date(form.enddate).getTime() <=
            0
          : true;

        // 해당 조건이 있다면 그에 부합하는 교집합인 놈만 push 하겠다.

        if (fristinput && secinput && thrinput && startdate && enddate) {
          acc.push(cur);
        }

        return acc;
      }, []);

      setDummyData(filteredList);
    }
  };
  // 원본이 갱신되거나, 검색조건이 변경되면 filterData를 실행한다.
  useEffect(() => {
    filterData();
  }, [
    client,
    form.input1,
    form.input2,
    form.input3,
    form.startdate,
    form.enddate,
  ]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "customer_name",
      headerName: "고객 명",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "customer_code",
      headerName: "고객 코드",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "customer_phone",
      headerName: "전화번호",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "representative_name",
      headerName: "담당자",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "representative_phone",
      headerName: "담당자 번호",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "representative_email",
      headerName: "담당자 이메일",
      width: 280,
      align: "center",
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    let topdiv = document.querySelector(".management_container");
    topdiv.appendChild(make_div(form, handleChange));
    return () => {
      make_div().remove();
    };
  }, []);
  return (
    <div className="client">
      <div className="inner">
        <div className="loading"></div>
        <ManageMent
          dummyData={client}
          content={{
            title: "고객정보 관리",
            row1: "고객명",
            row2: "고객코드",
            row3: "등록일시",
            adress: "/customer/Create",
          }}
          handleSearch={handleReset}
          handleChange={handleChange}
          form={form}
        />
        <div>
          <Box sx={{ height: 372, margin: -1, marginLeft: "13px" }}>
            <DataGrid
              rows={dummyData}
              disableSelectionOnClick
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              sx={{ width: 1150, margin: "0 auto" }}
              // getRowId={(r) => r.id}
            ></DataGrid>
          </Box>
        </div>
      </div>
      {loading ? <Loading /> : null}
    </div>
  );
}

export default Client;
