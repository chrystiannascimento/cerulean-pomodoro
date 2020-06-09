import React,{Fragment, useState, useEffect} from   "react"

import Clock from "./Clock";
import CreateTodo from "./CreateTodo"
import TodoList from "./TodoList";
import useCookie from "@use-hook/use-cookie";

import Settings from './Settings';


const Home = () =>  {
    const [currentTask, setCurrentTask] = useState({category:"", description: "no description"});
    const [autoBreak, setAutoBreak]=useState(true);
    

    //Cookies
    const [name, setName] = useCookie("name", "Stefan");
    const [todoCookie, setTodoCookie] = useCookie("todoCookie", JSON.stringify([]));
    const [doneCookie, setDoneCookie] = useCookie("doneCookie", JSON.stringify([]));

    //Settings
    const [settings, setSettings]=useState({pomoDur: 50, shortDur: 10, longDur: 20, breakDelay: 2, autoStartPomodoro: true, autoStartBreak: false  });
    const [pomoDur, setPomoDur]=useCookie("pomoDur",50);
    const [shortDur, setShortDur]=useCookie("shortDur", 10);
    const [longDur, setLongDur]=useCookie("longDur",20);
    const [breakDelay, setBreakDelay] =useCookie("breakDelay",2);
    const [autoStartPomodoro, setAutoStartPomodoro] = useCookie("autoStartPomodoro", true)
    const [autoStartBreak, setAutoStartBreak] = useCookie("autoStartBreak", false)

    const [todos, setTodos]= useState([]);
    const [dones, setDones] = useState([]);


   const updateTodos = (newTodos) =>{
    setTodos(newTodos);
    setTodoCookie(JSON.stringify(newTodos));

   }

   const updateDones = (newDones) =>{
    setDones(newDones);
    setDoneCookie(JSON.stringify(newDones));

   }
    const addTodo = (e, category, description) => {
        e.preventDefault();
        const newTodos = [...todos, {category: category, description: description }];
        updateTodos(newTodos);
        console.log("pomodur", pomoDur);
    }

    const submitSettings = (e, settings) =>{
        e.preventDefault();
        setPomoDur(settings["pomoDur"]);
        setShortDur(settings["shortDur"]);
        setLongDur(settings["longDur"]);
        setBreakDelay(settings["breakDelay"]);
        setAutoStartPomodoro(settings["autoStartPomodoro"]);
        setAutoStartBreak(settings["autoStartBreak"]);
        alert("Settings-Changes saved")

    }

    const deleteTodo = ( id) => {
        
        const newTodos = todos.filter((todo, index) => index!==id);
        updateCurrentTask(newTodos[0])
        updateTodos(newTodos);

    }

    const deleteDone = ( id) => {
        
        const newDones =dones.filter((done,index) => index !==id);
        updateDones(newDones);

    }
    const taskDone = ( ) =>{


        const newDones = [...dones, currentTask];
        updateDones(newDones);
        deleteTodo(0);
        updateCurrentTask(todos[0]);
    }
    const updateList = () =>{
        const newTodos=JSON.parse(todoCookie);
        setTodos(newTodos);
        const newDones=JSON.parse(doneCookie);
        setDones(newDones);
        updateCurrentTask(newTodos[0]);
        
    }
    const updateCurrentTask =(todo) =>{
        setCurrentTask(todo===undefined?{category:"", description: "no description"}:todo);
    } 

    useEffect(() => {
        updateList();
       },[]);
  
    return <Fragment>
        <div className="container">
            <header>
                <div>cerulean-pomodoro</div>
                <nav >
              
                </nav>
            </header>
            
            <div className="main">



                  
                <Clock currentTask={currentTask } sesssionValue={pomoDur} longValue={longDur} shortValue={shortDur} delayValue={breakDelay} autoStartBreak={autoStartBreak} autoStartPomodoro={autoStartPomodoro} taskDone={taskDone} deleteTodo={deleteTodo}>
                    {currentTask.description}
                </Clock>

                <div className="pomodoro-todo">
                    <h4>Tarefas</h4>
                    <CreateTodo addTodo={addTodo} />
                    <TodoList todos={todos}  deleteTodo={deleteTodo}/>
                    <h5>Tarefas Feitas</h5>
                    <TodoList todos={dones}  deleteTodo={deleteDone} />

                </div>
                {console.log("current22", currentTask)}

                <div className="about" id="about">
                    <h2>About 2</h2>
                </div>
                <div>
                    <Settings submitSettings={submitSettings}/>
                </div>

                
            </div>
        </div>
    </Fragment>;
    
  }
  
 

export default Home;