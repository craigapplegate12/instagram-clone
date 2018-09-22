import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Info from './components/Info/info';
import Body from './components/Body/body';
import List from './components/List/list';


class App extends Component {
 constructor(props){
    super();
    this.state = {
      users: [],
      selectedUser: {},
      store: []
    }
    }
  
  
  componentDidMount(){
    axios.get('https://randomuser.me/api/?inc=name,picture,login&results=10')
    .then(people=>{
      const userDB= people.data.results.map(person => {
        return {
          firstName: person.name.first,
          lastName: person.name.last,
          photo: person.picture.large,
          userName: person.login.username
        }
      })
      console.log(userDB);
      this.setState({
        users: userDB   
      })
    })
  }


  
  selectUser = (person) => {
    console.log(person);
    this.setState({selectedUser: person})
  }
  
  render() {
    const listUsers = this.state.users.map(
      person => {
        return <List 
        selectUserFn = {this.selectUser}
        firstName= {person.firstName}
        lastName= {person.lastName}
        person= {person}
        />
      }
      )
    return (
      <div>
        {listUsers}
        <Header />
        <Info person= {this.state.selectedUser} />
        <Body />
      </div>
    );
  }
}

export default App;
