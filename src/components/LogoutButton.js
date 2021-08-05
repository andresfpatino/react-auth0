import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout} = useAuth0()
    return (
        <button class="button button--logout"  onClick="{() => logout()}"> Logout </button>
    )
}

export default LogoutButton