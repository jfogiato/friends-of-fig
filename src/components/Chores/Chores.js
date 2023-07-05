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

  const choresByDay = chores.reduce((acc, chore) => {
    if (!acc[chore.date]) {
      acc[chore.date] = [chore];
    } else {
      acc[chore.date].push(chore);
    }
    return acc;
  }, {});

  const choreSections = Object.keys(choresByDay).map(date => {
    return (
      <>
        <h3>{date}</h3>
        {
          choresByDay[date].map(chore => {
            return <ChoreCard choreData={chore} key={chore.id} />;
          })
        }
      </>
    );
  });


  return (
    <section>
      <h1> Chores </h1>
      {loading 
        ? <p> Loading... </p>
        : <ul className="list-group">
            {choreSections}
          </ul>
      }
    </section>
  );
}

export default Chores