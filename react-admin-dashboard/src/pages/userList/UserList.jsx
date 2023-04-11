import React, { useEffect, useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import ManageMent from "../management/ManageMent";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const UserList = () => {
  const [dummyData, setDummyData] = useState([]);
  const [form, setForm] = useState({});

  const plan = useSelector((state) => state.planReducer.plan);
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
      setDummyData(plan);
    } else {
      // 실제 필터를 적용하는 부분
      const filteredList = plan.reduce((acc, cur) => {
        const payStatusKeywordCondition = form.input1
          ? cur.lot_num === form.input1
          : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.
        const payNumKeywordCondition =
          form.input2 && form.input2.length > 0
            ? cur.input2.includes(form.input2)
            : true;
        const startDateCondition = form.startdate
          ? form.startdate.getTime() - new Date(cur.reg_date).getTime() <= 0
          : true;
        const endDateCondition = form.enddate
          ? form.enddate.getTime() - new Date(cur.reg_date).getTime() >= 0
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
  }, [plan, form.input1, form.input2, form.startdate, form.enddate]);

  // console.log(createDate('2020-05-01', '2020-06-08'))
  // 생산계획정보 표
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "lot_num",
      headerName: "LOT 번호",
      width: 145,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "order_code",
      headerName: "수주 코드",
      width: 145,
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
      field: "item_name",
      headerName: "제품 명",
      width: 240,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "수량",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "due_date",
      headerName: "생산 완료 예정일",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "reg_date",
      headerName: "생산 계획 등록일",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <div className="userList">
      <div className="inner">
        <div>
          <ManageMent
            dummyData={dummyData}
            content={{
              title: "생산계획 관리",
              row1: "LOT 번호",
              row2: "제품명",
              row3: "생산완료 예정일",
              adress: "/NewR",
            }}
            handleReset={handleReset}
            handleChange={handleChange}
            form={form}
          />
        </div>
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
};
export default UserList;
