import React, { useContext } from 'react'
import { Container } from '@mui/material'
import { TextField, Box, Button } from '@mui/material'
import { UserContext } from '../context/user'
import { useHistory } from 'react-router-dom'

export default function Login() {

    const { setUser } = useContext(UserContext)
    const history = useHistory()

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(e.target.name.value)
        localStorage.setItem('currentUserName', e.target.name.value)
        setUser(e.target.name.value)
        fetch(`http://localhost:4000/users?name=${localStorage.getItem('currentUserName')}`)
        .then(r => r.json())
        .then(data => {
            debugger
            if (data.length === 0) {
                fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: e.target.name.value,
                    following: []
                })
                })
                .then(r => r.json())
                .then(data => {
                    console.log(data)
            })
            }
        })
        history.push('/account')
    }

  return (
    <Container maxWidth='lg'>
        <div>
            <h1>Login</h1>
            <form onSubmit={handleOnSubmit}>
            <Box
                // component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch', display: 'flex', flexDirection: 'column', margin: '25px auto' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Name" name='name' variant="outlined" />
                <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                }}
                >
                    <Button
                        // component="form"
                        variant="contained"
                        sx={{
                            '& > :not(style)': { m: 1, margin: 0, width: '100%' },
                        }}
                        type="submit"
                        >
                        Log In
                    </Button>
                </Box>
            </Box>
            </form>
        </div>
    </Container>
  )
}
