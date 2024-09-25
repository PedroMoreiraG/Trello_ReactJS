import React, { useState } from 'react';
import List from './List';
import Modal from './Modal';

const initialLists = [
  { id: 1, title: 'Backlog', cards: [] },
  { id: 2, title: 'In Progress', cards: [] },
  { id: 3, title: 'Completed', cards: [] },
  { id: 4, title: 'Done', cards: [] },
  { id: 5, title: 'Blocked', cards: [] }
];

const Board = () => {
  const [lists, setLists] = useState(initialLists);
  const [isModalOpen, setModalOpen] = useState(false);

  const addTask = (newTask, columnId) => {
    const updatedLists = lists.map(list => {
      if (list.id === columnId) {
        return {
          ...list,
          cards: [...(list.cards || []), { id: Math.random(), ...newTask }]  // Añade la tarea completa
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <div className="board">
      <button className="button is-primary mb-4" onClick={() => setModalOpen(true)}>
        Nueva Tarea
      </button>
      <div className="columns">
        {lists.map(list => (
          <List key={list.id} list={list} />
        ))}
      </div>
      {isModalOpen && <Modal closeModal={() => setModalOpen(false)} addTask={addTask} lists={lists} />}
    </div>
  );
};

export default Board;


// import React, { useState } from "react";
// import Lists from "./List";
// import Modal from "./Modal";

// const Board = () => {
//        const [lists, setLists] = useState ([
//         {id: 1, title:"Backlog"},
//         {id: 2, title:"To Do"},
//         {id: 3, title:"In Progress"},
//         {id: 4, title:"Done"},
//         {id: 1, title:"Blocked"},
//        ]); 

//        const [modalOpen, setModal] = useState(false);

//        const addTask = (newTask, columnId) => {
//         const updatedLists = lists.map(list => {
//           if (list.id === columnId) {
//             return {
//               ...list,
//               cards: [...(list.cards || []), { id: lists.id + 1, ...newTask }]
//             };
//           }
//           return list;
//         });
//         setLists(updatedLists);
//       };


//   return (
//     <div className="board">
//       <button className="button is-info" onClick={() => setModalOpen(true)}>
//         Nueva Tarea
//       </button>
//       <div className="columns">
//         {lists.map(list => (
//           <List key={list.id} list={list} />
//         ))}
//       </div>
//       {isModalOpen && <Modal closeModal={() => setModalOpen(false)} addTask={addTask} lists={lists} />}
//     </div>
//   );
// };

// export default Board;
