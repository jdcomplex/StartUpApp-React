import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {Authentication,GetPageList} from '../../actions'
import { connect } from 'react-redux';

 class Home extends Component {
   componentDidMount(){
     if(localStorage.getItem('user')){
     this.props.GetPageList();
     }else{
       console.log('Page will be render after login');
     }
   }

   handleClick=(e)=>{
e.preventDefault();
localStorage.removeItem('user');
window.location.reload();

   }
  render() {
    const { userData,pageData } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
      <h1>Hi {userData?userData.FullName:'Guest'}!</h1>
      <ul>
      {pageData.map((item,key)=>
        <li key={item.PageName}>{item.PageName}</li>
      )}
      </ul>
      {userData? <button type="button" onClick={this.handleClick}>Logout</button>:''}
  </div>

    );
  }
}

// Home.propTypes = {
//   classes: PropTypes.object
// };


const mapStateToProps = state => {
  return {
    userData: state.authenticationReducer.user,
    pageData:state.authenticationReducer.pageData
  };
};

export default
    connect(mapStateToProps, {
      Authentication,GetPageList
    })
  (Home)
