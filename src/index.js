import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from "@chakra-ui/react";

import {
  HashRouter as Router,
  Routes,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './index.css';
import Home from './Home';
import Header from "./Header"
import theme from './theme'
import Downloads from './Downloads'
import ReleaseNotes from './ReleaseNotes'

function IndexApp() {
  return (
    <Router>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/home' element={<Home/>} />
           <Route path='/Home' element={<Home/>} />
           <Route path='/Features' element={<Home/>} />
           <Route path='/Downloads' element={<Downloads/>} />
           <Route path='/releasenotes' element={<ReleaseNotes/>} />
       </Routes>
   </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Header />
            <IndexApp />
        </ChakraProvider>
    </React.StrictMode>
);
