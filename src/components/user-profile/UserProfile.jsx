// import React from "react";
// import Img from "../Img/Img";
// function UserProfile(){
//     return(
//         <div className="user-profile">
//             <Img className="" src={'../assets/images/user.png'} alt={'illustration of user'} />
//         </div>
//     );
// }
// export default UserProfile;

import React, { useState, useRef, useEffect } from 'react';
import Img from '../img/Img';
import Icon from '../Icon';


const UserProfile = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="user-dropdown" ref={dropdownRef}>
            <div className='user-name' onClick={() => setOpen(!open)}>
                <Img src={'../assets/images/user.png'} alt={'illustration of user'}
                />
                <a className="name" >
                    John Paul <Icon name={'caret-down'} />
                </a>
            </div>

            {open && (
                <div className="user-dropdown__menu">
                    <ul>
                        <li><a href="/profile">My Profile</a></li>
                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
