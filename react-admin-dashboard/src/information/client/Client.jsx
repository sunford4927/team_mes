import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from '@mui/material';
import './client.css'
const columns = [
  { field: 'id', headerName: 'No', width: 90 },
  {
    field: 'clientname',
    headerName: '고객명',
    width: 150,
    editable: true,
  },
  {
    field: 'clientcode',
    headerName: '고객코드',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: '전화번호',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'manager',
    headerName: '담당자',    
    sortable: false,
    width: 160,
   
  },
  {
    field: 'managerphone',
    headerName: '담당자 연락처',
    width: 150,
    editable: true,
  },
  {
    field: 'manageremail',
    headerName: '담당자 이메일',
    width: 150,
    editable: true,
  },
];

const rows = [
 
];

export default function DataGridDemo() {
  return (
    <div className="client">
        <div className= "clientTitleContainer">
              <h3 className="clientTitle">고객정보 관리</h3>                
          </div>
          <div className="clientContainer">
              <div className="clientnumber">
                  <label>고객명  </label>
                  <input
                      type="text"
                      placeholder="고객명을 입력해주세요"
                      className="clientnumber1" 
                  />
              </div>
  
              <div className="clientcode">
                  <label>고객코드  </label>
                  <input 
                      type="text"
                      placeholder="고객코드를 입력해주세요"
                      className="clientcode1"
                  />    
              </div>
              <div className="clientname">
                  <label>담당자  </label>
                  <input 
                      type="text"
                      placeholder="담당자 성함을 입력해주세요"
                      className="clientname1"
                  />    
              </div>
  
              <div className="clientdate">
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
                  <button className="clientAddButton">검색</button>
  
                  </Link>
                  <button className="clientAddButton1">검색 초기화</button>    
          
                  
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
  );
}