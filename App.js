import logo from './logo.svg';
import './App.css';
 //import Todo from '../src/Todo/Todo.js';
// import Quiz from './Quiz/Quiz';
//  import UI from './LC/UI';
import Child from './Child/Child'
//import Quiz1 from './Quiz/Quiz1';
import Quiz from './New_Quiz/Quiz';
import {useState} from 'react';
// import Header from './New_Quiz/Header';
// import Image from './Quiz/q1.png';

function App() {
  const[variable,setVariable] = useState("");
  const child_data = (data) => {
    setVariable(data);
  }

  return (
    <>
    {/* <Todo></Todo> */}
    {/* <Quiz></Quiz> */}
    {/* <UI></UI> */}
    <Quiz></Quiz>
    {/* <Header/> */}
    
    {/* <Image></Image> */}


    <div className='App'>
        <Child temp = {child_data}/>
        <h3>Hello my name is {variable}</h3>
    </div>
    </>
   
  );
}

export default App;
