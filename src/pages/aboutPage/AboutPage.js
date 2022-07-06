import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import UserList from "../../components/userList/UserList";

function AboutPage() {
    const [users, setUsers] = useState([]);
    const data  = useState({})

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }



    const onSubmit = () => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch('https://jsonplaceholder.typicode.com/usgers', options)
            .then(response => console.log(response));
    }


    return (
        <div className="container">
            <Header/>
            <h1>AboutPage</h1>
            <p>MY FRIENDS</p>
            <button
                className="mt-4 mb-4"
                onClick={getUsers}>get users</button>
            <UserList users={users}/>

            <Footer/>

        </div>
    );
}

export default AboutPage;