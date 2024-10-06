import './App.css'
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Sitebar from './pages/Sitabar/Sitebar';
import Footer from './pages/Footer/Footer';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
 
  function Increase() {
    setCounter(counter+1)
  }
  function Decrease() {
    if(counter > 0) setCounter(counter-1)
  }
  return (
    <>
      <div className='timeCounter'>
        <h3>{counter}</h3>
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
