import React,{Fragment, useState} from   "react"

const TodoList = ({todos, deleteTodo}) => {
   



    return <Fragment>
        <div className="todo-list">
            {todos.map(todo =>(
                <form className="todo" key={todo.id}>
                    <div className="todo-cat">
                        {todo.category}
                    </div>
                    <div className="todo-description">
                        {todo.description}
                    </div>
                    <div className="todo-close">
                        <button onClick={(e)=>{e.preventDefault();deleteTodo( todo.id);}}>&times;</button>
                    </div>
                </form>
            ))}
            
                            
                    
        </div>

    </Fragment>;
}


export default TodoList;   