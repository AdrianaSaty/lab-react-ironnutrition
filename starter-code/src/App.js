import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';

class App extends Component {
  state = {
    foods: foods.slice(0),
    filteredFoods: foods.slice(0)
  }

  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy,
    })
  }

  searchFood = (search) => {
    let filteredFoods = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()) );
    
    this.setState({
      filteredFoods: filteredFoods
    })

  }

  render() {
    return (
      <div>
        <Form addFood={this.addFoodHandler}/>
        <Search handleSearchFood={(search) => this.searchFood(search)}/>

        {this.state.filteredFoods.map((e, idx) =>{ 
            let { name, calories, image, quantity} = e;
            return (
            <FoodBox name={name} calories={calories} image={image} quantity={quantity} key={idx}/>
            )
          }
        )}
    </div>
  )
}
}


export default App;
