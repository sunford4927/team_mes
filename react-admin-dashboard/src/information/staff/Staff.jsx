import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ManageMent from "../../pages/management/ManageMent";
import { useSelector } from "react-redux";
import axios from "axios";



function Staff() {
  const [form, setForm] = useState({})
  const [dummyData,setDummyData] = useState([])

 

  const staff = useSelector((state) => state.staffReducer.staff);
  console.log(staff)


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
      form.startdate &&
      form.enddate === undefined
    ) {
      setDummyData(staff);
    } else {
      // 실제 필터를 적용하는 부분
      const filteredList = staff.reduce((acc, cur) => {
        const payStatusKeywordCondition = form.input1
          ? cur.name === form.input1
          : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.
        const payNumKeywordCondition =
          form.input2 && form.input2.length > 0
            ? cur.position.includes(form.input2)
            : true;
        const startDateCondition = form.startdate
          ? new Date(form.startdate).getTime() - new Date(cur.due_date).getTime() <= 0
          : true;
        const endDateCondition = form.enddate
          ? new Date(cur.due_date).getTime() - new Date(form.enddate).getTime() <= 0
          : true;

        // 해당 조건이 있다면 그에 부합하는 교집합인 놈만 push 하겠다.
        
        if (
          payStatusKeywordCondition &&
          payNumKeywordCondition &&
          startDateCondition &&
          endDateCondition
        ) {
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
  }, [staff, form.input1, form.input2, form.startdate, form.enddate]);

  const columns = [
    {
      field: "ido",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "사원 명",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "department",
      headerName: "담당부서",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "position",
      headerName: "직책",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone_num",
      headerName: "연락처",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email_addr",
      headerName: "이메일",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "reg_date",
      headerName: "등록 날짜",
      width: 280,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <div className="staff">
      <div className="inner">
        <div className="loading"></div>
        <ManageMent
          dummyData={staff}
          content={{
            title : "사원정보 관리",
            row1 : "사원 명",
            row2 : "직책",
            row3 : "등록일시",
            adress : "/staff/create",
          }}
          handleSearch={handleReset}
          handleChange={handleChange}
          form = {form}
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
    </div>
  );
}

export default Staff;
