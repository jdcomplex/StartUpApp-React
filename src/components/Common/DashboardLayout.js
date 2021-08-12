import React, {useState, useEffect} from 'react';
import {Route, Switch,useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import './admin.scss';
import Dashboard from '../Admin/Dashboard';
import Profile from '../Admin/Profile';
import ProfileEdit from '../Admin/Profile/edit';
import Header from '../Admin/Common/Header/Header';
import Footer from '../Admin/Common/Footer/Footer';
import Sidebar from '../Admin/Common/Sidebar/Sidebar';
import PageLoading from '../Admin/Common/page-loading/PageLoading';
import * as ActionTypes from '../../reducers/types';

// const DashboardLayout = ({onUserLoad}) => {
    const DashboardLayout = (props) => {
    const location = useLocation();
    const [appLoadingState, updateAppLoading] = useState(false);
    const [menusidebarState, updateMenusidebarState] = useState({
        isMenuSidebarCollapsed: false
    });
console.log(location);
    const toggleMenuSidebar = () => {
        updateMenusidebarState({
            isMenuSidebarCollapsed: !menusidebarState.isMenuSidebarCollapsed
        });
    };

    // useEffect(() => {
    //     updateAppLoading(true);
    //     const fetchProfile = async () => {
    //         try {
    //             // const response = await Gatekeeper.getProfile();
    //             // onUserLoad({...response});
    //             updateAppLoading(false);
    //         } catch (error) {
    //             updateAppLoading(false);
    //         }
    //     };
    //     fetchProfile();
    //     return () => {};
    // }, [onUserLoad]);

    let urlArray = location.pathname.split('/').slice(1, 4);
    console.log(urlArray);
    if (urlArray.length > 1 && urlArray[urlArray.length - 1] === "")
        urlArray.splice((urlArray.length - 1), 1);

    let pageTitle =urlArray[1].charAt(0).toUpperCase() + urlArray[1].slice(1);

    if (urlArray.includes("admin/dashboard"))
        urlArray.splice(0, 1);

    document.getElementById('root').classList.remove('register-page');
    document.getElementById('root').classList.remove('login-page');
    document.getElementById('root').classList.remove('hold-transition');

    document.getElementById('root').className += ' sidebar-mini';

    if (menusidebarState.isMenuSidebarCollapsed) {
        document.getElementById('root').classList.add('sidebar-collapse');
        document.getElementById('root').classList.remove('sidebar-open');
    } else {
        document.getElementById('root').classList.add('sidebar-open');
        document.getElementById('root').classList.remove('sidebar-collapse');
    }

    let template;

    if (appLoadingState) {
        template = <PageLoading />;
    } else {
        template = (
            <>
                <Header toggleMenuSidebar={toggleMenuSidebar} />

                <Sidebar isMenuSidebarCollapsed={menusidebarState.isMenuSidebarCollapsed} />
                {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{pageTitle}</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            {urlArray.map((item, index) => (
        
        (index !== (urlArray.length - 1)) ?
            <li class="breadcrumb-item" key={index}>
                <a href= {`/admin/${item !== "admin" ? item : "dashboard"}`}>{item !== "admin" ? item.charAt(0).toUpperCase() + item.slice(1) : "Dashboard"}</a>
            </li>:
             <li class="breadcrumb-item active" key={index}>{item !== "admin" ? item.charAt(0).toUpperCase() + item.slice(1) : "Dashboard"}
             </li>
             ))}
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}

 
                    <section className="content">
                        {/* <Switch>
                            <Route exact path="/admin/dashboard" component={Dashboard} />
                            <Route exact path="/admin/profile" component={Profile} />
                            <Route exact path="/admin/profile/edit" component={ProfileEdit} />
                        </Switch> */}
                        {props.childern}
                    </section>
                </div>
                <Footer />
                <div
                    id="sidebar-overlay"
                    role="presentation"
                    onClick={toggleMenuSidebar}
                    onKeyDown={() => {}}
                />
            </>
        );
    }

    return <div className="wrapper">{template}</div>;
};


export default DashboardLayout
