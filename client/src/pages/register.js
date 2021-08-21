import React, {useState} from 'react';

const Register = () => {
    
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const createUser = (event) => {
        event.preventDefault();
        console.table({fName, lName, username, phoneNumber, email, password});
    };
    
    return (
        <div>
            <h1>Register</h1>
        <div class="row">
            <form class="col s12" onSubmit={createUser}>
                <div class="row">
                <div class="input-field col s6">
                        <input placeholder="First Name" name="firstName" id="firstName" type="text" class="validate" value={fName} onChange={event => setFName(event.target.value)} required>
                        </input>    
                            <label for="firstName"></label>
                </div>

                <div class="row">
                <div class="input-field col s6">
                        <input placeholder="Last Name" name="lastName" id="lastName" type="text" class="validate" value={lName} onChange={event => setLName(event.target.value)} required>
                        </input>    
                            <label for="lastName"></label>
                </div>
                </div>

                <div class="row">
                <div class="input-field col s12">
                        <input placeholder="Username" name="username" id="username" type="text" class="validate" value={username} onChange={event => setUsername(event.target.value)} required>
                        </input>    
                            <label for="username"></label>
                </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Password" name="password" id="password" type="password"  class="validate" value={password} onChange={event => setPassword(event.target.value)} required>
                        </input>
                            <label for="password"></label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Email" id="email" name="email" type="email" class="validate" value={email} onChange={event => setEmail(event.target.value)} required>
                        </input>
                            <label for="email"></label>

                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Phone Number" id="phone" name="phoneNumber" type="text" class="validate" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} required>
                        </input>
                            <label for="phone number"></label>
                <div class="row">
                <button>Register</button>
                </div>    
                    </div>
                </div>
                </div>
            </form>
    </div>
    </div>
    );
};

export default Register