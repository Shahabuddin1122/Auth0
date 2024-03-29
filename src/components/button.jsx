import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function button(props) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
        {
          isAuthenticated ? ( <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
            </button>):(
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )
        }
        <p>{user.email}</p>
    </>
  )
}

export default button
