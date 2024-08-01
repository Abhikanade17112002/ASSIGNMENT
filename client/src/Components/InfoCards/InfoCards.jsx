import React from 'react';
import './InfoCards.styles.css';
import Imports from '../../../imports';

const InfoCards = () => {
  const {FaUserGraduate,FaChalkboardTeacher,FaHandHoldingUsd,FaSchool} = Imports ;
  const data = [
    { icon: <FaUserGraduate />, count: 204, label: 'Products' },
    { icon: <FaChalkboardTeacher />, count: 53, label: 'Viewers' },
    { icon: <FaSchool />, count: 5, label: 'Inventory' },
    { icon: <FaHandHoldingUsd />, count: 350000, label: 'Income' },
  ];

  return (
    <div className="info-cards-container">
      {data.map((item, index) => (
        <div key={index} className="info-card">
          <div className="icon">{item.icon}</div>
          <div className="count">{item.count}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
