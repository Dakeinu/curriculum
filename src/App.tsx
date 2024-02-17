import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import { AboutMe } from './pages/about-me';
import { Certifications } from './pages/certifications';
import { ProfessionalExp } from './pages/professional-exp';
import { Projets } from './pages/projets';
import { Contact } from './pages/contact';
import { Pagination } from './components/pagination';
import { useState } from 'react';
import { Pages } from './interfaces/models';

function App() {

  const getCurrentPage = (): Pages => {
    const url = window.location.pathname;
    switch (url) {
      case '/about-me':
        return { name: 'À propos de moi', link: '/about-me' };
      case '/certifications':
        return { name: 'Certifications', link: '/certifications' };
      case '/professional-experiences':
        return { name: 'Expériences professionnelles', link: '/professional-experiences' };
      case '/projets':
        return { name: 'Projets', link: '/projets' };
      case '/contact':
        return { name: 'Contact', link: '/contact' };
      default:
        return { name: 'Accueil', link: '/' };
    }
  }

  const initialValue = getCurrentPage();

  const [currentPage] = useState<Pages>(initialValue);

  const Pages: Pages[] = [
    { name: 'Accueil', link: '/' },
    { name: 'À propos de moi', link: '/about-me' },
    { name: 'Certifications', link: '/certifications' },
    { name: 'Expériences professionnelles', link: '/professional-experiences' },
    { name: 'Projets', link: '/projets' },
    { name: 'Contact', link: '/contact' }
  ]

  return (
    <div className="App bg-primary">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/professional-experiences" element={<ProfessionalExp />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Pagination pages={Pages} currentPage={currentPage} />
    </div>
  )
}

export default App
