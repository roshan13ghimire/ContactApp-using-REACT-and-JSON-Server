import React ,{useState , useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () =>{
    const result = await axios.get("http://localhost:3002/users")
    setUser(result.data.reverse());
  };
  const deleteUser = async (id) =>{
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  }
  
  return (
    <>
      <div className='flexDiv'>
        <div className='textDiv' >
          {
            users.map((user,index) =>(
              <table>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to = "/" > view </Link>
                    <Link to = {`/edituser/${user.id}`} > edit </Link>
                    <button onClick={() => deleteUser(user.id)} > delete </button>
                  </td>
                </tr>
              </table>
            ))
          }
          
        </div>
      </div>
    </>
  )
}

export default Home