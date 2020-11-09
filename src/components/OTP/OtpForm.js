import React from 'react';
import Modal from 'react-modal'
import { FaArrowLeft } from "react-icons/fa"

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '670px',
        borderRadius : '15px',
        height : '570px',
        position : 'relative'
    }
};


const OtpForm = ({modalIsOpen, closeOtpModal, openModal}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeOtpModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <FaArrowLeft style={{position:'absolute',top:'2rem',left:'2rem'}} />
        <div className="container" style={{fontFamily:'Segoe UI', padding:'6rem 4rem'}}>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h2 className="mb-5" style={{fontWeight:'600',textAlign:'center',fontSize:'22px', color:'#000000'}}>OTP sent!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input style={{borderRadius:'30px',height:'60px', color:'#000000'}} type="text" className="form-control" placeholder="Enter Your OTP"/>
                        </div>
                        <p style={{paddingRight:'4rem',fontSize:'14px'}}>One time Passcode sent to your email ID- abc@gmail.com</p>
                        <button style={{backgroundColor:'#7ECB20',color:'#ffffff',fontWeight:'600',fontSize:'27px',borderRadius:'30px'}} type="submit" className="btn col-12" onClick={openModal}>Enter</button>
                    </form>
                </div>
            </div>
        </div>
        </Modal>
    )
}

export default OtpForm
