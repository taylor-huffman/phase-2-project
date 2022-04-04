import React, { useContext } from 'react'
import { Container } from '@mui/material'
import { UserContext } from '../context/user'

export default function Account() {

    const user = useContext(UserContext)

    return (
        <Container maxWidth='lg'>
            <div>
                <h1>Welcome back, {user.name}!</h1>
            </div>
        </Container>
    )
}
