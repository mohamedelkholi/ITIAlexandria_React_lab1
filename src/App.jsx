import UserInfo from "./components/UserInfo"
import { useState } from "react";


const App = () => {
    const [Users , setUsers]=useState([
        {id:"1",name:"elkholi",Age:32 ,phone:"0000000000"},
        {id:"2",name:"mohamed",Age:32 ,phone:"111111"},
        {id:"3",name:"ahmed",Age:32 ,phone:"2222222222"}
    ])
    const UsersList = Users.map((user)=>(
        <UserInfo  name={user.name} Age={user.Age} phone={user.phone}> </UserInfo>
    )) 
    const insertData = () =>{
        setUsers([...Users , {id:"1",name:"yousef",Age:39 ,phone:"333333"}])
        console.log(Users)
    }
    return(
        <div className="container">
            <button onClick={insertData}> insert data</button>
    {UsersList} 
        </div>
    )
};



export default App;