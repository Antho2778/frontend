import { NavLink } from "react-router-dom";


function NotFound() {
    return (
      <div className='Master_div'>
          <p><span className="404"> 404</span> <br/> <span className="Para404">Page introuveble</span> </p>
          <NavLink exact to="/"  className='' >
              <div className="btn_404">Retournée à l'acceuil</div>
          </NavLink>
      </div>
    );
  }
  
  export default NotFound;