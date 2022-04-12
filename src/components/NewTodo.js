import React, { useState } from 'react';

const NewTodo = (props) => {
  const [todo, setTodo] = useState({
    topic: '',
    info: ''
  });
  const { topic, info } = todo;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === 'topic') {
      setTodo({ topic: e.target.value, info });
    }
    if (fieldName === 'info') {
      setTodo({ topic, info: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.newTodoData(topic, info);
    setTodo({ topic: '', info: '' });
  }

  return (
    <div className="create-todo">
      <h2><i className="fa-solid fa-pen-to-square"></i> Make New Task</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Your task topic"
          name="topic"
          value={topic}
          onChange={handleChange}
          required />
        <textarea
          placeholder="More info about your task"
          name="info"
          value={info}
          onChange={handleChange}
          required></textarea>
        <button type="submit">Create New Task</button>
      </form>
    </div>
  );
}

export default NewTodo;