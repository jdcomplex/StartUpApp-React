import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {Authentication} from '../../actions'

 class Login extends Component {
    state={
        email:"",
        password:""
    }

    handleChange=(e)=>{
       this.setState({...this.state,[e.target.name]:e.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        localStorage.removeItem('user');
        
        let {email,password}=this.state;
       

        this.props.Authentication(email,password);
       
        
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Email address</label>
            <input value={this.state.email} onChange={(e)=>this.handleChange(e)} name="email" type="email" className="form-control" placeholder="Enter email" required />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input value={this.state.password} onChange={(e)=>this.handleChange(e)} type="password" name="password" className="form-control" placeholder="Enter password" required />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Login</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </form>
    );
  }
}

Login.propTypes = {
    classes: PropTypes.object
  };
  

const mapStateToProps = state => {
    return {
      userData: state.authenticationReducer.user
    };
  };
  
  export default
      connect(mapStateToProps, {
        Authentication
      })
    (Login)

