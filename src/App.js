import Router from './config/router';
import Header from './Views/Header'
import Footer from './Views/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header/>
        </div>
        <Router/>
        <div>
          <Footer/>
        </div>
      </header>
    </div>
  );
}

export default App;
