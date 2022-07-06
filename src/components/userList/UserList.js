import React from 'react';
import {Card} from "react-bootstrap";




const UsersList = ({users}) => (

    <>
        {
           users.map((user, i ) => (
                <Card key={user.id}  className="mt-4">
                    <Card.Body>

                        <Card.Title  >{i+1}</Card.Title>

                        <Card.Title  >{user.name}</Card.Title>

                        <Card.Text>{user.username}</Card.Text>

                        <Card.Text>{user.email}</Card.Text>

                    </Card.Body>
                </Card>
            ))
        }


    </>

);

export default UsersList;