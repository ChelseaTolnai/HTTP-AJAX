import React from 'react';
import { Table } from 'reactstrap';

const Friends = (props) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.friends.map(friend => (
                    <tr key={friend.id}>
                        <td>{friend.name}</td>
                        <td>{friend.age}</td>
                        <td>{friend.email}</td>
                        <td onClick={props.updateFriend}>
                            <span id={friend.id} style={{fontWeight: "bold", cursor: "pointer"}}>
                                +
                            </span>
                        </td>
                        <td onClick={props.removeFriend}>
                            <span id={friend.id} style={{fontWeight: "bold", cursor: "pointer"}}>
                                X
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Friends;