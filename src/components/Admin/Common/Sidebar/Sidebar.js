import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Sidebar = ({isMenuSidebarCollapsed}) => {
    const [t] = useTranslation();

    let inputStyle = {
      overflowY: 'hidden'
    };
    
    // if(isMenuSidebarCollapsed) {
    //   inputStyle = {
       
    //   }
    // }  

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img
                    src="/img/logo.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{opacity: '.8'}}
                />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>
            <div className="sidebar">
                <nav className="mt-2"  style={inputStyle}>
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-item">
                            <NavLink to="/admin/dashboard" exact className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>{t('menusidebar.label.dashboard')}</p>
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </aside>
    );
};



export default Sidebar;
