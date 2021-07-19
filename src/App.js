import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer';
import Discover from './components/Discover';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route  path="/discover" component={Discover} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
