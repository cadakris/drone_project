import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'
import ProjectPosts from './components/ProjectPost';
import Navbar from './components/Navbar';
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero />
    {/* <ProjectPosts /> 
    <Portfolio /> */}
  </div>
  );
}

export default App;
