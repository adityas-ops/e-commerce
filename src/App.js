import React from 'react'
import "./App.css";
import { Box } from '@material-ui/core'
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './home/Navigation/Navigation';
import Footer from './Footer';
import Collections from './Collections/Collections';
function App() {
  return (
    <>
      <Box>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Collections" element={<Collections />} />
        </Routes>
        <Footer />

      </Box>
    </>
  )
}

export default App