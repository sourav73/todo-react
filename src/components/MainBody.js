import { useState } from "react";
import { v4 } from 'uuid';
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const MainBody = () => {
  // const [todoList, setTodoList] = useState([
  //   {
  //     title: 'Go market',
  //     info: 'Buy groceries',
  //     status: 'pending',
  //     id: 1
  //   },
  //   {
  //     title: 'Go market2',
  //     info: 'Buy groceries2',
  //     status: 'pending',
  //     id: 2
  //   },
  //   {
  //     title: 'Go market3',
  //     info: 'Buy groceries3',
  //     status: 'done',
  //     id: 3
  //   },
  //   {
  //     title: 'Go market4',
  //     info: 'Buy groceries4',
  //     status: 'pending',
  //     id: 4
  //   },
  // ]);


  const [todoList, setTodoList] = useState([]);


  const newTodoData = (title, info) => {
    setTodoList([...todoList, { title, info, status: 'pending', id: v4() }]);
  }


  return (
    <main className="content">
      <NewTodo newTodoData={newTodoData} />
      <Todos todoList={todoList} setTodoList={setTodoList} />
    </main>
  );
}

export default MainBody;