import React, { useState } from 'react'
import { Typography, Box, Grid, TextField, Button } from '@material-ui/core'
import Paper from '@mui/material/Paper';
// import {history} from 'React-router-dom'
import { useNavigate } from 'react-router-dom'






function Signup() {
    let navigate = useNavigate();



    const [state, setState] = useState({
        eve: 3
    })
    const [but, setBut] = useState({
        width: '100px',
        raised: false,

    })

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Box style={{ width: '100%', marginTop: '30px' }}>


                    <Grid container spacing={2} style={{ width: '100%', marginTop: '10px' }}>
                        <Grid item xs={12} md={12} lg={12} style={{}}>
                            <Typography variant="h4" style={{ width: '100%', fontWeight: 'bolder', color: 'gray', marginBottom: '5px' }}>
                                Sign Up
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} style={{ width: '100%', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>

                            <Paper
                                onMouseOver={() => setState({ eve: 18 })}
                                onMouseOut={() => setState({ eve: 3 })}
                                // raised={state.raised} zDepth={state.shadow}
                                elevation={`${state.eve}`} style={{ width: '500px', height: '500px' }} >
                                <Box style={{ marginTop: '100px' }}>

                                    <Box style={{ marginTop: '50px' }}>
                                        <TextField id="standard-basic" label="First Name" variant="standard" style={{ width: '200px', margin: '7px' }} />
                                        <TextField id="standard-basic" label="Last Name" variant="standard" style={{ width: '200px', margin: '7px' }} />

                                    </Box>
                                    <Box style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <TextField id='standard-basic' label="Email" variant='standard' style={{ width: '85%' }} />
                                    </Box>
                                    <Box style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <TextField id='standard-basic'
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant='standard' style={{ width: '85%' }} />
                                    </Box>
                                    <Box style={{ width: '100%', marginTop: '50px' }}  >
                                        <Button raised={but.raised} variant="contained" onMouseOver={() => { setBut({ width: '200px', raised: true }) }} onMouseOut={() => { setBut({ width: '100px' }) }} style={{ width: but.width, backgroundColor: '#3A408C', color: 'white' }}> Submit</Button>
                                    </Box>

                                </Box>
                                <Button onClick={() => navigate(-1)} style={{ marginTop: '20px', color: '#3A408C', textDecoration: 'underline' }}>Already have an account? Sign In</Button>
                            </Paper>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Signup