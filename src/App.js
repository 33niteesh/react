import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './logout.js'
// import Regester from './regester.js';
import Page from './page.js';
import All from './loginpage.js'
import Menu from './menu.js';
import About from './about.js';
import Contact from './contact.js';

function App() {
  return (
    <div className="App">
      {/* hello */}
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<All/>}/>
    <Route path="/posts" element={<Page/>}/>
    <Route path="/menu" element={<Menu/>}/> 
    <Route path="/About" element={<About/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     {/* <Route path="/reg" element={<Regester/>}/> */}
  </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
