import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './Pages/Prestations.js';
import './style/App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound.js';
import Prestations from './Pages/Prestations.js';
import Realisations from './Pages/Realisations.js';
import Review from './Pages/Review'
import Contact from './Pages/Contact.js';
import Navigation from './Navigation.js';



// menu en fixe en haut comme apple (defilement changement de page) 
// utiliser les path avec 
// rsc pour crée des components 
// 

function App() {
  
  return (
    <div className="App">
      <div className="Nav">
        <Navigation />
      </div>
      <Route render={({location}) =>(
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1750} classNames="fade">
            <Switch location={location}>
              <Route path='/' exact component={Home} />
              <Route path='/Prestations'  component={Prestations} />
              <Route path='/Realisations' component={Realisations} />
              <Route path='/Review' component={Review} />
              <Route path='/Contact' exact component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;


/* location permet d'optenir une clef precise (location.key) ex= 8afg2h  */
/* pour la transition ont superpose deux elements au meme moment (300ms) */