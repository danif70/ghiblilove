import React, { useState } from 'react'
import { Fragment } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
//import '../Styles/LoginRegister.css'
import totoroHalf from '../img/totoroHalf.png'
import { Input, Box, Text, Button, Container, Flex } from '@chakra-ui/react'


const LoginRegister = () => {

  const [registerEmail, setRegisterEmail]= useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [userName, setUserName]= useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = React.useState(false)
  
  
  const handleClickPassword = () => setShow(!show)

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
      <Container>
        {!showForm  ? (
        <Container>
          <Input 
            justifyContent={'center'} 
            width={'25%'} 
            height={'20px'} 
            placeholder='E-mail'
            value = {emailLogin}
            onChange={(e)=>setEmailLogin(e.target.value)}>
          </Input>
          <Input 
            justifyContent={'center'} 
            width={'25%'} 
            height={'20px'} 
            placeholder='Password' 
            type={show ? 'text' : 'password'}
            value = {passwordLogin}
            onClick={handleClickPassword}
            onChange={(e)=>setPasswordLogin(e.target.value)}>
          </Input>
          <Button 
            type="submit" 
            onClick={logIn}>
            Submit
          </Button>
          <p onClick={()=>{setShowForm(true)}}>
            Not yet a member?
          </p>
        </Container>
        ):(
        <Container type={showForm ? "form-visible" : "form-novisible"}>
          <Input
            justifyContent={'center'} 
            width={'25%'} 
            height={'20px'} 
            placeholder="User Name" 
            value = {userName} 
            onChange={(e)=>setUserName(e.target.value)}>
          </Input>
          <Input
            justifyContent={'center'} 
            width={'25%'} 
            height={'20px'}
            placeholder="Enter email"
            value = {registerEmail} 
            onChange={(e)=>setRegisterEmail(e.target.value)}>
          </Input>
          <Input
            justifyContent={'center'} 
            width={'25%'} 
            height={'20px'}
            type={show ? 'text' : 'password'}
            placeholder="Password" 
            value = {registerPassword} 
            onClick={handleClickPassword}
            onChange={(e)=>setRegisterPassword(e.target.value)}>
          </Input>
          <Button
            type="submit"
            onClick={register}>
              Register
          </Button>
          <p onClick={()=>{setShowForm(false)}}>
            Are you a member?
          </p>
          <Text onClick={registerGoogle}>Google</Text>
        </Container>
        )}
      </Container>
    </Fragment>
  )
}

export default LoginRegister




