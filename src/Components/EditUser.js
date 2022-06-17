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
            <form onSubmit={formSubmit}>
                <label>name</label>
                <input type="text" name="name" value={user.name} onChange={handleInput} />
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleInput} />
                <label>Email</label>
                <input type="text" name="email" value={user.email} onChange={handleInput} />
                <button>Update</button>
            </form>
        </>
    )
}

export default EditUser