// Chat.js

import React, { useState } from 'react';
import ChatModal from '../Chat/ChatModal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ChatContainer = styled.div`
  height: 70vh; /* 화면의 높이를 100%로 설정하여 전체 화면으로 만듭니다. */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Chat = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const showChatAgain = () => {
    setModalIsOpen(true);
  };

  return (
    <ChatContainer>
      {modalIsOpen ? (
        <ChatModal show={modalIsOpen} onHide={closeModal} />
      ) : (
        <div>
          <Button variant="success" onClick={showChatAgain}>
            채팅 하러 가기 
          </Button>
        </div>
      )}
    </ChatContainer>
  );
};

export default Chat;
