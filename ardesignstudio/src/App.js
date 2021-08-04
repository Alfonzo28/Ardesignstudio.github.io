import logo from './logo.svg';
import './App.css';
import Contact from './Contact.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p className="fontStyle1">
          Coming Soon
        </p>
 <form className="Contactform">

        <label>
        Notify me when you’re up:</label>
        <div className="EmailContainer">
    <input className="ContainerStyle" type="Email" name="Email" placeholder="Your Email Address"/>
    <input className="ButtonStyle"  type="submit" value="Notify Me"/> 
    </div>
</form>


<img src={Contact} className="Contact" alt="contact"/>



      </header>
    </div>
  );
}

export default App;
