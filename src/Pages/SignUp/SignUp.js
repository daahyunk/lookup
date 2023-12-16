import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
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
  border: ${({ hasError }) => (hasError ? '2px solid red' : 'none')};
  outline: none;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const SignupButton = styled.button`
  width: 412px;
  height: 53px;
  margin-top: 20px;
  background: ${({ isEnabled }) => (isEnabled ? '#74b37a' : '#aaaaaa')};
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: ${({ isEnabled }) => (isEnabled ? 'pointer' : 'not-allowed')};
`;

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 입력 값이 올바른지 확인하여 버튼 활성/비활성 상태 업데이트
    setIsButtonEnabled(validateEmail(email) && validatePassword(password));
  }, [email, password]);

  const handleSignUp = () => {
    try {
      // 폼 제출 전에 이메일 및 비밀번호 형식을 검증합니다.
      if (emailError || passwordError) {
        console.error('올바르지 않은 입력 형식이 있습니다');
        return;
      }
  
      // 각 입력 필드가 비어 있는지 확인
      if (!username || !email || !password) {
        console.error('모든 입력 필드를 작성하세요');
        return;
      }
  
      console.log('가입 성공!');
      // 회원가입 성공 페이지로 이동하면서 username을 함께 전달
      navigate('/signup-success', { state: { username } });
    } catch (error) {
      console.error('가입 실패:', error);
    }
  };
  
  

  const validateEmail = (input) => {
    // 기본적인 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input) => {
    // 비밀번호 형식 검증: 영문 대소문자, 숫자를 혼합하여 8~20자
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/;
    return passwordRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setEmailError(validateEmail(inputEmail) ? '' : '올바른 이메일을 입력하세요');
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setPasswordError(validatePassword(inputPassword) ? '' : '올바른 비밀번호를 입력하세요');
  };

  return (
    <Container>
      <LogoText>SIGN UP</LogoText>
      <FormContainer>
        <Label htmlFor="username">사용자명</Label>
        <StyledInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <Label htmlFor="email">이메일</Label>
        <StyledInput
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          hasError={Boolean(emailError)}
        />
        {emailError && <ErrorText>{emailError}</ErrorText>}

        <Label htmlFor="password">비밀번호</Label>
        <StyledInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요"
          hasError={Boolean(passwordError)}
        />
        {passwordError && <ErrorText>{passwordError}</ErrorText>}

        <SignupButton
          type="button"
          onClick={handleSignUp}
          isEnabled={isButtonEnabled}
        >
          회원가입
        </SignupButton>
      </FormContainer>
    </Container>
  );
}

export default SignUp;