import React, { useState } from 'react';

const Filter = (props) => {
  const [filter, setFilter] = useState('all');
  const handleFilterChange = (e) => {
    props.filterTodos(e.target.value);
    setFilter(e.target.value);
  }
  const handleClearClick = () => {
    props.clearTodos();
  }
  return (
    <div className="filter">
      <div className="filtering-options">
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All Task</option>
          <option value="done">Done Task</option>
          <option value="pending">Pending Task</option>
        </select>
      </div>
      <button onClick={handleClearClick}>Clear All</button>
    </div>
  );
}

export default Filter;