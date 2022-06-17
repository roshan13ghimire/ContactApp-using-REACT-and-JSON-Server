import React, { useState } from 'react'

import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);

    setUser({ ...user, [name]: value })
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3002/users", user);
    console.log(user);
    navigate("/");

  }
  
  return (
    <>
      <form className='form' onSubmit={formSubmit}>
        <div className="flex formSpace">
          <label className="label">Name</label>
          <input className="input" type="text" name="name" value={user.name} onChange={handleInput} />
        </div>
        <div className="flex formSpace">
          <label className="label">Phone No</label>
          <input className="input" type="number" name="phone" value={user.phone} onChange={handleInput} />
          </div>
          <div className="flexButton">
          <button className="button" onClick={() => window.location.reload()}>Add</button>
          </div>
        
      </form>
    </>
  )
}

export default AddUser