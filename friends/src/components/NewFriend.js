import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewFriend extends Component {
    state = {
        friend: {
            id: 7,
        },
    }

    handleInput = (e) => {
        this.setState({
            friend: {
                ...this.state.friend, 
                [e.target.name]: e.target.value,
            }
        }) 
    }

    postFriend = (newFriends) => {
        axios
            .post('http://localhost:5000/friends', newFriends)
            .then(response => 
                alert(`${response.statusText}: ${response.data[response.data.length-1].name}`)
            )
            .catch(err => {
                if (err.response) {
                    const message = err.response.data.substring(
                        err.response.data.lastIndexOf('<pre>') + 5, 
                        err.response.data.lastIndexOf('</pre>')
                    );

                    this.setState({
                        ...this.state, 
                        postErrorMessage: `Error ${err.response.status}: ${message}`,
                    })  
                }   
            })
    }

    addFriend = (e) => {
        e.preventDefault();
        if (this.state.friend.id && this.state.friend.name && this.state.friend.age && this.state.friend.email) {
            this.postFriend(this.state.friend)
            let id = this.state.friend.id + 1
            this.setState({friend: {id}});
            document.getElementById('friendForm').reset();
        } else {
            alert('Please fill in all friend fields.')
        }
    }

    render() {
        return(
            <div>
                <h4>Want to be my friend?</h4>
                <Form inline onSubmit={this.addFriend} id='friendForm'>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                        <Label for='name' className='mr-sm-2'><strong>Name</strong></Label>
                        <Input onChange={this.handleInput} type='text' name='name' id='name' placeholder='First Name' />
                    </FormGroup>

                    <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                        <Label for='age' className='mr-sm-2'><strong>Age</strong></Label>
                        <Input onChange={this.handleInput} type='number' name='age' id='age' placeholder='Age' />
                    </FormGroup>

                    <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                        <Label for='email' className='mr-sm-2'><strong>Email</strong></Label>
                        <Input onChange={this.handleInput} type='email' name='email' id='email' placeholder='JDoe@example.com' />
                    </FormGroup>

                    <Button onClick={this.addFriend}>Friend Me!</Button>
                </Form>
            </div>
        )
    }
}

export default NewFriend;