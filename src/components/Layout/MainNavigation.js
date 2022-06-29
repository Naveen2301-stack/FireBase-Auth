import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React App</div>
      </Link>

      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth" id="login">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/profile" id = "profile">Profile</Link>
            </li>
          )}

          {isLoggedIn && (
            <li id ="logout">
              <button onClick={logoutHandler} >Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
