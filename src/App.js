import Landing from './Landing';
import Navbar from './Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <CssBaseline />  
      <Navbar />
      <Landing />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
