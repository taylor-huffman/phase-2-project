import React, { useContext, useEffect } from 'react'
import { Container, Link, Button } from '@mui/material'
import { UserContext } from '../context/user'

export default function Account() {

    const { user } = useContext(UserContext)

    useEffect(() => {
        fetch(`http://localhost:4000/users?name=${user}`)
        .then(r => r.json())
        .then(data => console.log(data))
      }, [user])

    return (
        <Container maxWidth='lg'>
            {user ?
            <div>
                <h1>Welcome, {user}!</h1>
            </div>
            :
            <div>
                <h1>Click below to log in!</h1>
                <Link
                    href='/login'
                    exact
                >
                    <Button variant="contained">
                        Log In
                    </Button>
                </Link>
            </div>}
        </Container>
    )
}
