const TodoInfo = ({ title, info, status }) => {
  return (
    <div className={`todo-info ${status}`}>
      <div className="status"></div>
      <div className="todo-text">
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default TodoInfo;