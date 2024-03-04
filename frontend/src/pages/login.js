import React, { useState } from 'react';    

// TODO: give styling
export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function onSubmit( event ) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData(event.target);

            console.log(formData.get("remember"));

            const reponse = await fetch('http://localhost:3001/', {
                method: 'GET',
            })

            // Fetch data
            // TODO: change the api
            // const response = await fetch('http://localhost:3031/login', {
            //     method: 'POST',
            //     body: formData
            // })

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again!');
            }

            // Handle Response
            const data = await response.json();
            console.log(data)
        } catch(error) {
            setError(error.message);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label for="email">Email</label> <br/>
                <input type="text" id="email" name="email" /> <br/>
                
                <label for="password">Password</label> <br/>
                <input type="text" id="password" name="password" /> <br/>
                
                <input type="checkbox" id="remember" name="remember" />
                <label for="remember">Remember me</label> <br/>
                <button type="submit" disabled={isLoading}>
                    Login
                </button>   
            </form>
        </div>
    )
}

