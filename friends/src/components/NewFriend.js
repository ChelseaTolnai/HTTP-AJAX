import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewFriend extends Component {
    state = {
        friend: {
            id: 7,
        }
    }

    handleInput = (e) => {
        e.target.name.includes('name') && 
            this.setState({
                friend: {
                    ...this.state.friend, 
                    name: e.target.value,
                }
            })
        e.target.name.includes('age') && 
            this.setState({
                friend: {
                    ...this.state.friend, 
                    age: e.target.value,
                }
            })
        e.target.name.includes('email') && 
            this.setState({
                friend: {
                    ...this.state.friend, 
                    email: e.target.value,
                }
            })   
    }

    // postFriend = () => {
    //     axios
    //     .post('http://localhost:5000/friends', newFriend)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    // addFriend = (e) => {
    //     e.preventDefault();
    //     this.postFriend(this.state.friend)
    // }

    render() {
        return(
            <div>
                <h4>Want to be my friend?</h4>
                <Form inline>
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