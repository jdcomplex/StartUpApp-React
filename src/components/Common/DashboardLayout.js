import React from "react";
import '../../assets/admin/plugins/fontawesome-free/css/all.min.css';
import '../../assets/admin/dist/css/adminlte.min.css';
import ExternalJs from '../../components/Common/ExternalJs';
import DashboardHeader from "../Admin/Common/Header";
import Sidebar from '../Admin/Common/Sidebar';
import Footer from '../Admin/Common/Footer';
const MainLayout = (props) => (
  <React.Fragment>
    <div className="wrapper">
    <DashboardHeader />
    <Sidebar />
      {props.children}
    <Footer />
    </div>
    <ExternalJs />
  </React.Fragment>
);

export default MainLayout;
