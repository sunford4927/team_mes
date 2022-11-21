import React from "react";
import { Link } from "react-router-dom";
import './userList.css';
import { DataGrid } from '@mui/x-data-grid'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { userRows } from '../../dummyData';
import ManageMent from "../management/ManageMent";
import Product from "../product/Product";


const columns = [
    {field: 'id', headerName: 'NO', width:70},
    {
        field: 'Lot번호',
        headerName: 'LOT번호',
        width:160,},    
    {field: '수주코드', headerName: '수주코드', width:140},
    {field: '고객명', headerName:'고객명', width: 160,},
    {field: '제품명', headerName:'제품명', width: 160,},
    {field: '수량', headerName:'수량', width: 70,},
    {field: '생산완료예정일', headerName:'생산완료예정일', width: 150,},
    {field: '생산계획등록일', headerName:'생산계획등록일', width: 150,},
    {
        field: '비고',
        headerName:'',
        width: 100,
        renderCell: (params) => {
            return (
                <>
                    <Link to = {'/users/'+ params.row.id}>
                    <button className="userListEdit"><ExitToAppOutlinedIcon />수정</button>
                    </Link>                    
                </>
            )
        },
    },
]



const UserList = () => {
    return <div className="userList">
        <ManageMent/>
        <Product/>
        <DataGrid            
            rows={userRows}
            disableSelectionOnClick 
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            
        />        
    </div>
}
export default UserList;


