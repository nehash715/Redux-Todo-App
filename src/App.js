
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction,EditTodoAction } from './actions/TodoActions';

function App() {
const [todo,setTodo]=useState()
const [editt,setEdit]=useState('-1')

const dispatch=useDispatch();

const Todo=useSelector((state)=>state.Todo);

const {todos}=Todo;


const handleSubmit=(e)=>{
  e.preventDefault();
console.log(editt)

 editt!=='-1'?   dispatch(EditTodoAction(todos[editt],todo)) : dispatch(AddTodoAction(todo))
  setTodo("")
  setEdit('-1')
}

const removeHandler=(t)=>{
  dispatch(RemoveTodoAction(t))
}

const edit=(t)=>{
 let index=todos.findIndex((p)=>p.id==t.id)
  setEdit(index)
  setTodo(t.todo)
  //console.log(editt)

  //dispatch(EditTodoAction(t,todo))
}

  return (
    <div className="App">
      <header className="App-header">
       <h2>Todo List App Using Redux</h2>
       <form onSubmit={handleSubmit} >
        <input placeholder='Enter A Todo'
        value={todo}
        style={{
          width:350,
          padding:10,
          borderRadius:20,
          border:"none",
          fontSize:20
        }}

        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit'
        style={{
          padding:12,
          borderRadius:25,
          fontSize:15,
          marginLeft:20
        }}
        >Go</button>
       </form>

       <ul className='allTodos'>
        {
          todos && todos.map((t)=>{
           return <li key={t.id} className='singleTodo'>
            <span className='todoText'>{t.todo}</span>
            <button
            style={{
              borderRadius:25,
              padding:10,
              border:"1px solid white",
              color:"white",
              backgroundColor:"orangered"
            }}
            onClick={()=>removeHandler(t)}
            >Delete</button>


              <button
            style={{
              borderRadius:25,
              padding:10,
              border:"1px solid white",
              color:"white",
              backgroundColor:"grey"
            }}
            onClick={()=>edit(t)}
            >Edit</button>
          </li>
          })
        }
       
       </ul>
      </header>
    </div>
  );
}

export default App;
