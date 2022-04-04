import React, { useContext } from 'react'
import { Container, Link, Button } from '@mui/material'
import { UserContext } from '../context/user'

export default function Account() {

    const { user } = useContext(UserContext)

    return (
        <Container maxWidth='lg'>
            {user ?
            <div>
                <h1>Welcome back, {user}!</h1>
            </div>
            :
            <div>
                <h1>Click below to sign in!</h1>
                <Link
                    href='/login'
                    exact
                >
                    <Button variant="contained">
                        Sign In
                    </Button>
                </Link>
            </div>}
        </Container>
    )
}
