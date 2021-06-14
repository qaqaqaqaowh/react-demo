import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'

const UserProfile = () => {
	const {id} = useParams()
	const [user, setUser] = useState(null)
	const history = useHistory()

	useEffect(() => {
		if (id == "me" && localStorage.getItem("token")) {
			axios.get("https://insta.nextacademy.com/api/v1/users/me", {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token")
				}
			})
			.then(resp => setUser(resp.data))
		} else if (!isNaN(id)) {
			axios.get("https://insta.nextacademy.com/api/v1/users/" + id)
			.then(resp => setUser(resp.data))
		} else {
			history.push("/")
		}
	}, [])

	if (!user) {
		return "Profile"
	} else {
		return user.username
	}
}

export default UserProfile