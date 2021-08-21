import React from 'react';

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" name="username" id="username" type="text" class="validate">
                        </input>    
                            <label for="username">Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input name="password" id="password" type="password"  class="validate">
                        </input>
                            <label for="password">Password</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
