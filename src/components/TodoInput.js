import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import {v1 as uuid } from 'uuid'
import {useDispatch} from 'react-redux';


function TodoInput() {

let [name,setName] = useState();
 const dispatch = useDispatch();
 let input
    return (
        <div>
            <h4 className="todo-heading">ADD ITEM</h4>
            <hr className="todo-hr"/>
        <div className="container">
           
           <div className='row m-2'>
               
               <input type="text"
                 onChange={(e) => {setName(e.target.value)
                    
                }}
                 value={name}
                 
                 className=' col form-control' />
               <button 
               onClick={() =>
                {
                    dispatch(addTodo(
                   {
                       id: uuid(),
                       name:name,
                       completed:false
                   }
               ));
              
            setName('');
            }}
               className='  btn btn-primary mx-2'>ADD</button>
           </div>
        </div>
        </div>
    )
}

export default TodoInput
