import React, { useState } from 'react'
import './RegisterMain.css'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function RegisterMain() {
    const [name, setName] = useState();

    const [surname, setSurname] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    async function register(e) {

        await axios.post('api/Auth/Register', {
            Name: name,
            Surname: surname,
            Email: email,
            UserName: username,
            Password: password,

        }, { 'Content-Type': 'multipart/form-data' })
            .then(function (response) {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Zəhmət olmasa emailinizi yoxlayın',
                    showConfirmButton: false,
                    timer: 1500
                })

                navigate('/')
            })
            .catch(function (error) {


            });
    }

    return (
        <div id="Register">
            <div className="container">
                <Form onSubmit={(e) => register(e)}>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder=" Name" />
                    <Form.Control type="text" onChange={(e) => setSurname(e.target.value)} placeholder=" Surname" />
                    <Form.Control type="text" onChange={(e) => setUserName(e.target.value)} placeholder="User Name" />
                    <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <div className="Sign">
                        <button type="submit">Sign In</button>
                        {/* <a href="#">Return To Store</a> */}
                    </div>

                </Form>

            </div>
        </div>
    )
}

export default RegisterMain