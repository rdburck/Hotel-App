import React from 'react';

const Login = () => {

    return (
        <div>
            <form>
                <div class="row">
                    <div class="input-field col s6">
                        <input placeholder="Placeholder" id="username" type="text" class="validate">
                            <label for="username">Username</label>
                        </input>    
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password"  class="validate">
                            <label for="password">Password</label>
                        </input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
