import React, { useState, useEffect } from 'react'

import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        await Axios.put(`http://localhost:3002/users/${id}`, user);
        navigate("/");

    }
    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
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
                    <button className="button">Update</button>
                </div>

            </form>
        </>
    )
}

export default EditUser