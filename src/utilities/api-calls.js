import chores from '../data/chores-data';

const getChores = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return chores;
}

const updateChore = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  chores.data = chores.data.map(chore => {
    if (chore.id === id) {
      return {
        ...chore,
        completed: !chore.completed,
      };
    }
    return chore;
  });
  return chores;
}

export { getChores, updateChore };