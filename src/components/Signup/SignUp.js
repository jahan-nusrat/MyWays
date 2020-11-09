import React from 'react'
import Modal from 'react-modal'
import { FaTimes } from "react-icons/fa";
import './sign.style.css'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '670px',
        borderRadius : '15px'
    }
};

const SignUp = ({ closeModal, modalIsOpen, openModal}) => {
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
        <div className="container py-5" style={{fontFamily:'Segoe UI'}}>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h2 style={{color: '#333333',textAlign: 'center',fontSize:'33px',fontWeight:'600'}}>Sign Up</h2>
                    <p style={{color:'#212020', fontSize:'22px', textAlign: 'center'}}>It's quick and easy</p>
                    <form onSubmit={handleSubmit} className="py-4">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <button style={{backgroundColor:'#7ECB20',color:'#ffffff',fontSize:'22px'}} type="submit" className="btn col-12 mt-3" onClick={openModal}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </Modal>
    )
}

export default SignUp
