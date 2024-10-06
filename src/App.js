import './App.css'
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Sitebar from './pages/Sitabar/Sitebar';
import Footer from './pages/Footer/Footer';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [pcolor, setColor] = useState({ background: 'white' });
  const [val, setVal] = useState(0);
  function Increase() {
    setCounter(counter + 1)
    setColor({ background: 'green' })
  }
  function Decrease() {
    setCounter(counter - 1)
    setColor({ background: 'red' })
  }
  function vaISetter(event) {
    setVal(event.target.value);
  }

  return (
    <>
      
      <div className='timeCounter'>
        <h3>{counter}</h3>
        <h4>{val}</h4>
        <p style={pcolor}>This is a simple React application.</p>
       <input type='range' onChange={vaISetter} value={val}></input>     
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
