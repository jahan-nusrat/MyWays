import React from 'react';
import logo from '../../images/small.png';
import instant from '../../images/instant.png';
import './nav.style.css'
import { useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../Signup/SignUp';
import OtpForm from '../OTP/OtpForm';
import SuccessNotify from '../Notification/SuccessNotify';
import {FaExclamationTriangle} from 'react-icons/fa'

const Navbar = () => {
    const [state,setState]= useState({
        isLoginOpen: false,
        isSignUpOpen: false,
        isOtpOpen: false,
        isNotification: false
    })

    const openModal=modalType =>()=>{
        if (modalType === "login") {
            setState({
                isLoginOpen: true,
                isSignUpOpen: false,
                isOtpOpen: false,
                isNotification:false
            });
          } else if (modalType === "signup") {
            setState({
              isLoginOpen: false,
              isSignUpOpen: true,
              isOtpOpen: false,
              isNotification: false
            });
          } else if (modalType === "otp"){
            setState({
                isLoginOpen: false,
                isSignUpOpen: false,
                isOtpOpen: true,
                isNotification:false
            });
          } else if (modalType === "notification"){
              setState({
                isLoginOpen: false,
                isSignUpOpen: false,
                isOtpOpen: false,
                isNotification:true
              })
          }
    }

    const closeModal = modalType => () => {
        if (modalType === "login") {
            setState({
                isLoginOpen: false
          });
        } else if (modalType === "signup") {
            setState({
                isSignUpOpen: false
            });
        } else if (modalType === "otp"){
            setState({
                isOtpOpen:false
            })
        } else if (modalType === "notification"){
            setState({
                isNotification: false
            })
        }
      };

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-0" style={{boxShadow: '0 3px 6px rgba(0,0,0,0.2'}}>
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" classNameName="img-fluid nav-logo"/>
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">For You </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <FaExclamationTriangle style={{color: '#ffffff',position: 'absolute', top: '-10px',left:'50%',transform: 'translateX(-50%)'}} />
                            <a className="dropdown-item" href="#">Find Matching Internships</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Hire Right Talent</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Work From Home</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src={instant} alt="instant" classNameName="img-fluid"/> Instant Apply</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item" onClick={openModal("signup")}>
                        <a className="nav-link" style={{color: '#7ECB20'}} href="#">SIGN UP</a>
                    </li>
                    <li className="nav-item" onClick={openModal("login")}>
                        <a className="nav-link login" style={{color:'#ffffff'}} href="#">LOGIN</a>
                    </li>
                    <Login openModal={openModal("signup")} openNotifyModel={openModal("notification")} closeModal={closeModal("login")} modalIsOpen={state.isLoginOpen} />
                    <SignUp openModal={openModal("otp")} closeOtpModal={closeModal("otp")} closeModal={closeModal("signup")} modalIsOpen={state.isSignUpOpen} />
                    <OtpForm openModal={openModal("notification")} closeOtpModal={closeModal("otp")} modalIsOpen={state.isOtpOpen} />
                    <SuccessNotify modalIsOpen={state.isNotification} closeNotifyModal={closeModal("notification")} />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
