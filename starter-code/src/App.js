import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        foods: foods,
        showForm: false,
      }
  }

  render() {
    return (
      <div>
        <h1>IronFoods</h1>
        {this.state.foods.map(e =>{ 
          let { name, calories, image, quantity} = e;
          return (
          <FoodBox name={name} calories={calories} image={image} quantity={quantity}/>
          )
        }
        )}
    </div>
  )
}
}


export default App;
