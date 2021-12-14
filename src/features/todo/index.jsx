import React,{useState} from 'react';
import TodoList from './component/todoList/index'
import './style.scss';
function TodoFeature(props) {
    const initialTodo = [
        {
            id: 1,
            title: 'eat',
            status: "new"
        },
        {
            id: 2,
            title: 'code',
            status: "new"
        },
        {
            id: 3,
            title: 'sleep',
            status: "completed"
        },
        {
            id: 4,
            title: 'dating',
            status: "new"
        },
    ]
    const [todoList,setTodoList] = useState(initialTodo);
    const [filter,setFilter] = useState('All');
    const [id, setId] = useState(5);
    const [todoInput, setTodoInput] = useState('');
    const renderedTodoList = todoList.filter(todo => filter === 'All' || filter === todo.status);
        // handle change status
    const handleTodoClick = (todo, index) =>{
        //clone current todo list
        const newTodoList = [...todoList];
        //toggle status 
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new"
        }
        //update todo list
        setTodoList(newTodoList)
    }
    // handle show all todo 
    const handleShowAll = () =>{
        setFilter('All');
    }
    //handle show completed todo
    const handleShowCompleted = () =>{
        setFilter('completed');
    }
    //handle show new todo 
    const handleShowNew = () =>{
        setFilter('new');
    }
        //take input when user change input
    const handleTodoInput = (input) =>{
        console.log(input)
        setTodoInput(input);
    }
        // handle when click add button
    const handleClickAdd = ()=> {
        //clone current todo list
        const newTodoList = [...todoList];
        //add new todo
        newTodoList.push({
            title: todoInput,
            id: id,
            status: "new",
        })
        // update todolist, id and clear input
        setTodoList(newTodoList);
        setTodoInput('');
    }
        
    //handle remove
    const handleClickRemove = (index) => {
        //clone current todo list
        const newTodoList = [...todoList];
        //remove
        newTodoList.splice(index, 1);
        console.log(newTodoList)
        // update todolist, id and clear input
        setTodoList(newTodoList);
    }
    //handle update 
    const handleClickUpdate = (index, newTitle) => {
        const newTodoList = [...todoList];
        //update   
        newTodoList[index] = {
            ...newTodoList[index],
            title: newTitle,
        }
        console.log(newTodoList)
        // set state       
        setTodoList(newTodoList);
    }
    return (
        <div className="todo">
            <div className="todo__heading">
                <h3 >Todo list</h3>
                <input onChange={(e) => handleTodoInput(e.target.value)} placeholder="add new todo" value={todoInput}></input>
                <a className="btn" onClick={handleClickAdd}>Create task</a>
            </div>
            <TodoList className="todo__list" todoList={renderedTodoList} onTodoClick={handleTodoClick} onRemoveClick={handleClickRemove} onUpdateClick={handleClickUpdate} />
            <div className="todo__btn-show">
                <button className="btn" onClick={() => handleShowAll()}>Show all</button>
                <button className="btn" onClick={() => handleShowCompleted()}>Show Completed</button>
                <button className="btn" onClick={() => handleShowNew()}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;
