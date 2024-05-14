import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Todo(props) {
  
  return (
    <div>
      <div className='todoCard' >
        <p>{props.todo.name}</p>
        <p>{props.todo.list}</p>
        <div>
          <button onClick={() => props.handleDelete(props.todo.name)}>
            삭제하기</button>
          <button>
            완료</button>
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
    };
    setTodos([...todo, newTodo]);
  };

  const handleDelete = (name) => {
    setTodos(todo.filter(todo => todo.name !== name));
  };


  return (
    <>
      <div className='layout'>
        <div className='heder'>
          <p>My Todo List</p>
          <p>React</p>
        </div>
        <div className='addBox'>
          제목 <input value={name}
            onChange={(e) => setName(e.target.value)} />
          내용 <input value={list}
            onChange={(e) => setList(e.target.value)} />

          <button className='addBtn'
            onClick={addTodoHandler}>추가하기</button>
        </div>


        <div>
          <p>Working..</p>
          <div className='todoCards'>
            {todo.map((todo) => {
              return <Todo todo={todo} handleDelete={handleDelete}/>
            })}
          </div>
          <p>Done..</p>
          <div></div>         
        </div>
      </div>
    </>
  )
}

export default App
