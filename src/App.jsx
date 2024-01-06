import React,{useState,useEffect} from "react";
import style from "./app.module.css"
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading,getAccessTokenSilently } = useAuth0();

  return (
    <>
        <div className={style.navbar}>
          <div className={style.left}>
            <a href="#"><img src="../public/logo.jpg" alt="none" /></a>
          </div>
          <div className={style.right}>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>Community</li>
              <li>Bill</li>
              {
                isAuthenticated ? ( <button className={style.btn} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                  </button>):(
                  <button className={style.btn} onClick={() => loginWithRedirect()}>Log In</button>
                )
              }
            </ul>
          </div>
        </div>
        <div className={style.middle}>
            <h1>UserName: {user && user.nickname}</h1>
            <h1>Email: {user && user.email}</h1>
        </div>
    </>
  )
}

export default App
