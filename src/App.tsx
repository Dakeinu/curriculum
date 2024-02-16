import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import { AboutMe } from './pages/about-me';
import { Certifications } from './pages/certifications';
import { ProfessionalExp } from './pages/professional-exp';
import { Projets } from './pages/projets';
import { Contact } from './pages/contact';

function App() {
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
    </div>
  )
}

export default App
