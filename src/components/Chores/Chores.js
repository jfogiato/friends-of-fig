import React, { useState } from 'react';
import getChores from '../../utilities/api-calls';

const Chores = () => {
  const [chores, setChores] = useState([]);
  const [loading, setLoading] = useState(true);

  getChores()
    .then(data => {
      setChores(data.data)
      setLoading(false)
    })
    .catch(error => console.log(error));

  const choreList = chores.map(chore => {
    return (
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" id={chore.id}/>
        <label class="form-check-label stretched-link" for={chore.id}>{chore.name} - {chore.date}</label>
      </li>
    );
  });

  return (
    <section>
      <h1> Chores </h1>
      {loading 
        ? <p> Loading... </p>
        : <ul className="list-group">
            {choreList}
          </ul>
      }

    </section>
  );
}

export default Chores