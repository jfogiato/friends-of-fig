import React, { useState } from 'react';
import getChores from '../../utilities/api-calls';
import ChoreCard from '../ChoreCard/ChoreCard';

const Chores = () => {
  const [chores, setChores] = useState([]);
  const [loading, setLoading] = useState(true);

  getChores()
    .then(data => {
      setChores(data.data);
      setLoading(false);
    })
    .catch(error => console.log(error));

  const choreList = chores.map(chore => {
    return ( <ChoreCard choreData={chore} key={chore.id} /> );
  });

  // const choresByDay = chores.reduce((acc, chore) => {
  //   if (!acc[chore.date]) {
  //     acc[chore.date] = [chore];
  //   } else {
  //     acc[chore.date].push(chore);
  //   }
  //   return acc;
  // }, {});

  console.log(choresByDay)

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