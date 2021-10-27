import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Pages/Prestations.js';
import './style/App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound.js';
import Prestations from './Pages/Prestations.js';
import Realisations from './Pages/Realisations.js';
import Review from './Pages/Review'
import Contact from './Pages/Contact.js';



// menu en fixe en haut comme apple (defilement changement de page) 
// utiliser les path avec 
// rsc pour crée des components 
// 

function App() {
  return ( 
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Prestations'  component={Prestations} />
          <Route path='/Realisations' component={Realisations} />
          <Route path='/Review' component={Review} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
