
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import TodoFeature from './features/todo';
import Form from './features/todo/component/form'

function App(props) {
  const [show, setShow] = useState(false);
  function isLogin (data=undefined){
        if(data!=undefined){
          setShow(true);
          alert(`Welcome ${data.username}, your email is ${data.email}`);
        } 
      } 
  return (
    <div className="wrapper">
         <div className="App">
          {/* {show || <Form isLogin={isLogin}></Form>} */}
          <TodoFeature/>
         </div>
         </div>
  );
}

export default App;
