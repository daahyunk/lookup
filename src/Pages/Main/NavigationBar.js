// NavigationBar.js 
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'; // Container 임포트 추가
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar({ darkMode, darkModeHandler }) {
    const location = useLocation(); // 현재 페이지의 경로를 가져옴
  const [selectedItem, setSelectedItem] = useState('마이페이지'); // 드롭다운의 선택된 항목 상태

  // 페이지 이동 시 해당 페이지에 맞는 드롭다운 항목 텍스트 설정
  useEffect(() => {
    switch (location.pathname) {
      case '/Write':
        setSelectedItem('글쓰기');
        break;
      case '/timetable':
        setSelectedItem('타임테이블');
        break;
      case '/Chat':
        setSelectedItem('채팅');
        break;
      case '/Profile':
        setSelectedItem('내 프로필');
        break;
      default:
        setSelectedItem('마이페이지');
        break;
    }
  }, [location]);
  return (
    <div style={{position: 'relative', left: '27px', paddingTop: '20px' ,paddingRight:"10px" }}>
    <Navbar bg="transparent" data-bs-theme="light" className={darkMode ? 'navbar-dark' : ''}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src='/mainlogo.png'
                width="100"
                alt='Logo'
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >전체</Nav.Link>
            <Nav.Link>스터디</Nav.Link>
            <Nav.Link>프로젝트</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/Login">로그인</Nav.Link>
            <Nav.Link as={Link} to="/Signup">회원가입</Nav.Link>
            <NavDropdown  title={selectedItem} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Profile">내 프로필</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Write">글쓰기</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/timetable" >타임테이블</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Chat">채팅</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar></div>
  );
}

export default NavigationBar;
