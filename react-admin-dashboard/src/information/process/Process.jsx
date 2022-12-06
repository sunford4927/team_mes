import './process.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from "react-router-dom"
const columns = [
    { field: 'id', headerName: 'No', width: 90 },
    {
      field: 'clientname',
      headerName: '제품코드',
      width: 150,
      editable: true,
    },
    {
      field: 'clientcode',
      headerName: '제품명',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: '분류',
      type: 'number',
      width: 110,
      editable: true,
    },
    
  ];
  
  const rows = [
   
  ];
export default function Process(){
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