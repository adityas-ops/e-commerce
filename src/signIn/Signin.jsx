import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Typography, Box, Grid, List, ListItem, TextField, Fab } from '@material-ui/core'

function Signin() {
    return (
        <>
            <Box style={{ margin: '0px', width: '100%', height: '60vh' }}>
                <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <Box style={{ width: '80%' }}>
                                <Typography variant="h4" style={{ fontWeight: 'bolder', color: '#3A408C', textAlign: 'center' }}>
                                    <span style={{ color: '#e2352d' }}>Sign</span> In
                                </Typography>
                                <Typography variant="h6" style={{ color: 'grey', textAlign: 'center' }}>
                                    Sign in to continue to Macc Essentials
                                </Typography>
                                <Box style={{ marginTop: '50px' }}>

                                    <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>

                                        <PersonOutlineOutlinedIcon style={{ color: 'grey' }} />
                                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', marginLeft: '10px' }} />
                                    </Box>
                                    <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                        <LockOutlinedIcon style={{ color: 'grey' }} />
                                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '100%', marginLeft: '10px' }} />
                                    </Box>

                                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <Fab variant="extended" style={{ backgroundColor: '#3A408C', color: 'white', width: '50%' }}>
                                            Sign In
                                        </Fab>
                                    </Box>
                                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
                                        <Typography variant="h6" style={{ width: '100%', color: 'grey', wordWrap: 'none' }}>
                                            Forgot Password?
                                        </Typography>
                                        {/* </Box> */}

                                        <Box style={{ width: '100%', textAlign: 'end' }}>
                                            <Typography variant="h6" style={{ color: 'grey' }}>
                                                Don't have an account?
                                            </Typography>
                                            <Box style={{}}>

                                                <NavLink to="/signup" style={{ textDecoration: 'none', color: '#3A408C', marginLeft: '10px', }}>
                                                    Sign Up
                                                </NavLink>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}

export default Signin