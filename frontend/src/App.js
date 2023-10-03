
import './App.css';
import Nav from "./Components/Nav";
import Home from './Components/Home';
import Form from './Components/Form';
import Login from './Components/Login';
import Footer from "./Components/Footer";
import Admin from './Components/Admin';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <div className='mainContent'>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/admin" element={<Admin />}/>
      </Routes>
      </div>
    </Router>
    <div className='footerContent'>
    <Footer />
    </div>
    </>
  );
}

export default App;
