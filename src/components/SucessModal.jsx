import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


const SucessModal = ({isModalOpen,setIsModalOpen}) => {
    
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#eb0c0c",
        borderRadius: '12px'
      },
    };

    return (
        <Modal isOpen={isModalOpen} style={customStyles} ariaHideApp={false}>
            <div className='inner-modal'>
                 <label>Your Expense Added SuccessFully</label>
                 <img src={require('../assests/dataadded.jpg')} alt="Success" className="added-image"/>

                 <Link to='/' className='tohome'>
                  <div className='home-redirect'>
                    <i className="fas fa-home"></i>
                    Home
                  </div>
                 </Link>
            </div>
        </Modal>
    )
}

export default SucessModal
