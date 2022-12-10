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
import Header from "./Header"
import theme from './theme'
import Home from './Home';
import Features from './Features'
import Downloads from './Downloads'
import Blog from './Blog'
import RoadMap from './RoadMap'

function IndexApp() {
  return (
    <Router>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/home' element={<Home/>} />
           <Route path='/Home' element={<Home/>} />
           <Route path='/Features' element={<Features/>} />
           <Route path='/Downloads' element={<Downloads/>} />
           <Route path='/Blog' element={<Blog/>} />
           <Route path='/RoadMap' element={<RoadMap/>} />
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
