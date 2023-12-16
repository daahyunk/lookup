import React, { useState } from 'react';
import styled from 'styled-components';
import TimetableModal from '../Timetable/TimetableModal';
import '../Timetable/Timetable.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const TimetableWrapper = styled.div`
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;
  margin-left: 11%; 
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 65px;
  margin-right: 15px; 
`;

const Username = styled.div`
  color: #4E4E4E;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-bottom: 10px;
`;


const WriteButton = styled.button`
  background-color: rgb(110, 172, 110);
  color: #fff;
  padding: 4px 7px;
  border: none;
  margin-right: 10px;
  border-radius: 5px;
  margin-bottom:10px;
`;

const DeleteButton = styled.button`
  background-color: #ede6e5;
  color: rgb(8, 7, 7);
  border: none;
  padding: 4px 7px;
  border-radius: 5px;
  margin-bottom:10px;
`;

const TimetableTable = styled.table`
  width: 80%;
  margin: 0 auto;
`;

const StyledTh = styled.th`
  border: 2px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const StyledTd = styled.td`
  border: 2px solid #ddd;
  padding: 10px;
  text-align: center;
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`;


function Timetable() {
  const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
  const hours = Array.from({ length: 18 }, (_, i) => i + 7);
  const colorlist = ['#F8E0E6', '#F5D0A9', '#F5F6CE', '#CEE3F6', '#D8CEF6'];

  const [colors, setColors] = useState(Array(7 * 18).fill(''));
  const [timetable, setTimetable] = useState(Array(7).fill(Array(18).fill('')));
  const [selectedDay, setSelectedDay] = useState(0);
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [event, setEvent] = useState('');
  const [modal, setModal] = useState(false);
  const [colorChange, setColorChange] = useState(0);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getNextColor = () => {
    const nextColor = colorlist[colorChange];
    setColorChange((colorChange + 1) % colorlist.length);
    return nextColor;
  };

  const addEvent = () => {
    const updateTimetable = [...timetable];
    const updateColors = [...colors];

    updateTimetable[selectedDay] = Array.from(updateTimetable[selectedDay]);

    for (let hour = startHour; hour <= endHour; hour++) {
      if (hour === startHour) {
        updateTimetable[selectedDay][hour] = event;
      }
      updateColors[selectedDay * 18 + hour] = getNextColor();
    }

    setTimetable(updateTimetable);
    setColors(updateColors);
    setEvent('');
    closeModal();
  };

  const deleteTable = () => {
    const updatedTimetable = Array(7).fill(Array(18).fill(''));
    const updatedColors = Array(7 * 18).fill('');
    setTimetable(updatedTimetable);
    setColors(updatedColors);
  };

  return (
    <TimetableWrapper>
      <ProfileContainer>
        <ProfileImage src="/profile.png" alt="Profile" />
        <Username>Hansung 님의 타임테이블</Username>
      </ProfileContainer>
      <ButtonContainer>
        <WriteButton onClick={openModal}>작성</WriteButton>
        <DeleteButton onClick={deleteTable}>초기화</DeleteButton>
      </ButtonContainer>
      <TimetableModal
        isOpen={modal}
        onRequestClose={closeModal}
        onAddEvent={addEvent}
        event={event}
        setEvent={setEvent}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        startHour={startHour}
        setStartHour={setStartHour}
        endHour={endHour}
        setEndHour={setEndHour}
        days={days}
        hours={hours}
      />
      <TimetableTable>
        <thead>
          <tr>
            <StyledTh></StyledTh>
            {days.map((day, index) => (
              <StyledTh key={index}>{day}</StyledTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, hourIndex) => (
            <tr key={hourIndex}>
              <StyledTh>{hour}시</StyledTh>
              {days.map((day, dayIndex) => (
                <StyledTd
                  key={dayIndex}
                  backgroundColor={colors[dayIndex * 18 + hour]}
                >
                  {timetable[dayIndex][hour]}
                </StyledTd>
              ))}
            </tr>
          ))}
        </tbody>
      </TimetableTable>
    </TimetableWrapper>
  );
}

export default Timetable;