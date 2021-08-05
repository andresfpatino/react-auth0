import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div class="card-profile">
            <img src={user.picture} alt=""/>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            {/*<JSONPretty data={user}></JSONPretty> */}
        </div>
        )
    )
}
export default Profile