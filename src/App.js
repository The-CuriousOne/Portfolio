import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Domain from './Components/Domain';
import Experience from './Components/Experience';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/domain' element={<Domain/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/about_me' element={<AboutMe/>}/>
          <Route path='/contact_me' element={<ContactMe/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
      
    </div>
  );
}

export default App;
