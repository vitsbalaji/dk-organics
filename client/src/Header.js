import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  },[]);

function logout() {
  fetch ('http://localhost:4000/logout', {
    credentials: 'include',
    method: 'POST',
  });
  setUserInfo(null);
}

const username = userInfo?.username;


  return (
    <header>
      <Link to="/product" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout</Link>
            <Link to="/pdf">Pdf-Letter </Link>
            <Link to="/pdf">Billing </Link>
            <Link to="/engt">Product Description</Link>
            <Link to="/farmerpdf">Farmer/Distributors Pdf</Link>

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