import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import "./item.css"
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


export default function Item() {
    const [data, setData] = useState('');
    function Make_ID(dummyData) {
      for (var i =0; i < dummyData.length; i++) {
        dummyData[i]["id"] = i+1;
      }
      return dummyData;
    }
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "item_code",
        headerName: "원자재 코드",
        width: 150,
      },
      {
        field: "item_name",
        headerName: "원자재 명",
        width: 150,
      },
      {
        field: "sort",
        headerName: "분류",
        width: 150,
      },
      {
        field: "spec",
        headerName: "사양",
        width: 150,
      },
    ];
  
    useEffect(() => {
      const getdata = async () => {
        try {
          const result = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/items/");
          console.log(data);
          setData(Make_ID(result.data));
        } catch (error) {
          console.error(error);
        }
      };
      getdata();
    }, []);
    return (
        <div className="item">
            <div className= "itemTitleContainer">
                <h3 className="itemTitle">제품정보 관리</h3>                
            </div>
            <div className="itemContainer">                
                <div className="itemcode">
                    <label>제품코드  </label>
                    <input 
                        type="text"
                        placeholder="제품코드를 입력해주세요"
                        className="itemcode1"
                    />    
                </div>
                <div className="itemname">
                    <label>제품명  </label>
                    <input 
                        type="text"
                        placeholder="제품명을 입력해주세요"
                        className="itemname1"
                    />    
                </div>
    
                <div className="itemdate">
                    <label>등록일시  </label>
                    <input 
                        type="date"
                        className="search"
                        aria-label="생산완료예정일 검색 시작기간"
                        value
                    />
                    <span className="control"> ~ </span>
                    <input
                        type="date"
                        className="search"
                        aria-label="생산완료예정일 검색 종료 기간"
                        value
                    />
    
                </div>
                    <Link>
                    <button className="itemAddButton">검색</button>
                    
                    </Link>
                    <button className="itemAddButton1">검색 초기화</button>    
                
            
            </div>
            <Box sx={{ height: 475, width: "90%", margin: 0 }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
        </div>
    )
}