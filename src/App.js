import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Shoeinfo from './Shoeinfo';

class App extends Component {
  state = {
    moreShoes:[
      {brand:"Adidas", type:"Zoom", size:13},
    ]
  }
  changeShoe = (updatedType) => {
    this.setState({
      moreShoes:[
        {brand:"Puma",type: "Bolt", size:14},
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Christian Scully</h1>
        <Shoeinfo brand="Nike" type="Lebron 9" size="13"/>
        <Shoeinfo brand="Jordan" type="Zion 1" size="11"/>

        <h1>I have many shoes!</h1>
        <Shoeinfo brand={this.state.moreShoes[0].brand} type={this.state.moreShoes[0].type} size={this.state.moreShoes[0].size}/>
        <button onClick={this.changeShoe}>Click to see hidden shoe</button>
      </div>

    );
  }
}

export default App;

