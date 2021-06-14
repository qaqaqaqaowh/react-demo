import {useState} from 'react'
import axios from 'axios'

const LoginModal = ({close, storeSession}) => {
	const [username, changeUsername] = useState("")
	const [password, changePassword] = useState("")

	const login = () => {
		axios.post("https://insta.nextacademy.com/api/v1/login", {
			username, password
		})
		.then((resp) => {
			storeSession(resp.data.auth_token)
		})
	}

	return (
		<div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
			<input type="text" value={username} onChange={(e) => changeUsername(e.target.value)}/>
			<input type="password" value={password} onChange={(e) => changePassword(e.target.value)}/>
			<button onClick={login}>Login</button>
			<button onClick={close}>X</button>
		</div>
	)
}

export default LoginModal