// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Main/PostModal.css'; 
import ChatModal from '../Chat/ChatModal';

const customStyles = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '32%', // 너비를 화면의 50%로 조정
    height: '90%', // 높이 설정 유지
    maxHeight: '800px',
  },
};

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경을 어둡게 하는 스타일
  zIndex: 10
};

const closeButtonStyles = {
  position: 'absolute',
  top: '20px',
  right: '30px',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#888',
};

const applyButton = {
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  marginTop: '15px',
  backgroundColor: 'rgb(110, 172, 110)',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '5px',
  paddingBottom: '5px',
  borderRadius: '5px',
  textAlign: 'center',
  margin: 'auto',
};

const modalContentStyles = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


const MyModal = ({ isOpen, closeModal, selectedCard }) => {
  const [isApplied, setIsApplied] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);

  const apply = () => {
    setIsApplied(true);
  };

  const handleChatModalShow = () => {
    setShowChatModal(true);
  };

  const handleChatModalClose = () => {
    setShowChatModal(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={{ overlay: overlayStyles, content: customStyles.content }}
        contentLabel="Example Modal"
      >
        {selectedCard && (
          <div className="post-modal-content">
            <span
              style={closeButtonStyles}
              onClick={closeModal}
              className="close-button"
            >
              X
            </span>
            <p
              className="post-category"
              style={{
                textAlign: 'left',
                display: 'flex',
                alignItems: 'left',
              }}
            >
              <span className="post-category-text" style={{ textAlign: 'left' }}>
                {selectedCard.type}
              </span>
            </p>
            <h5
              style={{
                ...modalContentStyles,
                marginTop: '35px',
                marginBottom: '20px',
                paddingLeft: '40px',
                textAlign: 'center',
                paddingRight: '40px',
                lineHeight: '1.8',
              }}
            >
              {selectedCard.title}
            </h5>
            <p style={modalContentStyles}>
              <img
                src={selectedCard.mainImage}
                alt="Selected Card Image"
                style={{
                  maxWidth: '85%',
                  height: '300%',
                  maxHeight: '300px',
                }}
              />
            </p>
            <p style={{ marginLeft: '32px' }}>
              {selectedCard.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  width="30"
                  height="30"
                  marginLeft="100px"
                  className="me-1"
                />
              ))}
            </p>
            <p
              style={{
                fontSize: '13px',
                marginTop: '25px',
                paddingLeft: '40px',
                textAlign: 'center',
                paddingRight: '40px',
                lineHeight: '1.8',
                fontWeight: 'normal',
              }}
            >
              {selectedCard.description}
            </p>
            <div className="d-flex justify-content-center" >
              <button
                className="apply-button"
                onClick={apply}
                disabled={isApplied}
              >
                {isApplied ? '지원완료' : '지원하기'}
              </button>
              <button
                className="apply-button chat-button" // apply-button 클래스 스타일을 재사용하거나 직접 스타일을 지정합니다.
                style={{ backgroundColor: '#74B37A', color: 'white' }} // 직접 스타일을 지정할 때
                onClick={handleChatModalShow}
              >
                1:1 채팅하기
              </button>
            </div>
          </div>
        )}
      </Modal>
      {showChatModal && (
        <ChatModal
          show={showChatModal}
          onHide={handleChatModalClose}
        />
      )}
    </>
  );
};

export default MyModal;
