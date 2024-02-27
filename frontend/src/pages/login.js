import React, { useState } from 'react';    

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function onSubmit( event ) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again!');
            }

            const data = await response.json();
            // handle response
        } catch(error) {
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false);
        }

        console.log("Submit");
        console.log(event)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label for="email">Email</label> <br/>
                <input type="text" id="email" name="Email" /> <br/>
                <label for="password">Password</label> <br/>
                <input type="text" id="password" name="Password" /><br/>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Submit"}
                </button>   
            </form>
        </div>
    )
}

