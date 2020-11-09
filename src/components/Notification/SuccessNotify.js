import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import Modal from 'react-modal'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width : '670px',
        height : '560px',
        borderRadius : '15px'
    }
};

const SuccessNotify = ({modalIsOpen,closeNotifyModal}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeNotifyModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <div className="container" style={{position:'relative',fontFamily:'Segoe UI',padding:'10rem 0'}}>
            <div className="row justify-content-center">
                <div className="col-10 text-center" >
                    <FaCheckCircle style={{fontSize:'4rem',color:'#7ECB20'}} />
                    <h1 style={{fontSize:'22px', fontWeight:'600',marginTop:'2.5rem'}}>Thanks. Successful!</h1>
                </div>
            </div>
        </div>
        </Modal>
    )
}

export default SuccessNotify
