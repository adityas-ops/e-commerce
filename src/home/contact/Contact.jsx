import React from 'react'
import { Box, Grid, TextField, Fab, Typography } from '@material-ui/core'
import EmailIcon from '@mui/icons-material/EmailOutlined';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

function Contact() {
    return (
        <>
            <Grid container style={{ marginTop: '30px' }}>
                <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box style={{ width: '40%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h3" style={{ fontFamily: 'Monotype Corsiva', color: 'gray', fontWeight: 'bolder' }}>
                            Contact Us
                        </Typography>

                        <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Name"
                                multiline
                                rows={1}
                                variant="outlined"
                                style={{ width: '100%', marginTop: '20px' }}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Email"
                                multiline
                                rows={1}
                                variant="outlined"
                                style={{ width: '100%', marginTop: '20px' }}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{ width: '100%', marginTop: '20px' }}
                            />
                            <Fab variant="extended" style={{ backgroundColor: '#3A408C', color: 'white', marginTop: '50px' }}>
                                <EmailIcon sx={{ mr: 1 }} />
                                Send
                            </Fab>
                        </Box>
                        <Typography variant="h6" style={{ fontFamily: 'Monotype Corsiva', color: 'gray', fontWeight: 'bolder', marginTop: '20px' }}>
                            We are here to help you
                        </Typography>
                        <Box style={{ display: 'flex', marginTop: '10px' }} >
                            {/* <Button variant="contained" style={{ backgroundColor: '#e2352d', color: '#ffff', fontWeight: 'bolder', height: '35px', borderRadius: '50%' }}>S</Button> */}
                            <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '15px' }} variant="circular">
                                <Twitter style={{ borderRadius: '50%', fontSize: '25px' }} />
                            </Fab>
                            <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '15px' }} variant="circular">
                                <LinkedIn style={{ borderRadius: '50%', fontSize: '25px' }} />
                            </Fab>
                            <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '15px' }} variant="circular">
                                <Facebook style={{ borderRadius: '50%', fontSize: '25px' }} />
                            </Fab>
                            <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '15px' }} variant="circular">
                                <Instagram style={{ borderRadius: '50%', fontSize: '25px' }} />
                            </Fab>
                        </Box>
                    </Box>

                </Grid>


            </Grid>
        </>
    )
}

export default Contact