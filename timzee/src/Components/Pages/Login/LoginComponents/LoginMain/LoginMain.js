import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './LoginMain.css'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginMain() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    async function login(e) {
        e.preventDefault();
    
        await axios.post(`api/Auth/Login`, {
          Email: email,
          Password: password
        }, { 'Content-Type': 'multipart/form-data' })
          .then(function (response) {
    
            if (response.data.status === "success" || response.status === 200) {
              localStorage.setItem("token", response.data);
              window.location.reload();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Ugurla giris etdiz',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/')
            } else {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Email və ya şifrə yanlışdır',
                showConfirmButton: false,
                timer: 1500
              })
            }
    
            // setLoginOpen(false)
          })
          .catch(function (error) {
    
          })
      }
  return (
    <div id="Login">
    <div className="container">
        <Form  onSubmit={(e)=> login(e)}>
       
            <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <Form.Control className="pswrd" type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/>
            <div className="Sign">
                <button type="submit">Sign In</button>
            </div>
            <span className="textSign">
                <a href="#">Forgot your password?</a>
                <Link to={'/register'}>Create account</Link>
                <Link to={'/'}>Return to Store</Link>
            </span>
        </Form>
   
    </div>
</div>
  )
}

export default LoginMain