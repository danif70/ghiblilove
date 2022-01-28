import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import LoginRegister from './Components/LoginRegister';
import Films from './Components/Films';
import Characters from './Components/Characters';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js'



function App() {

  return (
  <ChakraProvider theme={theme} >
    <Router>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/films" element={<Films />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginRegister />} />
      </Routes>
    </Router>
  </ChakraProvider>
  );
}

export default App;
