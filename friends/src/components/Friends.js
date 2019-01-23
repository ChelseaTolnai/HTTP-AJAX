import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
    state = {
        friends: [],
        error: ''
    };

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(res => {
                this.setState({
                    friends: res.data,
                    error: ''
                })
            })
            .catch(err => {
                if (err.response) {
                    const message = err.response.data.substring(
                        err.response.data.lastIndexOf("<pre>") + 5, 
                        err.response.data.lastIndexOf("</pre>")
                    );

                    this.setState({
                        error: `Error ${err.response.status}: ${message}`,
                    })  
                }          
            });
    }

    render() {
      return (
        <div>
            {this.state.error && <div>{this.state.error}</div>}

            <h3>My Friends:</h3>
            {this.state.friends.map(friend => (
                <div key={friend.id}>
                    <div>Name: {friend.name}</div>
                    <div>Age: {friend.age}</div>
                    <div>Email: {friend.email}</div>
                    <br></br>
                </div>
            ))}
        </div>
      );
    }
}

export default Friends;