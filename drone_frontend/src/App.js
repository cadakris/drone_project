import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'
import ProjectPosts from './components/ProjectPost';



function App() {
  return (
    <div className="App">

    <ProjectPosts /> {/* Add ProjectPosts component here */}
    <Portfolio />
  </div>
  );
}

export default App;
