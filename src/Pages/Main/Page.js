import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyModal from '../Main/modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Post from '../Main/Post';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

function BasicExample({ onStatusFilterClick, cardsData, setFilteredCards }) {

  const bannerStyle = {
    height: '365px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
    marginTop: '30px',
  };

  const imageStyle = {
    maxWidth: '100', // 이미지 최대 너비 설정
    maxHeight: '100%', // 이미지 최대 높이 설정
    objectFit: 'cover', // 이미지를 부모 요소에 맞춰서 잘라내기
  };
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/banner.png", "/banner1.png", "/banner2.png"];
  const [selectedTech, setSelectedTech] = useState("all");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  
  const [searchTerm, setSearchTerm] = useState("");

  const [darkMode, setDarkMode] = React.useState(false);
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleTechClick = (tech) => {
    // handle the tech click
    console.log('Clicked tech:', tech);
    setSelectedTech(tech);
/*
    const filteredCardsByTech = cardsData.filter((card) => {
        return card.tech.includes(tech);
      });
      */
      const filteredCardsByTech = tech === "all"
      ? cardsData
      : cardsData.filter((card) => card.tech.includes(tech));
    
      // 선택된 기술 스택에 해당하는 카드만 필터링하여 상위 컴포넌트로 전달
      setFilteredCards(filteredCardsByTech);
  };

  const handleNavItemClick = (type) => {
    console.log('Clicked type from Navbar:', type);
  
    // 타입에 따라 필터링하여 상위 컴포넌트로 전달
    if (type === "전체") {
      setFilteredCards(cardsData); // 전체를 눌렀을 때 모든 카드 보이도록
    } else {
      const newFilteredCards = cardsData.filter((card) => card.type === type);
      setFilteredCards(newFilteredCards);
    }
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = () => {
    // onSearch 함수 호출
    console.log('Searching for:', searchTerm);
    const dataToFilter = cardsData || [];

    // onSearch 함수 호출
    const newFilteredCards = dataToFilter.filter((card) => {
      return card.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // 새로 필터링된 카드를 상위 컴포넌트로 전달
    setFilteredCards(newFilteredCards);
  };
  const [selectedItem, setSelectedItem] = useState('마이페이지'); // 선택된 아이템 상태 추가
    const location = useLocation(); // 현재 페이지의 위치를 가져옴
  
    // 페이지 이동 시 드롭다운 제목 업데이트
    React.useEffect(() => {
      const pathname = location.pathname;
      switch (pathname) {
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
          setSelectedItem('내프로필');
          break;
        default:
          setSelectedItem('마이페이지');
          break;
      }
    }, [location]);
  
    // 페이지 이동 시 해당 페이지에 맞는 드롭다운 항목 텍스트 설정
    useEffect(() => {
      switch (location.pathname) {
        case '/Write':
          setSelectedItem('전체');
          break;
        case '/timetable':
          setSelectedItem('React');
          break;
        case '/Chat':
          setSelectedItem('Javascript');
          break;
        case '/Profile':
          setSelectedItem('Css');
          break;
        default:
          setSelectedItem('Instagram');
          break;
      }
    }, [location]);

  return (

    <div style={{position: 'relative', left: '10px', paddingTop: '20px' ,paddingRight:"10px" }}>
      <div style={{}}>
      {darkMode ? (
        <BsFillMoonFill size={24} onClick={darkModeHandler} className="dark-mode-icon" />
      ) : (
        <BsFillSunFill size={24} onClick={darkModeHandler} className="dark-mode-icon"/>
      )}
      <Navbar bg="transparent" data-bs-theme="light" className={darkMode ? 'navbar-dark' : ''}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src='/mainlogo.png'
                width="100"
                alt='Logo'
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => handleNavItemClick("전체")}>전체</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => handleNavItemClick("스터디")}>스터디</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => handleNavItemClick("프로젝트")}>프로젝트</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Login">로그인</Nav.Link>
            <Nav.Link as={Link} to="/Signup">회원가입</Nav.Link>
            <NavDropdown title="마이페이지" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Write">글쓰기</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/timetable">타임테이블</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Chat">채팅</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Profile">내 프로필</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <div style={bannerStyle}>
        <img src={images[currentImageIndex]} alt={`banner${currentImageIndex + 1}`} style={imageStyle} />
        </div><p></p>
      <span className="bold-text">🔥이번 주 HOT 게시글🔥</span>
      <Post />
    </div>

      
</div>
<br />
      <div style={{ display: 'flex', flexDirection: 'row',paddingRight:"10px",marginTop:'30px', marginBottom:'30px'}}>
      <Dropdown style={{ paddingLeft: '20px', display:"inline"}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'transparent', color: darkMode ? 'white' : 'black' }}>
        {selectedTech === "all" ? "기술스택" : selectedTech}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: 'white' }}>
        <Dropdown.Item onClick={() => handleTechClick("all")}>전체</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTechClick("react")}>React</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTechClick("javascript")}>Javascript</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTechClick("css")}>Css</Dropdown.Item>
          <Dropdown.Item onClick={() => handleTechClick("instagram")}>Instagram</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown style={{ paddingLeft: '20px', display:"inline"}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'transparent', color: darkMode ? 'white' : 'black' }}>
          전체
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: 'white' }}>
          <Dropdown.Item onClick={() => onStatusFilterClick("all")}>전체</Dropdown.Item>
          <Dropdown.Item onClick={() => onStatusFilterClick("모집 중")}>모집 중</Dropdown.Item>
          <Dropdown.Item onClick={() => onStatusFilterClick("모집 완료")}>모집 완료</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form className="d-flex" style={{ marginLeft: 'auto' }}>
        <Form.Control
          type="search"
          placeholder="🔍︎ 제목을 검색해보세요"
          className="me-2"
          aria-label="Search"
          style={{ width: '300px' }}
          onChange={handleSearchChange}
        />
        <Button style={{ width: '60px', paddingLeft: '10px' }} variant="outline-success" onClick={handleSearch}>검색</Button>
      </Form>
      </div>
     </div>
  );
}

function GridExample() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const handleStatusFilterClick = (status) => {
    console.log('Clicked status filter:', status);
    setFilter(status);
  };

  const handleTechClick = (tech) => {
    // handle the tech click
    console.log('Clicked tech:', tech);
    setSelectedTech(tech);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCardClick = (card) => {
    // 해당 카드를 클릭했을 때의 동작을 정의합니다.
    console.log('Card clicked:', card);
    setSelectedCard(card);
    setModalIsOpen(true);
  };
/*
  const handleNavItemClick = (type, cardsData, setFilteredCards) => {
    console.log('Clicked type from Navbar:', type);
    // 타입에 따라 필터링하여 상위 컴포넌트로 전달
    setFilteredCards((cards) => {
      const newFilteredCards = cardsData.filter((card) => card.type === type);
      return newFilteredCards;
    });
  };
*/
  useEffect(() => {

    const newFilteredCards = cardsData.filter((card) => {
      if (filter === 'all') return true;
      else return card.status.includes(filter);
    });

// 선택된 기술 스택에 해당하는 카드만 필터링
const filteredCardsByTech = selectedTech
    ? newFilteredCards.filter((card) => card.tech.includes(selectedTech))
    : newFilteredCards;

   // 검색어(searchTerm)에 따라 필터링
  const filteredCardsBySearch = newFilteredCards.filter((card) => {
    return card.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // 새로 필터링된 카드를 상위 컴포넌트로 전달
  setFilteredCards(filteredCardsBySearch);
  }, [filter,searchTerm, selectedTech, cardsData]);

  useEffect(()=>{
    setCardsData([
        {
            type:"프로젝트",
            title: "대동빵지도! (콘텐츠디자이너 모집)",
            mainImage:"image1.png",
            images: ["/instagram.png", "/react.png", "/css.png"],
            tech:["instagram","react","css"],
            status: "모집 완료 4/9",
            description:"저희 대동빵지도! 프로젝트는 빵을 좋아하는 사람들이 모여 일명 빵지순례라고 하는 유명 빵집들을 탐방하며 콘텐츠를 디자인하는 프로젝트입니다.",
          },
          {
            type:"프로젝트",
            title: "소상공인을 위한 광고 플랫폼 (맛Q)",
            mainImage:"image.png",
            images: ["/instagram.png", "/react.png", "/css.png"],
            tech:["instagram","react","css"],
            status: "모집 중 6/12",
            description:"저희 맛Q 프로젝트는 소상공인들이 자체 마케팅 방법을 활용하여 더 많은 고객들과 소통하고 성장할 수 있는 기회를 제공하고자 지역 커뮤니티와 소통하고 상호 발전하는 플랫폼을 개발하고 있습니다."
          },
          {
              type:"스터디",
            title: "같이 웹 공부하실 분 찾습니다",
            mainImage:"image2.png",
            images: ["/react.png", "/css.png","/javascript.png"],
            tech:["javascript","react","css"],
            status: "모집 중 1/3",
            description:"프론트4 백엔드4으로 구성하여 각 포지션에 맞게 스터디 후 최종적으로 포지션별로 포폴용 프로젝트를 진행할 예정입니다! 스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등)"
          },
          {
              type:"스터디",
              title: "커뮤니티 웹 서비스 제작",
              mainImage:"image5.png",
              images: ["/react.png", "/css.png","/javascript.png"],
              tech:["javascript","react","css"],
              status: "모집 중 1/3",
              description:"저희는 ‘작가의 정원’이라는 작가들을 위한 웹 소설 커뮤니티 사이트를 제작하고 있는 팀입니다. 올해 23년 배포를 예정으로 현재 진행 중입니다."
            },
            {
              type:"스터디",
              title: "안드로이드 웹 영화 서비스 제작",
              mainImage:"image4.png",
              images: ["/react.png", "/css.png","/javascript.png"],
              tech:["javascript","react","css"],
              status: "모집 완료 1/3",
              description:"프로젝트를 통해 영화를 좋아하는 사람들이 좀 더 깊은 소통과 정보 공유를 나눌수 있는 서비스를 만들어 보고자 해요."
            },
            {
              type:"스터디",
              title: "리엑트(react)스터디 프로젝트",
              mainImage:"image7.png",
              images: ["/react.png", "/css.png","/javascript.png"],
              tech:["javascript","react","css"],
              status: "모집 중 1/3",
              description:"자율형 스터디 모집합니다! 모르는 게 있으면 자유롭게 질문할 수 있는 단톡방 분위기가 조성되었으면 좋겠습니다."
            },
            {
              type:"스터디",
              title: "⭐️동기부여용 스터디⭐️",
              mainImage:"image6.png",
              images: ["/react.png", "/css.png","/javascript.png"],
              tech:["javascript","react","css"],
              status: "모집 중 14/30",
              description:"안녕하세요. 저는 현재 프론트엔드 공부 중인 개발초보입니다. 혼자 공부하려니 루즈해지는 면이 있어서 서로서로 공부하는 것을 보면서 동기부여 하는 스터디 원들을 구합니다. (최대 30명)"
            },
            {
              type:"프로젝트",
              title: "[React]스터디 프로젝트 프론트엔드원 모집합니다",
              mainImage:"image8.png",
              images: ["/instagram.png","/react.png", "/javascript.png"],
              tech:["/instagram", "javascript","react"],
              status: "모집 중 6/8",
              description:"안녕하세요 스터디 목적으로 하는 프로젝트를 구성 중이고 진행 중에 있습니다. 프로젝트의 큰 주제는 여행,지도 등에 대한 것이고 웹 페이지(반응형) 타입으로 진행할 예정입니다."
            },
            {
              type:"스터디",
              title: "리액트어드민",
              mainImage:"image2.png",
              images: ["/react.png"],
              tech:["react"],
              status: "모집 중 0/5",
              description:"리액트어드민 공식문서 읽기 스터디 모집합니다. 함께 모여 각자 읽고 짧게 이야기 나누는 것입니다."
            },
            {
              type:"프로젝트",
              title: "리액트 프론트엔드 개발자분과 디자이너분을 모집합니다!!",
              mainImage:"image9.png",
              images: ["/react.png", "/css.png","/instagram.png"],
              tech:["instagram","react","css"],
              status: "모집 중 1/3",
              description:"안녕하세요. Team compóno는 전형적이고 따분한 형태를 띄는 일정관리 시스템에서 탈피해, 보다 조직적이고 생산적인 형태의 일정관리 서비스를 제안하고자 모인 팀입니다. 기존에는 없었던 전위적인 형태의 일정관리 서비스 제작을 위한 프론트엔드개발자/ 디자이너를 모집합니다."
            },
            {
              type:"프로젝트",
              title: "P2P 채권거래 플랫폼 개발 및 기획",
              mainImage:"image10.png",
              images: ["/react.png", "/javascript.png"],
              tech:["javascript","react"],
              status: "모집 완료 2/9",
              description:"개인의 현금흐름 및 유동성을 개선할 수 있는 플랫폼이 있으면 좋겠다고 생각되어 설문조사를 진행하였고 그 결과로 이 프로젝트를 개설하게 되었습니다. 간단히 말하면 개인간 생성된 채권을 만기가 도래하기 전에 제3자에게 양도하고 빠르게 현금화 할 수 있는 거래소 플랫폼입니다. "
            },
            {
              type:"프로젝트",
              title: "AI 스포츠 스타트업 팀원 모집(사이드 프로젝트, 풀타임)",
              mainImage:"image11.png",
              images: ["/react.png", "/css.png","/javascript.png"],
              tech:["javascript","react","css"],
              status: "모집 완료 1/6",
              description:"저희의 단기 목표는 ‘AI 알고리즘 고도화’와 ‘어플리케이션 개발’입니다. 현재 1차 알고리즘 프로토타입은 개발 중이며 세부사항을 디벨롭하는 과정에 있습니다! 24년 3월 초까지 앱 MVP 제작을 목표로 하고 있습니다."
            },
          ]);
  },[]);

  function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  return (
    <Container className="mx-auto">
      <BasicExample onStatusFilterClick={handleStatusFilterClick} cardsData={cardsData} setFilteredCards={setFilteredCards} />
      <Row xs={1} md={4} className="g-4 justify-content-center">
        {filteredCards.map((card, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <Card onClick={() => handleCardClick(card)} style={{ width: '20rem' }} >
              <Card.Header>
                <Stack direction="horizontal" gap={2}>
                  <Badge bg="light" text="dark">{card.type}</Badge>
                  <Badge bg="success">🔥인기글</Badge>
                </Stack>
                
              </Card.Header>
              <Card.Img src={card.mainImage} style={{ maxWidth: '100%', height:'120%' }} />         
              <Card.Body>
              <Card.Title style={{
                margin: '20px 0',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'normal'
                }}>
                {card.title}
                </Card.Title>
                {card.images.map((image, index) => (
                <img key={index} src={image} alt={`Small Image ${index + 1}`} width="50" height="50" className="me-1"/>
                ))}
              </Card.Body>
              <Card.Footer>{card.status}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <footer>
        <img src="/mainlogo.png" alt="Logo" width="100" style={{ marginRight: '5px' }} /><p></p>
        <p>Contact team.lookup.official@hansung.com</p>
        <p>Copyright LookUp. All rights reserved</p>
      </footer>
      {selectedCard && (
        <MyModal
          isOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}
          selectedCard={selectedCard}
        />
      )}
    </Container>
  );
}

export default GridExample;