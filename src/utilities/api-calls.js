import chores from '../data/chores-data';

const getChores = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return chores;
}

export default getChores;