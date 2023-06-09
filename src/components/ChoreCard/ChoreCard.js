import React from 'react';

const ChoreCard = ({ choreData, handleUpdateChore }) => {
  const { id, name, completed } = choreData;

  return (
    <li className="list-group-item" key={id}>
      <input
        className="form-check-input me-1"
        type="checkbox"
        checked={completed}
        id={id}
        onChange={() => handleUpdateChore(id)}
      />
      <label
        className="form-check-label stretched-link"
        htmlFor={id}
      >
        {name}
      </label>
    </li>
  );
}

export default ChoreCard;