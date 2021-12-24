import logo from './logo.svg';
import './CSS/styles.css';
import './CSS/App.css';

import Header from "./Header.js"
import Contact from "./Contact.js"
import Musica from "./Musica.js"
import Footer from "./Footer.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Musica />
      <Footer />
    </div>
  );
}

export default App;
