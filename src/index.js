import React from 'react';
import ReactDOM from 'react-dom';
import './Game/index.js';
import Clock from './Clock/index.js'  //导出组件 方便使用
import Toggle from './Toggle/index.js'  //导出组件 方便使用

  // function Welcome(props) {
  //   return <h1> hello,{props.name}</h1>
  // }

  // function App () {
  //   return (
  //     <div><Welcome name="Zhangjie"/>
  //     <Welcome name="Zhangjie"/>
  //     </div>
  //   );
  // }
  // const element = <Welcome name="Zhangjie"/>
  // ========================================
  // const element = (<h1>Hello, world!</h1>)
  // ReactDOM.render(
  //   <App/>,
  //   // element,
  //   document.getElementById('root')
  // );

  // function Clock(props) {
  //   return (
  //     <div>
  //       <h1>Hello, world!</h1>
  //       <h2>It is {props.date.toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  // }
  
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
  
