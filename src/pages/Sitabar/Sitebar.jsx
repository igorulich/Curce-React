import './Sitebar.css';
import materials from '../../data/material.json';
function Sitebar() {
  return (
    <div className='Sitebar'>
      <nav>
        <ul>
          {materials.map((item,idx)=>
          <li key={idx}>
              <a href={item.href}>{item.title }</a>
          </li>)}
        </ul>
      </nav>
    </div>
  )
}
export default Sitebar;
