import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

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
            <h3>My Friends</h3>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.friends.map(friend => (
                        <tr key={friend.id}>
                            <th scope="row">{friend.id}</th>
                            <td>{friend.name}</td>
                            <td>{friend.age}</td>
                            <td>{friend.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
      );
    }
}

export default Friends;