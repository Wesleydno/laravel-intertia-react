import React from 'react'
import route from 'ziggy-js';
import { Link } from '@inertiajs/inertia-react'

function LoginPage(){
    return(
        <div>
            <h1>Login Page</h1>
            <div>
              <p><Link replace href={route("home")}>Home</Link></p>
              <p><Link replace href={route("login")}>Login</Link></p>
            </div>
        </div>
    )
}

export default LoginPage;
