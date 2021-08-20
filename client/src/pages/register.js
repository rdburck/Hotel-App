import React, {useState} from 'react';

const Register = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const createUser = (event) => {
        event.preventDefault();
        console.table({name, email, password});
    };
    
    return (
        <div>
            <h1></h1>
        <div class="row">
            <form class="col s12" onSubmit={createUser}>
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="username" type="text" class="validate" value={name} onChange={event => setName(event.target.value)} required>
                            <label for="username">Username</label>
                        </input>    
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password"  class="validate" value={password} onChange={event => setPassword(event.target.value)} required>
                            <label for="password">Password</label>
                        </input>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" value={email} onChange={event => setEmail(event.target.value)} required>
                            <label for="email">Email</label>
                        </input>

                    </div>
                </div>
            </form>
    </div>
    </div>
    );
};

export default Register