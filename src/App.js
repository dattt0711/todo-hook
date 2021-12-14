
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
          {show || <Form isLogin={isLogin}></Form>}
          {show && <TodoFeature/>}
         </div>
         </div>
  );
}

export default App;
// class App extends Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {
  //         show: false
  //       }
  //   }
    
  //   isLogin =(data=undefined)=>{
  //     if(data!=undefined){
  //       this.setState({show:true});
  //       alert(`Welcome ${data.username}, your email is ${data.email}`);
  //     } 
  //   }
  //   render() {
  //   return (
  //     <div className="wrapper">
  //     <div className="App">
  //      {this.state.show || <Form isLogin={this.isLogin}></Form>}
  //      {this.state.show && <TodoFeature/>}
  //     </div>
  //     </div>
  //   );
  //   }
  // }