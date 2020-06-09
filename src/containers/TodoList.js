import React,{Fragment, useState} from   "react"

const TodoList = ({todos, deleteTodo}) => {
   



    return <Fragment>
        <div className="todo-list">
            {todos.map( (todo, index) =>(
                <form className="todo" key={index}>
                    <div className="todo-cat">
                        {todo.category}
                    </div>
                    <div className="todo-description">
                        {todo.description}
                    </div>
                    <div className="todo-close">
                        <button onClick={(e)=>{e.preventDefault();deleteTodo( index);}}>&times;</button>
                    </div>
                </form>
            ))}
            
                            
                    
        </div>

    </Fragment>;
}


export default TodoList;   