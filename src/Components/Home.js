import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import AddUser from './AddUser';


const Home = () => {
  const [usersLoad, setUserLoad] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const result = await Axios.get("http://localhost:3002/users")
    setUserLoad(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await Axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  }

  return (
    <>
      <div  className='flexDiv'>
        <div className='textDiv' >
          <AddUser />
          <div className="allContacts">
            <table className="table">
              <tbody>
              <tr>
                <th>NAME</th>
                <th>PHONE NUMBER</th>
                <th>ACTION</th>
              </tr>
              {
                usersLoad.map((user, index) => (

                  <tr>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link to={`/edituser/${user.id}`} ><i className="fa-solid fs-20 fa-pen-to-square"></i> </Link>
                      <button className="delButton fs-20" onClick={() => deleteUser(user.id)} ><i className="fas fa-trash-alt"></i></button>
                    </td>
                  </tr>

                ))
              }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home