import React,{ useState, useEffect  } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList =() =>{
const [users, setUsers]=useState([])

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>setUsers(res.data))
},[])

    return(
        <div className="user-cards" >
        {users.map((user,i)=> {
           return  <UserCard key={i} user={user}/>
        } )}
        </div>)}

export default UserList