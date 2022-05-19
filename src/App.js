
import './App.css';
import React , { Component } from 'react';
import { CardList } from './components/card-list/card-list.componet';
import { Search } from './components/search/search.component'

class App extends Component{
  constructor(){
    super();
    this.state ={
      name : 'Banu',
      monsters :[],
      searchField : ''
    }
    // this.handleChange = this.handleChange.bind(this)

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({monsters:users}))
      
  }
  handleChange = (e)=>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Blog</h1>
        
        <Search 
          placeholder="search monster" 
          handleChange={this.handleChange}>

        </Search>

        <CardList >{filteredMonsters}</CardList>
        
      </div>
    );

  }
  
}

export default App;
