import Home from './Components/Home';

import Contact from './Components/Contact';
import About from './Components/About';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

import { Routes, Route} from "react-router-dom";

import './App.css';
import Error from './Components/Error';
import Header from './Components/Header';
function App() {
  return (
    <>
    <div className='App'>
        <Header />
    <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route element = {<Error />} />
      </Routes>
      </div>
    </>

  );
}

export default App;
