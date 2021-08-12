import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Notifications from './notifications-dropdown/NotificationsDropdown';
import Languages from './languages-dropdown/LanguagesDropdown';
import User from './user-dropdown/UserDropdown';

const Header = ({toggleMenuSidebar}) => {
    const [t] = useTranslation();
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button
                        onClick={() => toggleMenuSidebar()}
                        type="button"
                        className="nav-link"
                        data-widget="pushmenu"
                        href="#"
                    >
                        <i className="fas fa-bars" />
                    </button>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item d-sm-inline-block">
                    <span id="UserNameSpan" className="navbar-text">Welcome, Kamal Man Singh</span>
                </li>
                <Notifications />
                <Languages />
                <User />
                {/* <li className="nav-item">
          <button
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            type="button"
          >
            <i className="fas fa-th-large" />
          </button>
        </li> */}
            </ul>
        </nav>
    );
};

export default Header;
