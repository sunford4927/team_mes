import React, { useState }from "react";
import { Link } from "react-router-dom";
import './userList.css';
import { DataGrid } from '@mui/x-data-grid'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { userRows } from '../../dummyData';
import ManageMent from "../management/ManageMent";
import Product from "../product/Product";
import axios from "axios";
import { useEffect } from "react";


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



const UserList=() => {
//     const [users, setUsers] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// const fetchUsers = async () => {
//   try {
//     // 요청이 시작 할 때에는 error 와 users 를 초기화하고
//     setError(null);
//     setUsers(null);
//     // loading 상태를 true 로 바꿉니다.
//     setLoading(true);
//     const response = await axios.get(
//         'http://127.0.0.1:8000/plans/'
//     );
//     setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
//     console.log(setUsers);
//   } catch (e) {
//     setError(e);
//   }
//   setLoading(false);
  
// };
// useEffect(()=>{
// fetchUsers();
// },[]);
//     if (loading) return <div>로딩중..</div>; 
//     if (error) return <div>에러가 발생했습니다</div>;

// 	// 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
//     if (!users) return null;

	// 드디어 users가 성공적으로 받아와 진 상태입니다.

const [dummyData ,setDummyData] = useState(userRows);
function test(){
    setDummyData()
}

    return <div className="userList">
        <button onClick={test}></button>
        <ManageMent/>
        <Product/>
        <DataGrid           
            rows={dummyData}
            disableSelectionOnClick 
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[5]}
            
        >
         
            </DataGrid>
            <h1>TTest</h1>        
    </div>
}
export default UserList;