import React, { useState } from 'react';

const Modal = ({ closeModal, addTask, lists }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedPerson, setAssignedPerson] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedList, setSelectedList] = useState(lists[0].id);

  const handleSubmit = () => {
    if (taskTitle.trim()) {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        person: assignedPerson,
        startDate: startDate,
        endDate: endDate,
      };
      addTask(newTask, selectedList);
      resetFields();
      closeModal();
    }
  };

  const resetFields = () => {
    setTaskTitle('');
    setTaskDescription('');
    setAssignedPerson('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Agregar Nueva Tarea</p>
          <button className="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Título de la Tarea</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Título de la tarea"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Descripción</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Descripción de la tarea"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Asignar a</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Nombre de la persona"
                value={assignedPerson}
                onChange={(e) => setAssignedPerson(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Fecha de Inicio</label>
            <div className="control">
              <input
                className="input"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Fecha de Fin</label>
            <div className="control">
              <input
                className="input"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Columna</label>
            <div className="control">
              <div className="select">
                <select value={selectedList} onChange={(e) => setSelectedList(parseInt(e.target.value))}>
                  {lists.map(list => (
                    <option key={list.id} value={list.id}>
                      {list.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSubmit}>Agregar</button>
          <button className="button" onClick={closeModal}>Cancelar</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;





// import React, { useState } from "react";

// const Modal = ({closeModal, addTask, lists}) => {

//     const [task, setTask] = useState('');
//     const [descrip, setDescription] = useState('');
//     const [assigned, setPerson] = useState('');
//     const [dateStart, setDateStart] = useState('');
//     const [dateFinish, setDateFinish] = useState ('');
//     const [newTask, setNewTask] = useState(''); // Variable para estado de nueva tarea
//     const  [selectedList, setSelectedList] = useState(lists.id); //Variable para estado de lista seleccionada

//     const submit = () => {
//         if(task.trim()){
//             const newTask = {
//                 title: task,
//                 description: descrip,
//                 person: assigned,
//                 dateStarted: dateStart,
//                 dateFinished: dateFinish,
//             }
//             addTask(newTask, selectedList);
//             resetFields();
//             closeModal();
//         }
//     };

//     const resetFields = () => {
//         setTask('');
//         setDescription('');
//         setPerson('');
//         setDateStart('');
//         setDateFinish('');
//     }

//     return (
//         <div className="modal is-active">
//             <div className="modal-background"></div>
//             <div className="modal-card">
//                 <header class="modal-card-head">
//                     <p class="modal-card-title">Agregar Nueva Tarea</p>
//                     <button class="delete" aria-label="close"></button>
//                 </header>
//                 <section class="modal-card-body">
//                 <div className="field">
//                     <label className="label">Tarea</label>
//                     <div className="control">
//                     <input
//                         className="input"
//                         type="text"
//                         placeholder="Titulo de la tarea"
//                         value={task}
//                         onChange={(e) => setTask(e.target.value)}
//                     />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label className="label">Descripcion</label>
//                     <div className="control">
//                     <input
//                         className="input"
//                         type="text"
//                         placeholder="Titulo de la tarea"
//                         value={descrip}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                     </div>
//                 </div>
                    
//                 <div className="field">
//                     <label className="label">Asignar a: </label>
//                     <div className="control">
//                     <input
//                         className="input"
//                         type="text"
//                         placeholder="Asigne Persona"
//                         value={assigned}
//                         onChange={(e) => setPerson(e.target.value)}
//                     />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label className="label">Fecha de Inicio: </label>
//                     <div className="control">
//                     <input
//                         className="input"
//                         type="date"
//                         placeholder="Fecha de inicio"
//                         value={dateStart}
//                         onChange={(e) => setDateStart(e.target.value)}
//                     />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label className="label">Fecha de Fin: </label>
//                     <div className="control">
//                     <input
//                         className="input"
//                         type="date"
//                         placeholder="Fecha de Fin"
//                         value={dateFinish}
//                         onChange={(e) => setDateFinish(e.target.value)}
//                     />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label className="label">Columna</label>
//                     <div className="control">
//                         <div className="select">
//                             <select value={selectedList} onChange={(e) => setSelectedList(parseInt(e.target.value))}>
//                                 {lists.map(list => (
//                                     <option key={list.id} value={list.id}>
//                                         {list.title}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//         </section>
//         <footer className="modal-card-foot">
//           <button className="button is-success" onClick={handleSubmit}>Agregar</button>
//           <button className="button" onClick={closeModal}>Cancelar</button>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Modal;
                