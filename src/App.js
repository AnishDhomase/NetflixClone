import './App.css';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <section className='genre'>
        <Gallary title="New Releases "/>
        <Gallary title="Indian Movies"/>
        <Gallary title="Trending Movies"/>
        <Gallary title="Comedy Movies"/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
