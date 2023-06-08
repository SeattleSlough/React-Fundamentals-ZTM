import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';


export class App extends Component {
  constructor () {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  // Considered a Smart Component because it holds state

  onSearchChange = ( event ) => {
    this.setState( { searchfield: event.target.value } );
  };

  render() {
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes( this.state.searchfield.toLowerCase() );
    }
    );

    return (
      <div className='tc' >
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange } />
        <CardList robots={ filteredRobots } />
      </div >
    );
  };
}
export default App;