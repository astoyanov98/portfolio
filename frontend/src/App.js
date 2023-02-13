import './App.css';
import Header from './components/header.jsx';
import Home from './components/home.jsx'
import About from './components/about';
import RecentWork from './components/recentWork';

function App() {
  return (
    <div classNameName="App">
      <Header />
      <Home />
      <About/>
      <RecentWork />
    </div>
  );
}

export default App;
