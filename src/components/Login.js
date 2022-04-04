import React from 'react'
import { Container } from '@mui/material'
import { TextField, Box, Button } from '@mui/material'

export default function Login() {

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(e.target.name.value)
        localStorage.setItem('currentUserName', e.target.name.value)
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
                            '& > :not(style)': { m: 1, width: '40ch', margin: 0, width: '100%' },
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
