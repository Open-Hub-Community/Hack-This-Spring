import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './style/style.css';
import Home from './components/Home';
import SubmitProject from './components/SubmitProject';
import About from './components/About';
import Register from './components/Register';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className='container'>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/submit-project' element={<SubmitProject/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
