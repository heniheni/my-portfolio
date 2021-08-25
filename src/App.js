import './App.css';
import logo from './Heni_Bhungalia.jpeg';

function App() {
  return (
    
      <div className="styling_header">
       
        <div className="styling_flex_items">
        <ul className="styling_list">
        <img className="styling_logo" src={logo}/>
          <li className="listitems">Home</li>
          <li className="listitems">About Me</li>
          <li className="listitems">Academic</li>
          <li className="listitems">Projects</li>
          <li className="listitems">Resume</li>
          <li className="listitems">Contact Me</li>
        </ul>
        </div>
       
      </div>
    
  );
}

export default App;
