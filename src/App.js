import { useRef } from 'react';
import './App.css'
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Sitebar from './pages/Sitabar/Sitebar';
import Footer from './pages/Footer/Footer';


function App() {
 
  const but1 = useRef();
  
  function buttonListener(event) {
  console.log(event.target)
}

  return (
    <>
      <div className='AppTest'>
     
       
        <button ref={but1} onClick={buttonListener}>PUSH</button>
        <button onClick={buttonListener}>ABC</button>
      </div>
    <Header/>
      <Main />
      <Sitebar />
      <Footer />
    </>
  );
}

export default App;
