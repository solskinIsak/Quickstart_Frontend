import React, { useState, useEffect } from "react"
import facade from "./apiFacade";
import Content from "./components/Content.jsx";
import Header from "./components/Header.jsx";
import About from "./routes/About.jsx";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ username: "", roles: "" });

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setUser({ username: "", roles: "" })
  }
  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      const token = facade.readJwtToken(facade.getToken());
      setUser({ username: token.username, roles: token.roles });
      setLoggedIn(true);
    });
  }

  return (
    <div>
      <Header loggedIn={loggedIn} login={login} user={user} logout={logout}/>
      <Content user={user}/>
    </div>
  )
}




export default App;