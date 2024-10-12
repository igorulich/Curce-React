import './App.css'
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Sitebar from './pages/Sitabar/Sitebar';
import Footer from './pages/Footer/Footer';
import { useState } from 'react';

function App() {
  const [myState, setMystate] = useState(1);

  function change() {
    setMystate(myState + 10);
 
  }

  return (
    <>
      <div className='AppTest'>
        console.log('render component App')
        <p>My State is: {myState}</p>
        <button onClick={change}>Change My State</button>
      </div>
    <Header/>
      <Main />
      <Sitebar />
      <Footer />
    </>
  );
}

export default App;
