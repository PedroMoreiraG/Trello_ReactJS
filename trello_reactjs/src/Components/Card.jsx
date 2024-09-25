import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="box">
      <h3 className="title is-5">{card.title}</h3>
      <p><strong>Descripción:</strong> {card.description}</p>
      <p><strong>Asignado a:</strong> {card.person}</p>
      <p><strong>Inicio:</strong> {card.startDate}</p>
      <p><strong>Fin:</strong> {card.endDate}</p>
    </div>
  );
};

export default Card;
