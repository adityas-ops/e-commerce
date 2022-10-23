import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Typography, Box, Grid, TextField, Fab } from '@material-ui/core'

function Signin() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Grid container spacing={2} style={{ width: '100%', marginTop: '30px' }}>
                    <Grid item xs={12} md={12} lg={12} style={{}}>
                        <Typography variant="h4" style={{ fontWeight: 'bolder', color: '#3A408C', marginBottom: '5px' }}>
                            <span style={{ color: '#e2352d' }}>Sign</span> In
                        </Typography>
                        <Typography variant="h6" style={{ color: 'grey', textAlign: 'center' }}>
                            Sign in to continue to Macc Essentials
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
                        <Box style={{ marginTop: '25px', textAlign: 'center' }}>

                            <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '100%' }}>

                                <PersonOutlineOutlinedIcon style={{ color: 'grey' }} />
                                <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '400px', marginLeft: '10px' }} />
                            </Box>
                            <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <LockOutlinedIcon style={{ color: 'grey' }} />
                                <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '400px', marginLeft: '10px' }} />
                            </Box>

                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Fab variant="extended" style={{ backgroundColor: '#3A408C', color: 'white', width: '50%' }}>
                                    Sign In
                                </Fab>
                            </Box>
                        </Box>
                        <Box style={{ width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
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
                        {/* </Box> */}
                    </Grid>
                </Grid>
            </Box>



        </>
    )
}

export default Signin