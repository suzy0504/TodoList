import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Todo(props) {

  return (
    <div>
      <div className='todoCard' >
        <p2>{props.todo.name}</p2>
        <p>{props.todo.list}</p>
        <div>
          <button className='deleteBtn' onClick={() => props.handleDelete(props.todo.name)}>
            삭제하기</button>

            {props.todo.completed ? (
              <button className='noCompleteBtn' onClick={() => props.handleUnComplete(props.todo.name)}>취소</button>
            ) : (
          <button className='completeBtn' onClick={() => props.handleComplete(props.todo.name)}>
            완료</button>
            )}
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const [todo, setTodos] = useState([
  ]);

  const [name, setName] = useState('');
  const [list, setList] = useState('');

  const addTodoHandler = () => {
    const newTodo = {
      name: name,
      list: list,
      completed: false
    };
    setTodos([...todo, newTodo]);
  };

  const handleDelete = (name) => {
    setTodos(todo.filter(todo => todo.name !== name));
  };

  const handleComplete = (name) => {
    const updateTodo = todo.map(todo =>
      todo.name === name ? { ...todo, completed: true } : todo
    )
    setTodos(updateTodo);
  }

  const handleUnComplete = (name) => {
    const updateTodo = todo.map(todo =>
      todo.name === name ? { ...todo, completed: false } : todo
    )
    setTodos(updateTodo);
  }

  const workingTodo = todo.filter(todo => !todo.completed);
  const doneTodo = todo.filter(todo => todo.completed);

  return (
    <>
      <div className='layout'>
        <div className='heder'>
          <p>My Todo List</p>
          <p>React</p>
        </div>
        <div className='addBox'>
          제 목 <input value={name}
            onChange={(e) => setName(e.target.value)} />
          내 용 <input value={list}
            onChange={(e) => setList(e.target.value)} />

          <button className='addBtn'
            onClick={addTodoHandler}>추가하기</button>
        </div>


        <div>
          <p1>Working..</p1>
          <div className='todoCards'>
            {workingTodo.map(todo =>
              <Todo
                todo={todo}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
              />
            )}
          </div>
          <p1>Done..</p1>
          <div className='todoCards'>
          {doneTodo.map(todo =>
              <Todo
                todo={todo}
                handleDelete={handleDelete}
                handleUnComplete={handleUnComplete}
              />
            )}  
            </div>        
        </div>
      </div>
    </>
  )
}

export default App
