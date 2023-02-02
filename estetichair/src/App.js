import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

  function App() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="booking">
            <button className="bookbtn">Book your time</button>
          </div>
          <div className="wrapper">
            <h3>team experts</h3>
            <h5>Meet the crew that makes wonders happen</h5>
            <div className="crew-wrapper">
              <div className="card-crew">
                <div className="photo-card1">
                  <div className="info-card">
                    <h6>Eve Foster</h6>
                    <div className="link-block">
                      <a href='#'><img src={require("./img/facebook.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/instagram.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/whatsapp.png")} className="icon"/></a>
                    </div>
                  </div>
                </div>

                <div className="photo-card2">
                  <div className="info-card">
                    <h6>Roosa Bill</h6>
                    <div className="link-block">
                      <a href='#'><img src={require("./img/facebook.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/instagram.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/whatsapp.png")} className="icon"/></a>
                    </div>
                  </div>
                </div>

                <div className="photo-card3">
                  <div className="info-card">
                    <h6>Klara Berk</h6>
                    <div className="link-block">
                      <a href='#'><img src={require("./img/facebook.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/instagram.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/whatsapp.png")} className="icon"/></a>
                    </div>
                  </div>
                </div>

                <div className="photo-card4">
                  <div className="info-card">
                    <h6>Judy Claim</h6>
                    <div className="link-block">
                      <a href='#'><img src={require("./img/facebook.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/instagram.png")} className="icon"/></a>
                      <a href='#'><img src={require("./img/whatsapp.png")} className="icon"/></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
