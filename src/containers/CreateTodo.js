import React,{Fragment, useState} from   "react"

const CreateTodo = ({addTodo}) => {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");




    return <Fragment>
        <div className="create-todo">
            <form className="t-form">
            <div className="todo-cat">
                <input className="t-input" type="text"  value={category} placeholder="Categoria" onChange={(e)=>setCategory(e.target.value)}/>
            </div>
            <div className="todo-description">
                <input className="t-input" type="text" value={description} placeholder="Descrição curta" onChange={(e)=>setDescription(e.target.value)} />                               
            </div>
                            <button className="t-btn" onClick={(e)=>{addTodo(e,category, description); }}>Add</button>
                            
                        </form>
                    </div>

    </Fragment>;
}


export default CreateTodo;   