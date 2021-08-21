import API from "../../../API";
import React, {useRef, useState} from "react";
import axios from "axios";

const Post = () => {
	//useRef alwaus returns a current objet with all of our info inside of it.
	const userInput = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const email = useRef();
    const password = useRef();

	const [alert, setAlert] = useState()
	
	const clearAlert = () => {
		setTimeout(() => {
			setAlert(null);
		}, 5000);
	};

	const postNew = () => {
		const input = userInput.current.value;

		if(!input){
			setAlert(<div className="error">Please Enter A Note</div>)
			clearAlert();
			return;
		} else {
			setAlert(<div className="success">New User Added</div>)
			clearAlert();
			API.postTest({ message: input })
				.then((data) => {
					console.log(data);
				})
				.catch((err) => console.log(err));
		}

        const data = {
            fName: firstName.current.value,
            lname: lastName.current.value,
            email: email.current.value,
            username: username.current.value,
            phoneNumber: phonenumber.current.value,
        }

		axios.post('/api/users/login', data.then().catch())
	};

	return (
		<div>
		<input ref={userInput} placeholder="Note"></input>
		<div>{alert}</div>
		<button className="btn blue" onClick={postNew}>
			Click To Post
		</button>

		</div>
	);
};

export default Post;
