import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Navbar = () => {
	const [isOpen, changeOpen] = useState(false)
	const [isLoginModal, changeLoginModal] = useState(true)
	const [loggedIn, changeLoggedIn] = useState(localStorage.getItem("token") ? true : false)
	const history = useHistory()

	const openLoginModal = () => {
		changeOpen(true)
		changeLoginModal(true)
	}

	const openSignUpModal = () => {
		changeOpen(true)
		changeLoginModal(false)
	}

	const closeModal = () => {
		changeOpen(false)
	}

	const storeSession = (token) => {
		localStorage.setItem("token", token)
		changeLoggedIn(true)
		closeModal()
	}

	const removeSession = () => {
		changeLoggedIn(false)
		localStorage.removeItem("token")
		history.push("/")
	}

	return (
		<div>
			Navbar
			{
				isOpen ?
				(
					isLoginModal ? 
					<LoginModal close={closeModal} storeSession={storeSession} /> 
					:
					<SignUpModal close={closeModal} storeSession={storeSession} />
				)
				:
				null
			}
			{
				!loggedIn ?
				<>
					<button onClick={openLoginModal}>Login</button>
					<button onClick={openSignUpModal}>SignUp</button>
				</>
				:
				<button onClick={removeSession}>Log Out</button>
			}
		</div>
	)
}

export default Navbar