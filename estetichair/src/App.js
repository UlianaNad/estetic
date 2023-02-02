import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="background">
          <div className="container">
          <div >
              <img className="logo" src={require("./img/logo3.png")} alt="" />
            </div>
            <div className="dropdown-menu" id="main-nav">
              <ul>
                <li><a href="/home">home</a></li>
                <li> <a href="/story">our story</a></li>
                <li><a href="/beauty_services">Beauty services</a>
                  <ul className="submenu">
                    <li className="sub-link"><a href="#" >lashes/brows</a></li>
                    <li className="sub-link"><a href="#" >hands/nails</a></li>
                    <li className="sub-link"><a href="#" >facial treatments</a></li>
                    <li className="sub-link"><a href="#" >foot treatments</a></li>
                    <li className="sub-link"><a href="#" >body treatments</a></li>
                    <li className="sub-link"><a href="#" >epilation</a></li>
                  </ul>
                </li>
                <li><a href="/hair_services">Hair services</a>
                <ul className="submenu">
                    <li className="sub-link"><a href="#" >Haircut</a></li>
                    <li className="sub-link" ><a href="#">Dyes</a></li>
                    <li className="sub-link"><a href="#" >Coloring</a></li>
                    <li className="sub-link"><a href="#" >Styling</a></li>
                    <li className="sub-link"><a href="#" >Hair extensions and perms</a></li>
                  </ul>
                </li>
                <li><a href="/contacts">contacts</a></li>
              </ul>
            </div>
           
          </div>
          <div className="topic">
            <h3>Hairestetic</h3>
            <h5>Providing you with the highest standards of Hair & Beauty Service</h5>
          </div>
        </div>
      </header>
      <div className="booking">
        <button className="bookbtn">Book your time</button>
      </div>
      <main>
    
      </main>
      <footer>
        <div className="foot-wrapper">
          <hr />
          <div className="content-foot">
            <div className="info">
              <h3>Follow us</h3>
              <div className="flexing">
              <a href='#'>
                <img src={require("./img/instagram.png")} alt="" />
              </a>
              <a href='#'>
                <img src={require("./img/facebook.png")} alt="" />
              </a>
              </div>
            </div>
            <div className="info">
              <h3>Opening hours</h3>
                <span>Sun: closed</span>
                <span>Mon-Fri: 9:00 am - 7:00 pm</span>
                <span>Saturday: 10:00 am - 20:00 pm</span>
            </div>
            <div className="info">
              <h3>Contact information</h3>
              <span>Address: Mannerhementie 100,00250 Helsinki</span>
              <span>Phone: +358465755332</span>
              <span>Email: hairestetic.fi@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
