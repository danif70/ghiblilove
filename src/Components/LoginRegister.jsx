import React, { useState } from "react";
import { Fragment } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
//import '../Styles/LoginRegister.css'
import totoroHalf from "../img/totoroHalfR.png";
import {
  Input,
  Text,
  Button,
  Container,
  Flex,
  Image,
  VStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const LoginRegister = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = React.useState(false);

  const handleClickPassword = () => setShow(!show);

  //Funcion para registro de usuarios nuevos
  const register = async (e) => {
    try {
      e.preventDefault();
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      updateProfile(auth.currentUser, {
        displayName: userName,
      });
      setShowForm(false);
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Funcion para ingreso de usuarios registrados
  const logIn = async (e) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(
        auth,
        emailLogin,
        passwordLogin
      );
      console.log("Login", user.user.displayName);
      window.location.pathname = "/home";
    } catch (error) {
      console.log(error.message);
    }
  };

  //Función para registrarse con Google
  const provider = new GoogleAuthProvider();
  const registerGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      /* const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken; */
      window.location.pathname = "/home";
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      {/* Aquí empieza el form de Login */}
      <Container maxWidth="container.lg.xl" p={"0"}>
        <Flex h="100vh">
          <VStack
            w="full"
            h="full"
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
            bg="blue"
           
          >
            <Image
              src={totoroHalf}
              alt="Half Tororo"
              
              
            ></Image>
          </VStack>

          <VStack
            w="full"
            h="full"
            p={10}
            alignItems="center"
            spacing={10}
            bg="gray"
            color="white"
          >
            {!showForm ? (
              <VStack
                w="60%"
                h="60%"
                p={20}
                alignItems="center"
                spacing={"5"}
                border={"4px"}
                borderColor={"blue"}
                borderRadius={"20"}
                bg="mediumGray"
                marginTop={"30%"}
                fontFamily={"Poppins"}
              >
                <p color="white">E-MAIL</p>
                <Input
                  justifyContent={"center"}
                  width={"95%"}
                  height={"15%"}
                  bg="lightGray"
                  color="white"
                  borderRadius={"20"}
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                ></Input>
                <p color="white">PASSWORD</p>
                <Input
                  justifyContent={"center"}
                  width={"95%"}
                  height={"15%"}
                  bg="lightGray"
                  color="white"
                  borderRadius={"20"}
                  type={show ? "text" : "password"}
                  value={passwordLogin}
                  onClick={handleClickPassword}
                  onChange={(e) => setPasswordLogin(e.target.value)}
                ></Input>
                <Button type="submit" onClick={logIn}>
                  Submit
                </Button>
                <p
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  Not yet a member?
                </p>
              </VStack>
            ) : (
              <VStack
                w="60%"
                h="60%"
                p={20}
                alignItems="center"
                spacing={"2"}
                border={"4px"}
                borderColor={"blue"}
                borderRadius={"20"}
                bg="mediumGray"
                marginTop={"30%"}
              >
                <p color="white">USER NAME</p>
                <Input
                  justifyContent={"center"}
                  width={"95%"}
                  height={"25%"}
                  bg="lightGray"
                  color="white"
                  borderRadius={"20"}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></Input>
                <p color="white">ENTER EMAIL</p>
                <Input
                  justifyContent={"center"}
                  width={"95%"}
                  height={"25%"}
                  bg="lightGray"
                  color="white"
                  borderRadius={"20"}
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                ></Input>
                <p color="white">PASSWORD</p>
                <InputGroup
                  justifyContent={"center"}
                  width={"95%"}
                  height={"23%"}
                  borderColor={"blue"}
                  color="white"
                >
                  <Input
                    height={"110%"}
                    borderRadius={"20px"}
                    bg="lightGray"
                    type={show ? "text" : "password"}
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  ></Input>
                  <InputRightElement h="90%" w="18%">
                    <Button
                      h="60%"
                      marginRight={"20px"}
                      marginTop={"5px"}
                      onClick={handleClickPassword}
                      /* onClick={show ? "Hide" : "Show"} */ bg="white"
                    >
                      X
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button
                  type="submit"
                  onClick={register}
                  bg="white"
                  color="gray"
                  borderRadius={"10"}
                >
                  REGISTER
                </Button>
                <p
                  onClick={() => {
                    setShowForm(false);
                  }}
                >
                  Are you a member?
                </p>
                <Text onClick={registerGoogle}>Google</Text>
              </VStack>
            )}
          </VStack>
        </Flex>
      </Container>
    </Fragment>
  );
};

export default LoginRegister;
