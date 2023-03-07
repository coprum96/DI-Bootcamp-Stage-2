// import logo from './logo.svg';
// import './App.css';
// import UserC from "./Components/User";
// import users from './users.json'
import React from 'react'
import User from "./Components/User";
import SearchBox from './Components/SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users_arr: [],
      color: 'blue',
      text: ''
    };
    console.log('constructor');
  }

  findValue = (e) => {
    this.setState({ text: e.target.value });
    const filtered_users = this.state.users_arr.filter(item => 
      item.name.toLowerCase().includes(this.state.text.toLowerCase())
    );
    this.setState({ users_arr: filtered_users });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'green' });
    }, 3000);
  }

  showUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ users_arr: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <SearchBox findValue={this.findValue} />
        <button onClick={() => this.showUsers()}>Show users</button>
        {this.state.users_arr.map((item, index) => {
          return (
            <User key={index} name={item.name} username={item.username} email={item.email} />
          )
        })}
      </div>
    );
  }
}

export default App;



