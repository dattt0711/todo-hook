import React,{useState} from 'react';
import validator from 'validator';
function Form(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if(username=='' || email=='') alert('All fields must be required')
        else if(!validator.isEmail(email)) alert('Email is invalid')
        else return props.isLogin({username, email});
    }
    const handleUsername = (event) =>{
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    const handleEmail = (event) =>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    return (
        <div>
            <form >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" onChange={(event)=>handleUsername(event)} value={username}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" onChange={(event)=>handleEmail(event)} value={email}/>
                    </div>
                    <button onClick={(event)=>handleSubmit(event)}>Log In</button>
                </form>
        </div>
    );
}

export default Form;
