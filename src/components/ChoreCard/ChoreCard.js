import React from 'react'

const ChoreCard = ({ choreData }) => {
  const { id, name, date, completed } = choreData;

  return (
    <li className="list-group-item" key={id}>
      <input className="form-check-input me-1" type="checkbox" value={completed} id={id}/>
      <label className="form-check-label stretched-link" htmlFor={id}>{name} - {date}</label>
    </li>
  );
}

export default ChoreCard;