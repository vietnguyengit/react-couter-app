import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  
  state = {
    counters: [
        {_id: 1, value: 3},
        {_id: 2, value: 0},
        {_id: 3, value: 0}
    ],
    imgURI: 'http://www.ddmcivil.com.au/wp-content/uploads/2018/02/DDM-Logo-White-Sml.png',
    tags: [
      {_id: 0, value: "tag1"},
      {_id: 1, value: "tag2"},
      {_id: 2, value: "tag3"}
    ]
  }

  handleResetAll = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({counters});
  }

  handleCounterDelete = counterID => {
      console.log("Counter #" + counterID + " deleted!");
      const counters = this.state.counters.filter(c => c._id !== counterID)
      this.setState({counters});
  }

  //arrow function
  //onClick attr: no ()
  //syntax {state_elemment: this.state.state_element}
  handleIncrement = counter => {
      // console.log("clicked");
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter}
      counters[index].value++;
      this.setState({counters});
  }

  handleDecrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter}
      counters[index].value--;
      this.setState({counters});
  }

  handleReset = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter}
      counters[index].value = 0;
      this.setState({counters});
  }

  handleTagDelete = tag => {
    const tags = this.state.tags.filter(t => t._id !== tag._id)
    this.setState({tags});
  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Counters
            imgURI={this.state.imgURI}
            tags={this.state.tags}
            counters={this.state.counters}
            tags={this.state.tags}
            imgURI={this.state.imgURI}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleCounterDelete}
            onResetAll={this.handleResetAll}
            onTagDelete={this.handleTagDelete}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
