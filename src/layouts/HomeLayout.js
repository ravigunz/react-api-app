import React, { Component } from 'react'

export default class HomeLayout extends Component {

    state = { users: [], 
    isLoading: true,
};

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()).then(data => { this.setState({users: data, isLoading: false});
    }).catch(() => {});
}

  render() {
    return (
      <div>
{this.state.isLoading == true ? (<div>{' '} <h2>Loading......</h2>{' '}</div>) : ( <div>Completed</div>)}
         <h1>Members</h1>
        <p style={{ textAlign: 'left'}}>
        {this.state.users.map((val, key) => {return <div key={key}>{val.name}</div>})}
        </p>
      </div>
    );
  }
}

