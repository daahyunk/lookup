import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineEye, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaBookmark } from 'react-icons/fa';
import 'swiper/swiper-bundle.css';
import '../Main/Post.css';
import PostModal from './PostModal'; // 모달 컴포넌트 import
import { Badge } from 'react-bootstrap';

const iconStyles = {
    javascript: { color: '#f0db4f' },
    figma: { color: '#F5A9A9' },
    react: { color: '#61dafb' },
    kotlin: { color: '#0B3861' },
};


const cardsData = [
    {
      title: '대동빵지도! (콘텐츠 디자이너 모집)',
      icons: ["/instagram.png", "/react.png", "/css.png"],
      category: '프로젝트',
      best: '새 글',
      views: 100,
      images: ['/image1.png'],
      contents:'저희 "대동빵지도!" 프로젝트는 빵을 좋아하는 사람들이 모여 일명 빵지순례라고 하는 유명 빵집들을 탐방하여 콘텐츠를 디자인하는 프로젝트입니다.',
      isApplied: false,
    },
    {
      title: '소상공인을 위한 광고 플랫폼(맛Q)',
      icons: ["/instagram.png", "/react.png", "/css.png"],
      category: '프로젝트',
      best: '새 글',
      views: 200,
      images: ['/image.png'],
      contents:'저희 맛Q 프로젝트는 소상공인들이 자체 마케팅 방법을 활용하여 더 많은 고객들과 소통하고 성장할 수 있는 기회를 제공하고자 지역 커뮤니티와 소통하고 상호 발전하는 플랫폼을 개발하고 있습니다.',
      isApplied: false,
    },
    {
      title: '같이 웹 공부하실 분 찾습니다!',
      icons: ["/react.png", "/css.png","/javascript.png"],
      category: '스터디',
      best: '🔥인기글',
      views: 300,
      images: ['/image2.png'],
      contents:'프론트4 백엔드4으로 구성하여 각 포지션에 맞게 스터디 후 최종적으로 포지션별로 포폴용 프로젝트를 진행할 예정입니다! 스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등)',
      isApplied: false,
    },
    {
      title: '커뮤니티 웹 서비스 제작',
      icons:["/react.png", "/css.png","/javascript.png"],
      category: '프로젝트',
      best: '새 글',
      views: 400,
      images: ['/image3.png'],
      contents:'저희는 ‘작가의 정원’이라는 작가들을 위한 웹 소설 커뮤니티 사이트를 제작하고 있는 팀입니다. 올해 23년 배포를 예정으로 현재 진행 중입니다.',
      isApplied: false,
    },
    {
      title: '영화 관련 안드로이드 웹 서비스',
      icons: ["/react.png", "/css.png","/javascript.png"],
      category: '프로젝트',
      best: '새 글',
      views: 500,
      images: ['/image4.png'],
      contents:'프로젝트를 통해 영화를 좋아하는 사람들이 좀 더 깊은 소통과 정보 공유를 나눌수 있는 서비스를 만들어 보고자 해요.',
      isApplied: false,
    },
    {
      title: '리액트(react)스터디를 위한 프로젝트',
      icons:["/react.png", "/css.png","/javascript.png"],
      category: '스터디',
      best: '🔥인기글',
      views: 500,
      images: ['/image6.png'],
      contents:'자율형 스터디 모집합니다! 모르는 게 있으면 자유롭게 질문할 수 있는 단톡방 분위기가 조성되었으면 좋겠습니다.',
      isApplied: false,
    },
    {
      title: '앱런칭 안드로이드 개발자 추가 모집!',
      icons: ["/react.png", "/css.png","/javascript.png"],
      category: '프로젝트',
      best: '새 글',
      views: 200,
      images: ['/image5.png'],
      contents:'안녕하세요~! 현재 저희 팀은 앱 런칭을 위해 프로젝트를 진행하고 있습니다. 인원 충원을 위해 멤버를 추가로 모집하고 있어요.(서비스 배포 후 운영 예정)',
      isApplied: false,
    },
  ];
  

function Card({ title, icons, category, best, views, onClickCard}) {
  const [bookmark, setBookmarked] = useState(false);

  const checkBookmark = () => {
    setBookmarked(!bookmark);
  };
  
  const handleTitleClick = () => {
    onClickCard(title); // 클릭된 카드의 제목을 onClickCard 프롭으로 전달합니다
  };

  return (
    <div className="card" onClick={onClickCard}>
      <div className="category">
      <Badge bg="light" text="dark" className="category-text">{category}</Badge>
        <Badge bg="success">{best}</Badge>
      </div>
      <FaBookmark
        className="bookmark-icon"
        style={{ color: bookmark ? '#F7D358' : '#E6E6E6' }}
        onClick={checkBookmark}
      />
      <h2 className="title" onClick={handleTitleClick} >{title}</h2>
      <div className="icon-container">
      {icons.map((image, index) => (
    <img key={index} src={image} alt={`Small Image ${index + 1}`} width="50" height="50" className="me-1"/>
  ))}
  </div>
      <p className="views">
        <AiOutlineEye /> {views}
      </p>
    </div>
  );
}

function Post() {
  const [swiper, setSwiper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // 선택된 카드 정보 상태 추가
  const [appliedCardTitle, setAppliedCardTitle] = useState(null);

  const openModal = (title) => {
    const card = cardsData.find((c) => c.title === title); // 선택된 카드 정보 찾기
    setSelectedCard(card); // 선택된 카드 정보 설정
    setModalOpen(true);
  };

  const handleApplyClick = (title) => {
    setAppliedCardTitle(title);
  };
  
  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="post">
      <div className="swiper-button-prev" onClick={goPrev}>
        <AiOutlineLeft />
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        onSwiper={(s) => setSwiper(s)}
        loop={true}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              title={card.title}
              icons={card.icons}
              category={card.category}
              best={card.best}
              views={card.views}
              onClickCard={() => openModal(card.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next" onClick={goNext}>
        <AiOutlineRight />
      </div>

      {selectedCard && (
        <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedCard.title}
        category={selectedCard.category}
        icons={selectedCard.icons}
        images={selectedCard.images}
        contents={selectedCard.contents}
        isApplied={selectedCard.title === appliedCardTitle}
        handleApplyClick={handleApplyClick}
      />
      )}
    </div>
  );
}

export default Post;