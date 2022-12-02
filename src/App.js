import "./App.css";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import Task from "./components/Task";
import initialTodos from "./data/todos";
import React, { useReducer , memo} from "react";

// Todos Reducer
const todoReducer = (tasks, action) => {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.payload.id,
        title: action.payload.title,
        status: 'open'
      }];
    }
    case 'update': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => {
        return t.id !== action.id
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


function App() {
  const [openTodos, dispatch] = useReducer(todoReducer, initialTodos)
  
  // get open todos
// const openTodos = state.filter((el)=>el.status === 'open');
// const inProgressTodos = state.filter((el)=>el.status === 'inProgress');
// const completedTodos = state.filter((el)=>el.status === 'completed');

console.log("From App", openTodos)
  return (
    <div className="App min-h-screen p-2 bg-gray-100 lg:p-5 space-y-8">
      <Header/>
      <div className="grid lg:grid-cols-3 gap-8">
        <TasksList status={'open'}>
        {
          openTodos && openTodos.length > 0 && openTodos.map((todo, i)=>(
          <Task key={`${i}`} status title={todo.title} dispatch={dispatch}/>
          ))
        }
        </TasksList>
        {/* <TasksList status={'inProgress'}>
        {
          inProgressTodos && inProgressTodos.length > 0 && inProgressTodos.map((todo, i)=>(
          <Task key={`${i}`} title={todo.title}/>
          ))
        }
        </TasksList>
        <TasksList status={'completed'}>
        {
          completedTodos && completedTodos.length > 0 && completedTodos.map((todo, i)=>(
          <Task key={`${i}`} title={todo.title}/>
          ))
        }
        </TasksList> */}
      </div>
    </div>
  );
}

export default memo(App);
