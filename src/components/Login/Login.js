import React from 'react'
import Modal from 'react-modal'
import './login.style.css';
import { FaTimes } from "react-icons/fa"

const customStyles = {
    content: {
        top: '0',
        right: '0',
        left: 'auto',
        width:'418px',
        height:'100%'
    }
};

const Login = ({ modalIsOpen,  closeModal, openModal,openNotifyModel}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
    <FaTimes className="close" onClick={closeModal} />
        <div className="container login-heading pt-4" style={{fontFamily:'Segoe UI'}}>
            <div className="row">
                <div className="col-5">
                    <h3 style={{color: '#333333', fontWeight: 'bold', fontSize:'24px'}}>Login</h3>
                </div>
            </div>
            <div className="row justify-content-center login-section">
                <div className="col-12">
                    <form onSubmit={handleSubmit} className="login-form">
                        <h3 className="pb-2" style={{textAlign: 'center',fontSize: '20px', color: '#7ECB20',border:'2px solid transparent',borderBottom: '2px solid #7ECB20',width:'170px',margin:'auto',fontWeight:'600'}}>Student</h3>
                        <div className="form-group mt-4">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <p className="password">Forgot Password?</p>
                        <button type="submit" className="btn btn-login col-12" onClick={openNotifyModel}>Submit</button>
                        <p className="pt-3 mb-0" style={{textAlign: 'center',fontWeight: 'bold', cursor: 'pointer'}} onClick={openModal}>New to MyWays? Sign Up here</p>
                    </form>
                </div>
            </div>
        </div>
    </Modal>
    )
}

export default Login
