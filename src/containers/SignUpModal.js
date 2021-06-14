import {useState} from 'react'
import axios from 'axios'

const SignUpModal = ({close, storeSession}) => {
	const [username, changeUsername] = useState("")
	const [email, changeEmail] = useState("")
	const [password, changePassword] = useState("")

	const signUp = () => {
		axios.post("https://insta.nextacademy.com/api/v1/users/", {
			username, password, email
		})
		.then((resp) => {
			storeSession(resp.data.auth_token)
		})
	}

	return (
		<div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
			Sign Up
			<input type="email" value={email} onChange={(e) => changeEmail(e.target.value)}/>
			<input type="text" value={username} onChange={(e) => changeUsername(e.target.value)}/>
			<input type="password" value={password} onChange={(e) => changePassword(e.target.value)}/>
			<button onClick={signUp}>Sign Up</button>
			<button onClick={close}>X</button>
		</div>
	)
}

export default SignUpModal