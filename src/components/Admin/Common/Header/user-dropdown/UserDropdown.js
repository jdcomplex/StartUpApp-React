import React, {useRef, useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {DateTime} from 'luxon';
import {useTranslation} from 'react-i18next';

import * as ActionTypes from '../../../../../reducers/types';

const UserDropdown = ({}) => {
    const dropdownRef = useRef(null);
    const history = useHistory();
    const [t] = useTranslation();

    const [dropdownState, updateDropdownState] = useState({
        isDropdownOpen: false
    });

    const toggleDropdown = () => {
        updateDropdownState({isDropdownOpen: !dropdownState.isDropdownOpen});
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            updateDropdownState({isDropdownOpen: false});
        }
    };

    const logOut = (event) => {
        toggleDropdown();
        event.preventDefault();
        // onUserLogout()
        history.push('/login');
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
                false
            );
        };
    });

    let className = 'dropdown-menu dropdown-menu-right';

    if (dropdownState.isDropdownOpen) {
        className += ' show';
    }

    return (
        <li ref={dropdownRef} className="nav-item dropdown user-menu">
            <button
                onClick={toggleDropdown}
                type="button"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
            >
                <img
                    src={ '/img/default-profile.png'}
                    className="user-image img-circle elevation-2"
                    alt="User"
                />
            </button>
            <div className={className}>
            <a href="/SystemUser/UserProfile" id="profileUser" class="dropdown-item" > <i class="far fa-user"></i> Profile</a>
                        <a href="/ChangePassword" class="dropdown-item"> <i class="fas fa-cog"></i> Change Password</a>

                        <a href="javascript:void(0)" id="logoutBtn" class="dropdown-item" > <i class="fas fa-power-off"></i> Logout</a>
            </div>
        </li>
    );
};



export default UserDropdown;
