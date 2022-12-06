import './material.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from "react-router-dom"
const columns = [
    { field: 'id', headerName: 'No', width: 90 },
    {
      field: 'clientname',
      headerName: '원자재코드',
      width: 150,
      editable: true,
    },
    {
      field: 'clientcode',
      headerName: '원자재명',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: '분류',
      width: 110,
      editable: true,
    },
    {
      field: 'manager',
      headerName: '사양',    
      sortable: false,
      width: 160,
     
    },
    
  ];
  
  const rows = [
   
  ];
export default function Material() {
    return (
        <div className="material">
            <div className= "materialTitleContainer">
                <h3 className="materialTitle">원자재정보 관리</h3>                
            </div>
            <div className="materialContainer">    
                <div className="materialcode">
                    <label>원재자재코드  </label>
                    <input 
                        type="text"
                        placeholder="원자재코드를 입력해주세요"
                        className="materialcode1"
                    />    
                </div>
                <div className="materialname">
                    <label>원자재명  </label>
                    <input 
                        type="text"
                        placeholder="원자재를 입력해주세요"
                        className="materialname1"
                    />    
                </div>
    
                <div className="materialdate">
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
                    <button className="materialAddButton">검색</button>
                    
                    </Link>
                    <button className="materialAddButton1">검색 초기화</button>    
                
            
            </div>
            <Box sx={{ height: 700, width: '103%',  margin:0, }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        </div>
    )
}