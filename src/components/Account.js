import React, { useContext, useEffect, useState } from 'react'
import { Container, Link, Button } from '@mui/material'
import { UserContext } from '../context/user'

export default function Account() {

    const { user } = useContext(UserContext)
    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/users?name=${user}`)
        .then(r => r.json())
        .then(data => setUserDetails(data[0].following))
    }, [user])

    return (
        <Container maxWidth='lg'>
            {user ?
            <div>
                <h1>Welcome, {user}!</h1>
                <h3>Politicians You're Following:</h3>
                {userDetails.length === 0 ?
                    <>
                        <p>You haven't followed anyone yet!</p>
                        <Link href='/'>
                            <p>Click here to view stock transactions.</p>
                        </Link>
                    </>
                    : 
                    userDetails.map(politician => {
                        return <>
                            <p key={politician}>{politician}</p>
                            <Link href='/'>
                                <p>Click to view more stock transactions.</p>
                            </Link>
                        </>
                    })
                }
            </div>
            :
            <div>
                <h1>Click below to log in!</h1>
                <Link
                    href='/login'
                    exact>
                    <Button variant="contained">
                        Log In
                    </Button>
                </Link>
            </div>}
        </Container>
    )
}
