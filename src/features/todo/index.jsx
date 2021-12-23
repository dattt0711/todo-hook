import React,{useEffect, useState} from 'react';
import TodoList from '../../pages/todo-list/index'
import Homepage from '../../pages/homepage/index'
import './style.scss';
import {Link, Route, Switch} from "react-router-dom"
import { useLocation, useHistory} from 'react-router-dom';
import queryString from 'query-string';
import { useRouteMatch } from 'react-router-dom';
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
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList,setTodoList] = useState(initialTodo);
    const [filter,setFilter] = useState(()=>{
        const params = queryString.parse(location.search);
        return params.status || 'All';
    });
    const [id, setId] = useState(5);
    const [todoInput, setTodoInput] = useState('');
    const renderedTodoList = todoList.filter(todo => filter === 'All' || filter === todo.status);
     
    useEffect(()=>{
        const params = queryString.parse(location.search);
        setFilter(params.status || 'All');
    }, [location.search])
    
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
        const queryParams = {status: 'All'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    //handle show completed todo
    const handleShowCompleted = () =>{
        const queryParams = {status: 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    //handle show new todo 
    const handleShowNew = () =>{
        const queryParams = {status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
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
        setId(prev=>prev+1);
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
            <Link to="/todolist">
                <button>Todo List</button>
            </Link>
            <Link to="/homepage">
                <button>Homepage</button>
            </Link>
            <Switch>
            <Route path="/" exact>
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
            </Route>
            <Route path="/todolist">
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
            </Route>
            <Route path="/homepage">
                <Homepage/>
            </Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;
