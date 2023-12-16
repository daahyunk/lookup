import React, { useState } from 'react';
import '../Main/PostModal.css'; // Import the CSS file
import ChatModal from '../Chat/ChatModal'; // Import the ChatModal component

function PostModal({ isOpen, onClose, title, category, icons, images, contents, isApplied, handleApplyClick }) {
  const [showChatModal, setShowChatModal] = useState(false);

  const apply = () => {
    if (handleApplyClick) {
      handleApplyClick(title); // 선택된 카드의 제목을 전달하여 상태 업데이트
    }
  };

  const handleChatModalShow = () => {
    setShowChatModal(true);
  };

  const handleChatModalClose = () => {
    setShowChatModal(false);
  };

  return isOpen ? (
    <>
      <div className="modal-background"></div>
      <div className="post-modal">
        <div className="post-modal-content">
          <span className="close-button" onClick={onClose}>
            X
          </span>
          <p className='post-category'>
            <span className="post-category-text">{category}</span>
          </p>
          <h5>{title}</h5>
          <div className="images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
          <div className="icons">
            {icons.map((image, index) => (
              <img key={index} src={image} alt={`Small Image ${index + 1}`} width="30" height="30" className="me-1" />
            ))}
          </div>
          <h6>{contents}</h6>
          <button className="apply-button" onClick={apply} disabled={isApplied}>
            {isApplied ? '지원완료' : '지원하기'}
          </button>
          <button
                className="apply-button chat-button" // apply-button 클래스 스타일을 재사용하거나 직접 스타일을 지정합니다.
                style={{ backgroundColor: '#74B37A', color: 'white' }} // 직접 스타일을 지정할 때
                onClick={handleChatModalShow}
              >
            채팅하기
          </button>
        </div>
      </div>
      {showChatModal && (
        <ChatModal
          isOpen={showChatModal}
          onClose={handleChatModalClose}
          // You can pass additional props to ChatModal if needed
        />
      )}
    </>
  ) : null;
}

export default PostModal;
