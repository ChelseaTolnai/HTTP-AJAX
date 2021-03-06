import React from 'react';
import { Table } from 'reactstrap';

const Friends = (props) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Click "X" to Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.friends.map(friend => (
                    <tr key={friend.id}>
                        <th scope="row">{friend.id}</th>
                        <td>{friend.name}</td>
                        <td>{friend.age}</td>
                        <td>{friend.email}</td>
                        <td onClick={props.removeFriend}><span style={{fontWeight: "bold", cursor: "pointer"}}>X</span></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Friends;