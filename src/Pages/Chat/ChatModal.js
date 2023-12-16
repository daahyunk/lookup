import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

const StyledModal = styled(Modal)`
  & .modal-dialog {
    max-width: 1120px;
    border-radius: 10px;
    z-index: 10000; /* ChatModal.js의 zIndex 값을 Modal.js보다 크게 설정 */
  }

  & .modal-content {
    position: absolute;
    top: 150px;
  }
`;

const ChatContainer = styled.div`
  position: relative;
  display: flex;
  background: white;
  border-radius: 10px;
  z-index: 10001; /* MyModal보다 높은 z-index 값을 설정합니다 */
`;

// 채팅 목록 스타일
const ChatList = styled.div`
  flex: 1;
  border-right: 1px solid #ccc;
  overflow-y: auto;
  max-height: 600px; /* Set a maximum height for the ChatList */
`;

// 채팅 목록 타이틀 스타일
const ChatListTitle = styled.div`
  color: black;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
  margin-bottom: 3px;
  padding: 20px;
`;

// 채팅 창 스타일
const ChatWindow = styled.div`
  flex: 2;
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  height: 600px; /* Set a maximum height for the ChatWindow */
`;

// 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

// 채팅 버블 컨테이너 스타일
const ChatBubbleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 30px;
`;

// 채팅 버블 스타일
const ChatBubble = styled.div`
  padding: 13px;
  background: #74b37a;
  border-radius: 10px 0 10px 10px;
  margin: 20px;
  margin-left: ${(props) => (props.isSender ? 'auto' : '0')};
  max-width: 40%;
  font-size: 15px;
  color: white;
`;

// 채팅 타임스탬프 컨테이너 스타일
const ChatTimestampContainer = styled.div`
  margin-left: ${(props) => (props.isSender ? '1px' : '0')};
`;

// 채팅 유저 컴포넌트
const ChatUser = ({ name, onUserClick, isActive, lastMessage, lastMessageTimestamp }) => {
  return (
    <UserBlock onClick={() => onUserClick(name)} active={isActive}>
      <ProfileImage src="/profile.png" alt="프로필" />
      <div>
        <UserName isActive={isActive}>{name}</UserName>
        {lastMessage && (
          <LastMessageContainer>
            <LastMessage isActive={isActive}>{lastMessage}</LastMessage>
            {lastMessageTimestamp && (
              <ChatListTimestamp>{lastMessageTimestamp}</ChatListTimestamp>
            )}
          </LastMessageContainer>
        )}
      </div>
    </UserBlock>
  );
};

// 마지막 메시지 컨테이너 스타일
const LastMessageContainer = styled.div`
   margin-top: auto; /* 추가된 부분 */
`;

// 채팅 타임스탬프 스타일
const ChatListTimestamp = styled.span`
  position: relative;
  font-size: 12px;
  color: #888;
  margin-left: 231px;
`;

// 채팅 타임스탬프 스타일
const ChatTimestamp = styled.span`
  font-size: 12px;
  color: #888;
  margin-top: -30px; /* 원하는 여백 설정 */
`;

// 유저 이름 스타일
const UserName = styled.div`
  color: #1d1d1d;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 450;
  line-height: 18px;
  word-wrap: break-word;
  margin-top: 23px;
  margin-bottom: 2px;
`;

// 마지막 메시지 스타일
const LastMessage = styled.div`
  color: #3f3f3f;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
  margin-top: 0; /* 수정된 부분 */
`;

// 프로필 이미지 스타일
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 10px;
`;

// 유저 블록 스타일
const UserBlock = styled.div`
  cursor: pointer;
  height: 90px;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? '#e5efe5' : 'transparent')};
`;

// 채팅 유저네임 스타일
const ChatUsername = styled.h2`
  color: #1d1d1d;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
  margin-top: 20px;
  margin-left: 60px;
`;

// 채팅 프로필 이미지 스타일
const ChatProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: -20px;
`;

// 디바이더 컨테이너 스타일
const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

// 디바이더 스타일
const Divider = styled.div`
  height: 1px;
  width: 30%;
  background-color: #ccc;
  margin: 0 10px;
`;

// 채팅 날짜 컨테이너 스타일
const ChatDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 채팅 날짜 스타일
const ChatDate = styled.span`
  font-size: 13px;
  color: #888;
`;

// 채팅 입력 컨테이너 스타일
const ChatInputContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

// 채팅 입력 스타일
const ChatInput = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// 전송 버튼 스타일
const SendButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
`;

const ChatModal = ({ show, onHide }) => {
    const [activeChat, setActiveChat] = useState(null);
    const [message, setMessage] = useState('');
    const [chatHistories, setChatHistories] = useState({
        김한성: [],
        박한성: [],
      });
    
      const [lastMessages, setLastMessages] = useState({
        김한성: null,
        박한성: null,
      });
    
      const [firstMessageDates, setFirstMessageDates] = useState({
        김한성: null,
        박한성: null,
      });
    
      // 날짜 포맷 함수
      const getFormattedTimestamp = (date) => {
        const options = { hour: '2-digit', minute: '2-digit' };
        return new Intl.DateTimeFormat('ko-KR', options).format(date);
      };
    
      // 날짜 포맷 함수
      const formatDate = (date) => {
        const options = { year: '2-digit', month: '2-digit', day: '2-digit', weekday: 'long' };
        return new Intl.DateTimeFormat('ko-KR', options).format(date);
      };
  
    const handleUserClick = (userName) => {
      setActiveChat(userName);
    };
  
    const handleSendClick = () => {
      if (!activeChat || !message.trim()) {
        return;
      }
  
      const prevChatHistory = chatHistories[activeChat];
      const prevDate = firstMessageDates[activeChat];
  
      setLastMessages({
        ...lastMessages,
        [activeChat]: message.trim(),
      });
  
      const now = new Date();
  
      setChatHistories({
        ...chatHistories,
        [activeChat]: [
          ...prevChatHistory,
          { sender: '사용자', message: message.trim() },
        ],
      });
  
      setFirstMessageDates({
        ...firstMessageDates,
        [activeChat]: prevDate || now,
      });
  
      setMessage('');
    };
  
    return (
      <StyledModal show={show} onHide={onHide}>
        
            <ChatContainer>
              {/* 채팅 목록 부분 */}
              <ChatList>
                <ChatListTitle>채팅 목록</ChatListTitle>
                <ChatUser
                  name="김한성"
                  onUserClick={handleUserClick}
                  isActive={activeChat === '김한성'}
                  lastMessage={lastMessages['김한성']}
                  lastMessageTimestamp={
                    firstMessageDates['김한성'] && getFormattedTimestamp(firstMessageDates['김한성'])
                  }
                />
                <ChatUser
                  name="박한성"
                  onUserClick={handleUserClick}
                  isActive={activeChat === '박한성'}
                  lastMessage={lastMessages['박한성']}
                  lastMessageTimestamp={
                    firstMessageDates['박한성'] && getFormattedTimestamp(firstMessageDates['박한성'])
                  }
                />
              </ChatList>
  
              {/* 채팅 창 부분 */}
              <ChatWindow>
                <CloseButton onClick={onHide}>X</CloseButton>
                {activeChat && (
                  <div>
                    <ChatUsername>
                      <ChatProfileImage src="/profile.png" alt="프로필" />
                      {activeChat}
                    </ChatUsername>
                    <DividerContainer>
                      {firstMessageDates[activeChat] && <Divider />}
                      <ChatDateContainer>
                        {firstMessageDates[activeChat] && (
                          <ChatDate>{formatDate(firstMessageDates[activeChat])}</ChatDate>
                        )}
                      </ChatDateContainer>
                      {firstMessageDates[activeChat] && <Divider />}
                    </DividerContainer>
                    {chatHistories[activeChat].map((chat, index) => (
                      <ChatBubbleContainer key={index}>
                        <ChatBubble isSender={chat.sender === '사용자'}>
                          <span>{chat.message}</span>
                        </ChatBubble>
                        <ChatTimestampContainer isSender={chat.sender === '사용자'}>
                          <ChatTimestamp>{getFormattedTimestamp()}</ChatTimestamp>
                        </ChatTimestampContainer>
                      </ChatBubbleContainer>
                    ))}
                    <ChatInputContainer>
                      <ChatInput
                        type="text"
                        placeholder="메시지를 입력하세요…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <SendButton onClick={handleSendClick}>전송</SendButton>
                    </ChatInputContainer>
                  </div>
                )}
              </ChatWindow>
            </ChatContainer>
        
      </StyledModal>
    );
  };
  
  export default ChatModal;
