// SignUpSuccess.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
`;

const SuccessText = styled.div`
  color: black;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 310px;
  letter-spacing: -0.7px; /* 조절 가능한 값 (음수는 자간을 좁힙니다) */
`;

const LookupText = styled.div`
  color: #595959;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
  margin-bottom: 20px;
`;

const LoginButton = styled(Link)`
  background-color: #74b37a;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none; /* Link 컴포넌트 사용 시 필요한 속성 */
`;

function SignUpSuccess() {
  const location = useLocation();
  const { username } = location.state || {}; // username을 가져옴

  return (
    <Container>
      <SuccessText>{username} 님, 환영합니다!</SuccessText>
      <LookupText>룩업을 마음껏 이용해보세요 :) </LookupText>
      <LoginButton to="/login">로그인 페이지로 이동</LoginButton>
    </Container>
  );
}

export default SignUpSuccess;