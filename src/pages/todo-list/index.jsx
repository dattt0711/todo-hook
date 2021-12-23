import React from 'react';
import PropTypes from 'prop-types';


function TodoList({todoList, onTodoClick, onRemoveClick, onUpdateClick}) {
    const handleClick = (todo, index)=>{
        if(!onTodoClick) return;
        return onTodoClick(todo, index)
    }
    const handleUpdate = (index, title) =>{
        if(!onUpdateClick) return;
        let newTitle = prompt("Please enter your new title: ")
        title = (newTitle == null || newTitle == "") ? title : newTitle;
        return onUpdateClick(index, title);
    }
    return (
        <ul className="todo__list">
            {todoList.map((todo,index) => (
                <li     
                    className={`todo__item-wrapper ${(todo.status=='completed')?"completed":""}`}
                    key={todo.id}>
                <div className="todo__item">
                <p onClick={()=>handleClick(todo, index)} className="todo__title">{todo.title}</p> 
                <div className="item__function">   
                <button className="btn btn--remove" onClick={()=> onRemoveClick(index)}>
                    Remove
                </button>
                <button className="btn btn--update" onClick={()=>handleUpdate(index, todo.title)}>Update</button>
                </div>
                </div>   
                </li>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

export default TodoList;