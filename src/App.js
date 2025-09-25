import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Link } from '@mui/material';
import './App.css';

import DivPar from './ProjectParts/NavPar';
import MainSection from './ProjectParts/MainSection';
import Projects from './ProjectParts/Projects';
import ContactMe from './ProjectParts/ContactMe';


function App() {

  return (
    <>
      {/* Always visible nav bar */}
      <DivPar  />  

      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: `url(${process.env.PUBLIC_URL}/solid-navy-blue-concrete-textured-wall.jpg)`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 4,
          paddingTop: '100px', // Push content below the fixed navbar
          boxSizing: 'border-box',
          overflowX: 'hidden'
        }}
      >

        <MainSection />
        <Projects />
        <ContactMe />
      </Box>
    </>
  );
}

export default App;