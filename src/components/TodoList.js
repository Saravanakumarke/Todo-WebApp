import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux';

function TodoList() {

const todos = useSelector(state => state)

    return (
        <div className='my-4'>
            <h4 className="todo-heading">TODO LIST</h4>
            <hr className="todo-hr"/>
           {
               todos.filter(todo => todo.completed === false).map(todo =>
                {
                    return <TodoItem key={todo.id} todo ={todo} />
                })
           }

        </div>
    )
}

export default TodoList
