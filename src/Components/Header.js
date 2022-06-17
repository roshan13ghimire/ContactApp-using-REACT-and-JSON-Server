import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>

            <header className="header white ">
                <div className="headerContainer flex sb">
                    <div className="companyNname">
                        <h3 className="companyNnameTtext fs-30">Company's Name</h3>
                    </div>
                    <div className="navBar wd-30">
                        <ul className="navList">
                            <li className="navListItem"><Link to="/" className="navListItemLinks" >Home</Link></li>
                            <li className="navListItem"><Link to="/about" className="navListItemLinks" >About</Link></li>
                            <li className="navListItem"><Link to="/contact" className="navListItemLinks" >Contact</Link></li>
                            <li className="navListItem"><Link to="/adduser" className="navListItemLinks" >Add User</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header