import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main/>
      <About/>
      <Projects/>
      
      <Footer/>
    </div>
  );
}

export default App;
