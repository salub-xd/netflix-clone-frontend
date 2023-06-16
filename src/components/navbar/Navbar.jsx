import React, { useState } from 'react'
import "./navbar.css"
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = () => {
    const [click, setClick] = useState(false);

    return (
        <>
            <header>
                <div id="navbar" className="navbar">
                    <nav>
                        <div className="logo"><NavLink to="/" ><img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" /></NavLink></div>
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/movies">Movies</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/series">Series</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/lastest">Latest</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/mylist">My List</NavLink></li>
                        </ul>
                        <NavLink to="/">
                            <div onClick={() => { setClick(!click) }} className="toggle_btn">
                                {!click}  <div className='toggleIcons'>{!click ? <MenuIcon fontSize="large" /> : <CancelIcon fontSize="large" />}</div>
                            </div>
                        </NavLink>
                    </nav>
                    <div className="right">
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/search"><SearchIcon /></NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/cart"><ShoppingCartIcon /></NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/notify">
                                <NotificationsIcon /></NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to="/user"><img src="https://fastly.picsum.photos/id/1005/200/300.jpg?hmac=ZygrmRTuNYz9HivXcWqFGXDRVJxIHzaS-8MA0I3NKBw" alt="" /></NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "menu_active" : "non-active-class"} to=""><ArrowDropDownIcon />
                                <div className='iconSetting'><div><NavLink to='/user'>User</NavLink></div><div> <NavLink to='/setting'>Setting</NavLink></div></div>
                            </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className={click ? `dropdown_menu open` : `dropdown_menu`}>

                    <div className="pages">
                        <NavLink to="/"><small>Home</small></NavLink>
                        <NavLink to="/movies"><small>Movies</small></NavLink>
                        <NavLink to="/series"><small>Series</small></NavLink>
                        <NavLink to="/lastest"><small>Latest</small></NavLink>
                        <NavLink to="/mylist"><small>My List</small></NavLink>
                    </div>
                    <ul>
                        <NavLink to="/user">
                            <i className="fa fa-external-link" aria-hidden="true"></i>
                            <li className="gt">User</li>
                        </NavLink>
                        <NavLink to="/setting">
                            <i className="fa fa-external-link" aria-hidden="true"></i>
                            <li className="ct">Setting</li>
                        </NavLink>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar
