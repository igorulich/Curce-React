import './App.css'
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Sitebar from './pages/Sitabar/Sitebar';
import Footer from './pages/Footer/Footer';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [pcolor, setColor] = useState({background:'white'});
  function Increase() {
    setCounter(counter + 1)
    setColor({ background: 'green' })
  }
  function Decrease() {
    setCounter(counter - 1)
    setColor({ background: 'red' })
  }
  function vaISetter(event) {
    console.log(event.target);
  }
  return (
    <>
      
      <div className='timeCounter'>
        <h3>{counter}</h3>
    
        <p style={pcolor}>This is a simple React application.</p>
       <input type='range' onChange={vaISetter} value={1}></input>     
        <button onClick={Increase}>Click me +</button>
        <button onClick={Decrease}>Click me -</button>
    </div>
    <Header/>
      <Main />
      <Sitebar />
      <Footer />
    </>
  );
}

export default App;
