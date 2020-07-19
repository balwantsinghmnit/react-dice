import React,{Component} from 'react';
import './App.css';
import Face1 from "./components/Face1.js";
import Face2 from "./components/Face2.js";
import Face3 from "./components/Face3.js";
import Face4 from "./components/Face4.js";
import Face5 from "./components/Face5.js";
import Face6 from "./components/Face6.js";

class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
        arr:[Face1,Face2,Face3,Face4,Face5,Face6],
        dice:Face2
    };
  }

  suffle = ()=>{
    const num = Math.floor(Math.random()*1000)%6;
    this.setState({
      dice:this.state.arr[num]
    });
  }

  render()
  {
    const Face = this.state.dice;
    return (
      <>
        <center className="mt-100">
          <h1>React Dice</h1><br/>
          <Face /><br/>
          <button onClick={this.suffle}>Suffle</button>
        </center>
      </>
    );    
  }
}

export default App;
