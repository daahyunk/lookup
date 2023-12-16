import React from 'react';
import Modal from 'react-modal';

function TimetableModal({
  isOpen,
  onRequestClose,
  onAddEvent,
  event,
  setEvent,
  setSelectedDay,
  setStartHour,
  setEndHour,
  days,
  hours,
}) 
{
  return (
    <Modal
      className="modal-wrapper"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <span className="close" onClick={onRequestClose}>&times;</span>
      <h4 className="modal-title">일정 추가</h4>
      <div className="modal-content">
        <h6>제목</h6>
        <input className="modal-content-input"
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="일정 입력"
        />
        <h6>요일</h6>
        <select className='modal-content-select'
          onChange={(e) => setSelectedDay(Number(e.target.value))}
          defaultValue={-1}
        >
          <option value={-1} disabled >요일 선택</option>
          {days.map((day, index) => (
            <option key={index} value={index}>
              {day}
            </option>
          ))}
        </select><p></p>
        <div className="time-input-row">
        <h6>시간</h6>
          <select className='modal-content-select'
            onChange={(e) => setStartHour(Number(e.target.value))}
            defaultValue={0}
          >
            <option value={0} disabled>시작</option>
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}시
              </option>
            ))}
          </select>
          ~
          <select className='modal-content-select'
            onChange={(e) => setEndHour(Number(e.target.value))}
            defaultValue={0}
          >
            <option value={0} disabled>종료</option>
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}시
              </option>
            ))}
          </select>
        </div><p></p>
        <div className="modal-content-button">
          <button onClick={onAddEvent}>일정 추가</button>
        </div>
      </div>
    </Modal>
  );
}

export default TimetableModal;
