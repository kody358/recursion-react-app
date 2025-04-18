import React from 'react';
import './Card.css';

const Card = ({ name, age, sex, profession }) => {
  return (
    <div className="card">
      <div className="card-item">
        <span className="label">Name:</span>
        <span className="value">{name}</span>
      </div>
      <div className="card-item">
        <span className="label">Age:</span>
        <span className="value">{age}</span>
      </div>
      <div className="card-item">
        <span className="label">Sex:</span>
        <span className="value">{sex}</span>
      </div>
      <div className="card-item">
        <span className="label">Profession:</span>
        <span className="value">{profession}</span>
      </div>
    </div>
  );
};

export default Card; 