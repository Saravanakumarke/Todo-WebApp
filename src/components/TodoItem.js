import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo, updateTodo,toggleTodo } from '../redux/actions';


function TodoItem({todo}) {

    const  [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    let dispatch = useDispatch();

    return (
        <div>
           <div className='row mx-2 align-items-center '>
                    <div className='col'>
                    {editable ? <input type="text" className='form-control' 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />  :<h5 className={todo.completed ? 'list-complete':'list-active'} onClick={() =>{
                        dispatch(toggleTodo(todo.id))}}>{todo.name}</h5>}
                    
                    </div>
                <button 
                className='btn btn-primary m-2'
                onClick={() =>
                {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name:name
                        }
                    ));
                    if(editable)
                    {
                        setName(todo.name);
                    }
                    setEditable(!editable);
                }}
                >{editable? "Save":"Edit"} </button>

                <button 
                onClick={() =>dispatch(deleteTodo(todo.id))}
                className='btn btn-warning m-2' 
                >Delete</button>
            </div>
        </div>
        
    )
}

export default TodoItem
