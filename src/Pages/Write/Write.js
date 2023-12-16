//Write.js

import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Write/Write.css";
import ReactQuill from 'react-quill';
import React, { useState } from 'react';
import {Button, Modal, Container} from 'react-bootstrap';

const Write0 = () => {
  return(
    <div>
      <div>
          <input type='text'
          className="input"
          placeholder='이메일'
          />
      </div>
      <div>
        <input type='text'
        className="input"
        placeholder='카카오톡 ID'
        />
      </div>
    </div>
  );
};

const Moda1 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const Update = () => {
    // 프로필 업데이트 로직을 구현하세요.
    // ...
    alert("정보가 저장되었습니다.")
    // 모달 닫기
    handleModalClose();
  };

  return (
    <div>
      <br/>

      <div  className="button2">
        <div className="emailbutton">
          <Button variant="success"
          onClick={handleModalShow}>
          이메일</Button>
        </div>
        <div className="talkbutton">
          <Button variant="success" onClick={handleModalShow}>
          카카오톡</Button>
        </div>
        
      </div>


      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>연락 방법</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="vertical">
            <Write0/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            닫기
          </Button>
          <Button variant="success" onClick={Update}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const MyDropdown = () => {
  const [selectedItem, setSelectedItem] = useState('모집 구분을 선택하세요.');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={`${selectedItem}`}>
        <NavDropdown.Item onClick={() => handleItemClick('스터디')}>스터디</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('프로젝트')}>프로젝트</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
const MyDropdown2 = () => {
  const [selectedItem, setSelectedItem] = useState('진행 방식을 선택하세요.');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={`${selectedItem}`}>
        <NavDropdown.Item onClick={() => handleItemClick('대면')}>대면</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('비대면')}>비대면</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
const MyDropdown3 = () => {
  const [selectedItem, setSelectedItem] = useState('기술 스택을 선택하세요.');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={`${selectedItem}`}>
        <NavDropdown.Item onClick={() => handleItemClick('React')}>React</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('JavaScript')}>JavaScript</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('Figma')}>Figma</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('Python')}>Python</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('C')}>C</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('C++')}>C++</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('Java')}>Java</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('C#')}>C#</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('NodeJs')}>NodeJs</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
const MyDropdown4 = () => {
  const [selectedItem, setSelectedItem] = useState('모집 포지션을 선택하세요.');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={`${selectedItem}`}>
        <NavDropdown.Item onClick={() => handleItemClick('백엔드')}>백엔드</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('프론트엔드')}>프론트엔드</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
const MyDropdown5 = () => {
  const [selectedItem, setSelectedItem] = useState('모집 인원을 선택하세요.');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={`${selectedItem}`}>
        <NavDropdown.Item onClick={() => handleItemClick('1')}>1</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('2')}>2</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('3')}>3</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('4')}>4</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('5')}>5</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('6')}>6</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('7')}>7</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('8명 이상')}>8명 이상</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
const MyDropdown6 = () => {
  const [selectedItem, setSelectedItem] = useState('진행 기간을 선택하세요.');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={`${selectedItem}`}>
        <NavDropdown.Item onClick={() => handleItemClick('1개월 미만')}>1개월 미만</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('1-3개월')}>1-3개월</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('3-6개월')}>3-6개월</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('6개월 이상')}>6개월 이상</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
const MyDropdown7 = () => {
  const [selectedItem, setSelectedItem] = useState('모집 마감일을 선택하세요.');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={`${selectedItem}`}>
        <NavDropdown.Item onClick={() => handleItemClick('1주 후')}>1주 후</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('2주 후')}>2주 후</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('3주 후')}>3주 후</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('4주 후')}>4주 후</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

function Alert(){
  alert("글 작성이 완료되었습니다.");
}
function Alert2(){
  alert("임시 저장이 완료되었습니다.");
}

function Write() {


    return(
        <>{/*
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
  */}
  <Container>
    <br/><br/>
    <div className="horizon">
      <div className="number">
        <h4>1</h4>
      </div>
      <div>
        <h4>&nbsp;프로젝트 기본 정보를 입력해주세요.</h4>
      </div>
    </div>
    <hr></hr>
    
    <br/>
    
    <div className="parent">
      <div>
        <h5>모집 구분</h5>
        <MyDropdown/>

        <br/><br/><br/>

         <h5>진행 방식</h5>
        <MyDropdown2/> 

        <br/><br/><br/>

         <h5>기술 스택</h5>
        <MyDropdown3/>

        <br/><br/><br/>

        <h5>모집 포지션</h5>
        <MyDropdown4/>
      </div>
      <div>
         <h5>모집 인원</h5>
        <MyDropdown5/>
          
        <br/><br/><br/><br/>
      
        <h5>진행 기간</h5>
        <MyDropdown6/>
          
        <br/><br/><br/>
      
        <h5>모집 마감일</h5>
        <MyDropdown7/>

        <br/><br/><br/>  

        <h5>연락 방법</h5>
        <Moda1/>


      </div>
    </div>

    <br/><br/><br/>
      <div className="horizon">
        <div className="number">
          <h4>2</h4>
        </div>
        <div>
          <h4>&nbsp;프로젝트에 대해 설명해주세요.</h4>
        </div>
      </div>

      <hr></hr>

      <div className="center">
      <h5 className="left-align">제목</h5>
        <div className="border2">
          <input type='text' className="noborder2" placeholder='글 제목을 입력하세요.'></input>
        </div>

        <br/><br/>

        <h5 className="left-align">내용</h5>
          <div className="quill">
            <ReactQuill/>
          </div>
        </div>
        <br/><br/>
        <div className="button4">
            <div className="button">
            <Button variant="secondary" onClick={Alert2}>임시 저장</Button>{' '}
          </div>
          <div className="button3">
            <Button variant="success" onClick={Alert}>글쓰기</Button>{' '}
          </div>
        </div>
    </Container>

    </>
    
    );
}

export default Write;