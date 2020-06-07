import React,{Fragment, useState, useEffect} from   "react"

import Clock from "./Clock";
import CreateTodo from "./CreateTodo"
import TodoList from "./TodoList";

const Home = () =>  {
    const [todos, setTodos]= useState([{id:1, category: "nova", description: "tarefa 1"}, {id:2, category: "nova", description: "tarefa 4"}, {id:3, category: "nova", description: "tarefa 3"}]);
    const [dones, setDones] = useState([{id:1, category: "velha", description: "tarefa 0"}]);
    const [kserial, setKserial] = useState(4)
    
    const addTodo = (e, category, description) => {
        e.preventDefault();
        const newTodos = [...todos, {id: kserial, category: category, description: description }];
        setKserial(kserial+1);
        setTodos(newTodos);
        console.log("adicionado", description);

    }

    const deleteTodo = ( id) => {
        
        const newTodos = todos.filter(todo => todo.id!==id);
        setTodos(newTodos);

    }

    const deleteDone = ( id) => {
        
        const newDones =dones.filter(done => done.id!==id);
        setDones(newDones);

    }
    const taskDone = ( todo) =>{

        const newDones = [...dones, todo];
        setDones(newDones);
    }
  
    return <Fragment>
        <div className="container">
            <header>
                <div>cerulean-pomodoro</div>
                <nav >
              
                </nav>
            </header>
            
            <div className="main">
                <Clock todo={todos[0]} sesssionValue={10} longValue={15} shortValue={5} delayValue={4} autoStartBreak={true} autoStartPomodoro={false} taskDone={taskDone} deleteTodo={deleteTodo}/>

                <div className="pomodoro-todo">
                    <h4>Tarefas</h4>
                    <CreateTodo addTodo={addTodo} />
                    <TodoList todos={todos}  deleteTodo={deleteTodo}/>
                    <h5>Tarefas Feitas</h5>
                    <TodoList todos={dones}  deleteTodo={deleteDone} />

                </div>

                <div className="about" id="about">
                    <h2>About 2</h2>
                </div>

            </div>
        </div>
    </Fragment>;
    
  }
  
 

export default Home;