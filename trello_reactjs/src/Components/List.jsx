import React from 'react';
import Card from './Card';

const List = ({ list }) => {
  return (
    <div className="column">
      <div className="box">
        <h2 className="title is-4">{list.title}</h2>
        {list.cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default List;


// import React from "react";
// import Card from "./Card";
// const Lists = ({list}) => {
//     return (
//         <div className="column">
//             <h3 className="title is-4">{list.title}</h3>
//             {list.cards && list.cards.map(card =>(
//                 <Card 
//                 task = {card.task}
//                 descrip = {card.description}
//                 assigned = {card.person}
//                 start = {card.dateStarted}
//                 finish = {card.dateFinished} />
//             ))}
//         </div>
//     );
// };

// export default Lists;