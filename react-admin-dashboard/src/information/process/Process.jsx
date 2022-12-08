import './process.css';
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Link } from "react-router-dom"

export default function Process(){
    const [data, setData] = useState('');
    function Make_ID(dummyData) {
      for (var i = 0; i < dummyData.length; i++) {
        dummyData[i]["id"] = i+1;
      }
      return dummyData;
    }
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "process_code",
        headerName: "공정 코드",
        width: 150,
      },
      {
        field: "process_name",
        headerName: "공정 명",
        width: 150,
      },
      {
        field: "sort",
        headerName: "분류",
        width: 150,
      },
      
    ];
  
    useEffect(() => {
      const getdata = async () => {
        try {
          const result = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/process/");
          console.log(data);
          setData(Make_ID(result.data));
        } catch (error) {
          console.error(error);
        }
      };
      getdata();
    }, []);
    return (
        <div className="process">
            <div className= "processTitleContainer">
                <h3 className="processTiTle">공정정보 관리</h3>                
            </div>
            <div className="processContainer">    
                <div className="processcode">
                    <label>공정코드  </label>
                    <input 
                        type="text"
                        placeholder="공정코드를 입력해주세요"
                        className="processcode1"
                    />    
                </div>
                <div className="processname">
                    <label>공정명  </label>
                    <input 
                        type="text"
                        placeholder="공정명을 입력해주세요"
                        className="processname1"
                    />    
                </div>
    
                <div className="processdate">
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
                    <button className="processAddButton">검색</button>
                    
                    </Link>
                    <button className="processAddButton1">검색 초기화</button>    
                
            
            </div>
            <Box sx={{ height: 700, width: "310%", margin: 0 }}>
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