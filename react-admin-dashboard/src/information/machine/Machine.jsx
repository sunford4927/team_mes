import './machine.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Make_ID } from '../../make';
import ManageMent from '../../pages/management/ManageMent';

export default function MoniToring(){
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    align: "center",
    headerAlign: 'center',
  },
  {
    field: 'machine_code',
    headerName: '설비 코드',
    width: 150,
    align: "center",
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'machine_name',
    headerName: '설비 명',
    width: 150,
    align: "center",
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'line_name',
    headerName: '라인 명',
    type: 'number',
    width: 110,
    align: "center",
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'manager_main',
    headerName: '관리 담당(장)',
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: 'center',

  },
  {
    field: 'manager_sub',
    headerName: '관리 담당(부)',
    width: 150,
    editable: true,
    align: "center",
    headerAlign: 'center',
  },

];
const [data, setData] = useState('');



useEffect(() => {
  const getdata = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/mes/items/");
      console.log(data);
      setData(Make_ID(result.data));
    } catch (error) {
      console.error(error);
    }
  };
  getdata();
}, []);
  return (
    <div className="machine">
      <div className="machineContainer">
      </div>
      <ManageMent dummyData={data} title='설비정보 관리' row1='제품코드' row2='제품명' row3='등록일시'/>
      <Box sx={{ height: 400, width: 1150, margin: -1, marginLeft: '13px', }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          sx={{width:1150,position: 'absolute', left: 0 , right:0,top: 400,margin : '0 auto'}}
        // getRowId={(r) => r.id}
        ></DataGrid>
      </Box>
    </div>
  )
}