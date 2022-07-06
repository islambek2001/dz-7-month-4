import React, {useEffect, useState} from 'react';
import UserList from "../../components/userList/UserList";

function UsersPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <UserList users={users}/>
        </div>
    );
}

export default UsersPage;