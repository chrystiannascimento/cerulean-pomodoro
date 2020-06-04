import React,{Fragment, useState, useEffect} from   "react"




const Home = () =>  {
    const [themes, setThemes]= useState([]);
    const [newTheme, setNewTheme] = useState("");
    

  
    return <Fragment>
        <div className="container">
            <header>
                <div>cerulean-pomodoro</div>
                <nav >
                <a href="#">Stats</a>
                <a href="#">Settings</a>
                </nav>
            </header>
            
            <div className="main">
                <div className="clock">
                    <div className="c-head">
                        <div>Settings</div>
                        <div>POMODORO #1</div>
                    </div>
                    <div className="c-time">
                        25 : 00
                    </div>
                    <div className="c-description">
                        tarefa
                    </div>
                    <div className="c-buttons">
                        <button className="c-btn c-btn--red">Iniciar</button>
                        <button className="c-btn c-btn--red">Parar</button>
                    </div>


                </div>
                <div className="pomodoro-todo">
                    <h4>Tarefas</h4>
                    <div className="create-todo">
                        <form className="t-form">
                            <div className="todo-cat">
                                <input className="t-input" type="text" />
                            </div>
                            <div className="todo-description">
                                <input className="t-input" type="text"></input>
                               
                            </div>
                            <button className="t-btn">Add</button>
                            
                        </form>
                    </div>
                    <div className="todo-list">
                        <div >
                        <form className="todo">
                            <div className="todo-cat">
                                categoria
                            </div>
                            <div className="todo-description">
                                descrição
                            </div>
                            <button>+</button>
                        </form>
                        </div>

                        <div className="todo">
                            Tarefas
                        </div>

                    </div>

                </div>

                <div className="about" id="about">
                    <h2>About 2</h2>
                </div>

            </div>
        </div>
    </Fragment>;
    
  }
  
 

export default Home;