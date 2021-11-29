import logo from './logo.svg';
import './App.css';
import Contact from './Contact.svg';
import HelmetComponent from './Components/Helmet/HelmetComponent'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
       <div className="fontStyle1">
         Coming Soon
       </div>


 <form className="Contactform">
    
        <label>
        Notify me when you’re up:</label>
        <div className="EmailContainer">
    <input className="EmailInput" type="Email" name="Email" placeholder="Your Email Address"/>
    <input className="ButtonStyle"  type="submit" value="Notify Me"/> 
    </div>
</form>


<img src={Contact} className="Contact" alt="contact"/>
<HelmetComponent/>
    </div>
  );
}

export default App;
