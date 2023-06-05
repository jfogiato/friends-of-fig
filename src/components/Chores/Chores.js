import React, { useState, useEffect } from 'react';
import { getChores, updateChore } from '../../utilities/api-calls';

const Chores = () => {
  const [chores, setChores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChores()
      .then(data => {
        setChores(data.data);
        console.log('useEffect: ', data.data)
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const handleCheckbox = ({ target }) => {
    const id = target.id;
    updateChore(id)
      .then(data => {
        setChores(data.data)
      })
  }
  
  const choreListComplete = chores.map(chore => {
    const date = new Date(chore.date).toString().split(' ').slice(0, 4).join(' ');
    if (chore.completed) return (
      <li className="list-group-item" key={chore.id}>
        <input className="form-check-input me-1" type="checkbox" defaultChecked={chore.completed} onChange={handleCheckbox} id={chore.id}/>
        <label className="form-check-label stretched-link" htmlFor={chore.id}>{chore.name} - {date}</label>
      </li>
    );
  });

  const choreListToDo = chores.map(chore => {
    const date = new Date(chore.date).toString().split(' ').slice(0, 4).join(' ');
    if (!chore.completed) return (
      <li className="list-group-item" key={chore.id}>
        <input className="form-check-input me-1" type="checkbox" defaultChecked={chore.completed} onChange={handleCheckbox} id={chore.id}/>
        <label className="form-check-label stretched-link" htmlFor={chore.id}>{chore.name} - {date}</label>
      </li>
    );
  });

  return (
    <section>
      <h1 className='text-center'> Chores </h1>
      {loading 
        ? <p> Loading... </p>
        : <>
            <h2> Complete </h2>
            <ul className="list-group">
                {choreListComplete}
            </ul>
            <h2> To Do </h2>
            <ul className="list-group">
                {choreListToDo}
            </ul>
          </>
      }
    </section>
  );
}

export default Chores