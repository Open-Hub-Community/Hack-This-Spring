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
import Schedule from './components/Schedule';
import Rules from './components/Rules';
import Conduct from './components/Conduct';
import Admin from './components/Admin';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className='container'>
    <Router>
    <Navbar/>
    <ScrollToTop />
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/submit-project' element={<SubmitProject/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/conduct' element={<Conduct/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
