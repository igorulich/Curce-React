import './Main.css';
import materials from '../../data/material.json';
import Articles from '../../componets/Articles';
function Main() {
  return (
    <div className='Main'>
    <Articles data={materials}/>
    </div>
  )
}
export default Main;
