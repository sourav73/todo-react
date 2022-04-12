import { useState } from "react";
import TodoInfo from "./TodoInfo";

const Todo = (props) => {
  const { title, info, todoStatus, id } = props;
  const [status, setStatus] = useState(todoStatus);
  // const [isClicked, setIsClicked] = useState(todoStatus === 'done' ? true : false);
  const [isDone, setIsDone] = useState(todoStatus === 'done' ? true : false);

  const handleDoneToggle = () => {
    // setIsClicked(!isClicked);
    if (isDone) {
      setStatus('pending');
      setIsDone(false);
    } else {
      setStatus('done');
      setIsDone(true);
    }

    props.getDoneClick(id, todoStatus);
  }

  const handleDelete = () => {
    props.getDeleteIndex(id);
  }

  return (
    <div className="todo">
      <div className="action">
        <i className={`fa-solid ${isDone ? "fa-stop-circle pending" : "fa-check done"}`}
          title={`Mark as ${isDone ? "pending" : "done"}`} onClick={handleDoneToggle}></i>
        {/* <i className="fa-solid fa-file-pen edit"></i> */}
        <i className="fa-solid fa-trash delete" id="delete" title="Delete" onClick={handleDelete}></i>
      </div>
      <TodoInfo title={title} info={info} status={status} />

    </div>
  );
}

export default Todo;