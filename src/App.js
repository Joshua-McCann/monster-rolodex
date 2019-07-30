import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      monsterSearch: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => this.setState({monsters: users} ));
  }

  render() {
    const { monsters, monsterSearch } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(monsterSearch.toLowerCase())
    );
    return (
        <div className="App">
          <SearchBox
              placeholder='monster search'
              handleChange={ e => this.setState({monsterSearch: e.target.value}) }
          />
          <CardList monsters={ filteredMonsters }/>
        </div>
    );
  }
}

export default App;
