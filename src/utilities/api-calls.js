import chores from '../data/chores-data';

const getChores = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return chores;
}

const updateChore = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  chores.data.map(chore => {
    if (chore.id === parseInt(id)) {
      chore.completed = !chore.completed;
    }
  });
  return chores;
}


export { getChores, updateChore };