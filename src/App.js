import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Views/Header'
import Footer from './Views/Footer';
import Dashboard from "./Views/Dashboard";
import Detail from "./Views/Detail";
import Login from "./Views/Login";
import Registered from "./Views/Registered";
import PostAdd from './Views/sell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail/:adId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registered" element={<Registered />} />
        <Route path="/ads" element={<PostAdd />} />
      </Routes>
      <Footer />
    </Router>
              
      </header>
    </div>
  );
}

export default App;
