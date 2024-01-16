// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Importa el hook

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const { t } = useTranslation(); // Usa el hook de traducción

  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar t={t} /> {/* Pasa la función de traducción al componente Navbar */}
        <Body>
          <HeroSection t={t} /> {/* Pasa la función de traducción al componente HeroSection */}
          <Wrapper>
            <Skills t={t} /> {/* Pasa la función de traducción al componente Skills */}
            <Experience t={t} /> {/* Pasa la función de traducción al componente Experience */}
          </Wrapper>
          <Wrapper>
            <Education t={t} /> {/* Pasa la función de traducción al componente Education */}
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} t={t} /> {/* Pasa la función de traducción al componente Projects */}
          <Contact t={t} /> {/* Pasa la función de traducción al componente Contact */}
          <Footer t={t} /> {/* Pasa la función de traducción al componente Footer */}
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} t={t} />} {/* Pasa la función de traducción al componente ProjectDetails */}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
