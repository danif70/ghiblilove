import React, { useState } from 'react'
import { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import '../Styles/LoginRegister.css'
import totoroHalf from '../img/totoroHalf.png'


const LoginRegister = () => {

  const [registerEmail, setRegisterEmail]= useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [userName, setUserName]= useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [showForm, setShowForm] = useState(false);

//Funcion para registro de usuarios nuevos
const register = async (e)=>{
  try { 
    e.preventDefault()
    const user = await createUserWithEmailAndPassword(
      auth, 
      registerEmail, 
      registerPassword
      );
    updateProfile(auth.currentUser, {
        displayName: userName,
    });
    setShowForm(false);
    console.log('user', user)
  } catch (error) {
    console.log(error.message);
  }
    };


//Funcion para ingreso de usuarios registrados
  const logIn = async (e) =>{
    try{
      e.preventDefault();
      const user = await signInWithEmailAndPassword(
        auth, 
        emailLogin, 
        passwordLogin
        );
        console.log('Login', user.user.displayName);
        window.location.pathname = '/home';
    } catch (error){
      console.log(error.message);
    }
  };

  //Función para registrarse con Google
  const provider = new GoogleAuthProvider();
  const registerGoogle = async () => {
    try{
      const user = await signInWithPopup(auth, provider);
      /* const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken; */
      window.location.pathname = '/home';
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

 

  return (
    <Fragment>
    {/* Aquí empieza el form de Login */}
    <div className='login-register'>
      <img src={totoroHalf} alt="totoroHalf" id='totoroHalf'/>
    <div className='container-forms'>
      <div className='forms'>
        <Form className={showForm ? "form-novisible" : "form-visible"}>
          <Form.Group className="mb-3" controlId="formBasicEmail Login">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email"
            value = {emailLogin}
            onChange={(e)=>setEmailLogin(e.target.value)}
            />          
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword Login">
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
          onClick={logIn}>
            Submit
          </Button>
          <p onClick={()=>{setShowForm(true)}}>Not yet a member?</p>
      </Form> 
      {/* Aquí empieza el form de Registro */}
        <Form className={showForm ? "form-visible" : "form-novisible"}>
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
            Register
          </Button>
          <p onClick={registerGoogle}>Google</p>
      </Form>
      </div>
    </div>
    </div>
    </Fragment>
  )
}

export default LoginRegister




