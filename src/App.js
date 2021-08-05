import './App.css';
import LoginButton from './components/loginButton';
import Profile from './components/profile';
import LogoutButton from './components/LogoutButton';

import { useAuth0 } from "@auth0/auth0-react";

function App() {

const {isAuthenticated, isLoading} = useAuth0()

	if (isLoading) return <h1>Loading...</h1>

	return (
		<div className="App" class="app">
			<h1>Auth0 login</h1>
			{ isAuthenticated ? <LogoutButton/> : <LoginButton/> }
			<Profile/>
		</div>
	);
}

export default App;
