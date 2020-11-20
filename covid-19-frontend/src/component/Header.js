
import { Link } from "react-router-dom";

export const Header = () => {

  

  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <Link to="/">Covid 2020</Link>
        </div>
        <div className="header-menu">

          <form >
            
            <input type="search" name="csearch" placeholder="Enter Country" />
            <input type="submit" value="Search" />
          </form>
          {/* <Link to="/signup">Sign Up</Link>
             <Link to="/singIn">Sign In</Link> */}
        </div>
      </div>
    </div>
  );
};
