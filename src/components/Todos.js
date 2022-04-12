import { useEffect, useState } from "react";
import Filter from "./Filter";
import Todo from "./Todo";


const Todos = (props) => {
  // const todoList = [
  //   {
  //     title: 'Go market',
  //     info: 'Buy groceries',
  //     status: 'pending'
  //   },
  //   {
  //     title: 'Go market2',
  //     info: 'Buy groceries2',
  //     status: 'pending'
  //   },
  //   {
  //     title: 'Go market3',
  //     info: 'Buy groceries3',
  //     status: 'done'
  //   },
  //   {
  //     title: 'Go market4',
  //     info: 'Buy groceries4',
  //     status: 'pending'
  //   },
  // ];
  // const [filter, setFilter] = useState('all');
  // const { todoList } = props;
  const { todoList, setTodoList } = props;
  const [filteredTodos, setFilteredTodos] = useState(todoList);


  useEffect(() => {
    setFilteredTodos([...todoList]);
  }, [todoList]);

  const getDeleteIndex = (id) => {
    // setFilteredTodos(filteredTodos.filter(todo => todo.id !== id));
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  const clear = () => {
    setTodoList([]);
  }

  const getDoneClick = (id, todoStatus) => {
    const index = todoList.map(todo => todo.id).indexOf(id);
    if (todoStatus === 'done') {
      todoList[index].status = 'pending';
    } else if (todoStatus === 'pending') {
      todoList[index].status = 'done';
    }
  }

  const filter = (filterValue) => {
    if (filterValue === 'all') {
      setFilteredTodos([...todoList]);
    } else if (filterValue === 'done') {
      setFilteredTodos(todoList.filter(todo => todo.status === 'done'));
    } else if (filterValue === 'pending') {
      setFilteredTodos(todoList.filter(todo => todo.status === 'pending'));
    }
  }

  return (
    <div className="todos">
      <p><i className="fa-solid fa-note-sticky"></i> All Tasks</p>
      <Filter clearTodos={clear} filterTodos={filter} />
      <div className="todo-container">
        {/* {todoList.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} info={todo.info} todoStatus={todo.status}
          getDeleteIndex={getDeleteIndex} getDoneClick={getDoneClick} />)} */}
        {filteredTodos.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} info={todo.info} todoStatus={todo.status}
          getDeleteIndex={getDeleteIndex} getDoneClick={getDoneClick} />)}
      </div>
    </div>
  );
}

export default Todos;