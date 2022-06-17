import React ,{useState} from 'react'

import Axios from'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name :"",
        username :"",
        email:""
    });
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user,[name]:value})
    }
    const formSubmit = async (e) =>{
        e.preventDefault();
       await Axios.post("http://localhost:3002/users",user);
       console.log(user);
       navigate("/");

    }
  return (
    <>
    <form onSubmit={formSubmit}>
    <label>name</label>
    <input type = "text" name = "name" value = {user.name} onChange={handleInput} />
    <label>Username</label>
    <input type = "text" name = "username" value = {user.username} onChange={handleInput} />
    <label>Email</label>
    <input type = "text" name = "email" value = {user.email} onChange={handleInput} />
    <button>Add</button>
    </form>
    </>
  )
}

export default AddUser