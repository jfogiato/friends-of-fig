import React, { useState, useEffect } from 'react';
import { getChores, updateChore } from '../../utilities/api-calls';
import ChoreCard from '../ChoreCard/ChoreCard';

const Chores = () => {
  const [chores, setChores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChores()
      .then(data => {
        setChores(data.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const convertDate = date => {
    return new Date(date).toString().split(' ').slice(0, 4).join(' ');
  }

  const handleUpdateChore = id => {
    updateChore(id)
      .then(data => {
        setChores(data.data)
      })
      .catch(error => console.log(error));
  };

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
        <h3 className='text-center'>{convertDate(date)}</h3>
        {
          choresByDay[date].map(chore => {
            return (
              <ChoreCard
                choreData={chore}
                handleUpdateChore={handleUpdateChore}
                key={chore.id}
              />
            );
          })
        }
      </>
    );
  });


  return (
    <section><br/>
      <h1> Chores </h1><br/>
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