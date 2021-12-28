import React, { useState } from 'react'
import { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';
import { auth } from '../firebase/firebaseConfig';


const LoginRegister = () => {

  const [registerEmail,setRegisterEmail]= useState('');
  const [registerPassword,setRegisterPassword] = useState('');
  const [userName,setUserName]= useState('');
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

//Funcion para registro de usuarios nuevos
const register = async (e)=>{
  try { 
    e.preventDefault()
    const user = await createUserWithEmailAndPassword(
      auth, 
      registerEmail, 
      registerPassword
      );
      console.log('user', userName)
  } catch (error) {
    console.log(error.message);
  }
    };


//Funcion para ingreso de usuarios registrados
/* const logIn = async () =>{
  signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    
    }; */

 

  return (
    <Fragment>
     {/*  <p>login</p>
       <Form className="form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email"
          value = {emailLogin}
          onChange={(e)=>setEmailLogin(e.target.value)}
          />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password"
          value = {passwordLogin} 
          onChange={(e)=>setPasswordLogin(e.target.value)}
          />
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit"
        onClick={()=>logIn(emailLogin,passwordLogin)}>
          Submit
        </Button>
    </Form>  */}
    <p>Register</p>
      <Form className="form-register">
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User</Form.Label>
          <Form.Control 
          type="Text" 
          placeholder="User Name" 
          value = {userName} 
          onChange={(e)=>setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email"
          value = {registerEmail} 
          onChange={(e)=>setRegisterEmail(e.target.value)}
          />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value = {registerPassword} 
          onChange={(e)=>setRegisterPassword(e.target.value)}
          />
        </Form.Group>        
        <Button 
        variant="primary" 
        type="submit"
        onClick={register}>
          Submit
        </Button>
    </Form>
    </Fragment>
  )
}

export default LoginRegister




