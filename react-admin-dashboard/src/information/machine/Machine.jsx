import './machine.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from "react-router-dom"


const columns = [
    { field: 'id', headerName: 'No', width: 90 },
    {
      field: 'clientname',
      headerName: '설비코드',
      width: 150,
      editable: true,
    },
    {
      field: 'clientcode',
      headerName: '설비명',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: '라인명',
      width: 110,
      editable: true,
    },
    {
      field: 'manager',
      headerName: '관리담당(장)',    
      sortable: false,
      width: 160,
     
    },
    {
      field: 'managerphone',
      headerName: '관리담당(부)',
      width: 150,
      editable: true,
    },
    
  ];
  
  const rows = [
   
  ];
export default function Machine(){
    return (
        <div className="machine">
            <div className= "machineTitleContainer">
                <h3 className="machineTitle">설비정보 관리</h3>                
            </div>
            <div className="machineContainer">    
                <div className="machinecode">
                    <label>설비코드  </label>
                    <input 
                        type="text"
                        placeholder="설비코드를 입력해주세요"
                        className="machinecode1"
                    />    
                </div>
                <div className="machinename">
                    <label>설비명  </label>
                    <input 
                        type="text"
                        placeholder="설비명을 입력해주세요"
                        className="machinename1"
                    />    
                </div>
    
                <div className="machinedate">
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
                    <button className="machineAddButton">검색</button>
                    
                    </Link>
                    <button className="machineAddButton1">검색 초기화</button>    
                
            
            </div>

            <Box sx={{ height: 475, width: '90%',  margin:0, }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        </div>
    )
}