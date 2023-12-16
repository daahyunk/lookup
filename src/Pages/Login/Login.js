// src/components/Login/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
`;

const LogoText = styled.div`
  color: black;
  font-size: 25px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 400;
  word-wrap: break-word;
  color: black;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const StyledInput = styled.input`
  width: 412px;
  height: 53px;
  background: #f5f5f5;
  border: none;
  outline: none;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  width: 412px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const RememberMeLabel = styled(Label)`
  margin-left: -5px;
  font-size: 16px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 412px;
  height: 48px;
  background: #74b37a;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const SignUpButton = styled(LoginButton)`
  background: #aaaaaa;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const ForgotPasswordText = styled.div`
  color: black;
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
  text-align: center;
  margin-top: 25px;
  width: 100%; 
`;

const FindLink = styled(Link)`
  color: #74b37a;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // 여기에서 실제 로그인 처리 로직을 구현합니다.
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // 실제로는 여기에서 서버로 로그인 정보를 전송하고, 인증 결과에 따라 다른 동작을 수행해야 합니다.
  };

  return (
    <Container>
      <LogoText>LOGIN</LogoText>
      <FormContainer>
        <Label htmlFor="email">이메일</Label>
        <StyledInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
        />

        <Label htmlFor="password">비밀번호</Label>
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <RememberMeLabel htmlFor="rememberMe">로그인 상태 유지</RememberMeLabel>
        </CheckboxContainer>

        <LoginButton type="button" onClick={handleLogin}>
          로그인
        </LoginButton>

        <SignUpButton as={Link} to="/signup">
          회원가입
        </SignUpButton>

        <ForgotPasswordText>
          <span>비밀번호를 잊으셨나요? </span>
          <FindLink to="/forgot-password">찾기</FindLink>
        </ForgotPasswordText>
      </FormContainer>
    </Container>
  );
}

export default Login;