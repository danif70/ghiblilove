import React, { useState } from 'react'
import { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginRegister = () => {

  const [email,setEmail]= useState('');
  const [password,setPassword] = useState('');
  const [userName,setUserName]= useState('');

//Funcion para registro de usuarios nuevos
const register = ()=>{
  console.log(userName, email, password);
  /* const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }); */
} 

//Funcion para ingreso de usuarios registrados
/* const logIn = () =>{
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
} 
 */

  return (
    <Fragment>
      <p>login</p>
     {/*  <Form className="form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email"
          value = {email}
          onChange={(e)=>setEmail(e.target.value)}
          />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password"
          value = {password} 
          onChange={(e)=>setPassword(e.target.value)}
          />
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit"
        onClick={()=>logIn(email,password)}>
          Submit
        </Button>
    </Form> */}
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
          value = {email} 
          onChange={(e)=>setEmail(e.target.value)}
          />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value = {password} 
          onChange={(e)=>setPassword(e.target.value)}
          />
        </Form.Group>        
        <Button 
        variant="primary" 
        type="submit"
        onClick={()=>register(userName,email,password)}>
          Submit
        </Button>
    </Form>
    </Fragment>
  )
}

export default LoginRegister




