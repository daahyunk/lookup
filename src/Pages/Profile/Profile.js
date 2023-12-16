//Profile.js
import "../Profile/profile.css";
import {Button, Modal, Container} from 'react-bootstrap';
import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MyDropdown = ({ selectedItem, onSelect }) => {
  const handleItemClick = (itemName) => {
    onSelect(itemName);
  };

  return (
    <div className="border">
      <NavDropdown title={selectedItem}>
        <NavDropdown.Item onClick={() => handleItemClick('스터디')}>스터디</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleItemClick('프로젝트')}>프로젝트</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

  const MyDropdown2 = ({ selectedItem, onSelect }) => {
    const handleItemClick = (itemName) => {
      onSelect(itemName);
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
  const MyDropdown3 = ({ selectedItem, onSelect }) => {
    const handleItemClick = (itemName) => {
      onSelect(itemName);
    };
  
    return (
      <div className="border">
        <NavDropdown title={`${selectedItem}`}>
          <NavDropdown.Item onClick={() => handleItemClick('디자이너')}>디자이너</NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleItemClick('백엔드 개발자')}>백엔드 개발자</NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleItemClick('프론트엔드 개발자')}>프론트엔드 개발자</NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  };
  const Write = ({ onKeyUp }) => {
    const sendInput1 = (event) => {
      onKeyUp(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          id="input1"
          className="input"
          placeholder="간단한 설명을 입력해주세요."
          onKeyUp={sendInput1}
        />
      </div>
    );
  };
  
  const Write2 = ({ onKeyUp }) => {
    const sendInput2 = (event) => {
      onKeyUp(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          id="input2"
          className="input"
          placeholder="참여 기간을 입력해주세요. ex) 2022.10.19"
          onKeyUp={sendInput2}
        />
      </div>
    );
  };

const ProfileFix = ({ onProfileUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [division, setDivision] = useState('구분');
  const [stack, setStack] = useState('기술 스택');
  const [position, setPosition] = useState('포지션');
  const [write1, setWrite1] = useState('');
  const [write2, setWrite2] = useState('');

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleProfileUpdate = () => {
    onProfileUpdate({ division, stack, position, write1, write2 });
    // ...
    alert('프로필이 업데이트 되었습니다.');
    // 모달 닫기
    handleModalClose();
  };

  return (
    <div>
      <div className="buttonRight">
        <Button variant="secondary" onClick={handleModalShow}>
          프로필 수정
        </Button>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>참여목록 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="vertical">
            <MyDropdown selectedItem={division} onSelect={setDivision} />
            <MyDropdown2 selectedItem={stack} onSelect={setStack} />
            <MyDropdown3 selectedItem={position} onSelect={setPosition} />
            <Write onKeyUp={(value) => setWrite1(value)} />
            <Write2 onKeyUp={(value) => setWrite2(value)} />
          </div>
          <div className="modalrealtime">
            {division}
            <br/>
            {stack}
            <br/>
            {position}
            <br/>
            {write1}
            <br/>
            {write2}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            닫기
          </Button>
          <Button variant="success" onClick={handleProfileUpdate}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const UpdateScreen = ({ division, stack, position, write1, write2 }) => {
  return (
    <>
      <div className="filterlist2">
        <div className="front">
          <div>{division}</div>
          <div>{stack}</div>
          <div>{position}</div>
        </div>
        <div className="rear">
          <div>{write1}</div>
          <div>{write2}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

function Profile(){
  const [profileData, setProfileData] = useState({
    division: '',
    stack: '',
    position: '',
    write1: '',
    write2: '',
  });
  const handleProfileUpdate = (updatedData) => {
    setProfileData(updatedData);
  };
    return(
        <>
        <Container>
            <br/><br/>
            <div className="horizon">
                <div>
                    <img src='/profile.png' width='200'/>
                </div>
                <br/><br/>
                <div className="profilename">
                    <h3>Hansung</h3>
                    <br/>
                    <h5>프론트엔드 | 한성대학교</h5>
                </div>
                <ProfileFix onProfileUpdate={handleProfileUpdate}/>
            </div>
            <br/><br/>
            <h4>참여 목록</h4>
            <div>
                <div className="filterlist">
                    <div className="front">
                        <div>
                            구분
                         </div>
                        <div>
                            기술스택
                        </div>
                        <div>
                             포지션
                        </div>
                    </div>
                    <div className="rear">   
                        <div>
                            &nbsp;
                        </div>
                        <div>
                            참여일자
                        </div>
                    </div>
                </div>
                <div className="filterlist2">
                    <div className="front">
                        <div>
                            프로젝트
                        </div>
                        <div>
                            Figma
                        </div>
                        <div>
                            디자이너
                        </div>
                    </div>
                    <div className="rear">
                        <div>
                            커뮤니티 웹 서비스 제작
                        </div>
                        <div>
                            2022.08.19
                        </div>
                    </div>
                </div>
                <hr/>
                <UpdateScreen {...profileData}/>

                <br/><br/>
                <h4>관심 목록</h4>
                <div className="filterlist">
                    <div className="front">
                        <div>
                            구분
                         </div>
                        <div>
                            기술스택
                        </div>
                        <div>
                             포지션
                        </div>
                    </div>
                    <div className="rear">   
                        <div>
                            &nbsp;
                        </div>
                        <div>
                            참여일자
                        </div>
                    </div>
                </div>
                <div className="filterlist2">
                    <div className="front">
                        <div>
                            스터디
                        </div>
                        <div>
                            Figma
                        </div>
                        <div>
                            디자이너
                        </div>
                    </div>
                    <div className="rear">
                        <div>
                            UI/UX 프로덕트 디자인 포트폴리오 스터디
                        </div>
                        <div>
                            <Button class="btn btn-outline-secondary btn-sm" variant="aa">신청하기</Button>{' '}
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </Container>
        </>
    );
}

export default Profile;