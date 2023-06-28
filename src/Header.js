import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import userService from "./services/UserService";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    userService.checkCredentials()
      .then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      }).catch(err => {

      });
  }, []);

  function logout() {
    userService.logout();
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MERN Blog</Link>
      <nav>
        {username && (
          <>
            <span>Hello, {username}!</span>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
