import React from 'react'
import { Typography, Box, Grid, List, ListItem, TextField, Fab } from '@material-ui/core'
// import EmailIcon from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

function Guildlines() {
    return (
        <>
            <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <Typography align='center' style={{ marginTop: '30px', fontWeight: 'bolder', color: '#424242' }} component="h3" variant="h3">
                    <span style={{ color: '#E2352D' }}> COVID-19 <span style={{ color: 'black' }}> GUIDELINES</span></span>
                </Typography>
                <Box style={{ width: '50%', marginTop: '35px' }}>

                    <Typography align='center' style={{ fontSize: '18px', color: 'grey', fontWeight: 'lighter' }}>
                        Please remember to adhere all covid-19 guidelines. Precaution is key to
                        survive this pandemic. Stay at home and Stay safe.
                    </Typography>
                </Box>
                <Box style={{ marginTop: '70px', color: 'grey' }}>
                    <Grid container >
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            {/* <img style={{ height: '150px', width: '150px' }} src="img/logo.png" alt="" /> */}
                            <Typography align='center' style={{ fontFamily: "Monotype Corsiva", fontSize: '3.8rem', color: '#e2352d' }}>
                                Macc
                            </Typography>
                            <Typography align='center' style={{ fontFamily: "Monotype Corsiva", fontSize: '2.8rem', color: '#3A408C', fontWeight: 'bolder' }}>
                                Essentials
                            </Typography>
                        </Grid>
                        <Grid item textAlign="center" xs={6} sm={6} md={3} lg={3} style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'center', justifyContent: 'center' }}>
                            <List>
                                <ListItem>
                                    <Typography variant="h6">
                                        Home
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">
                                        Collections
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">
                                        products
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'center', justifyContent: 'center' }}>
                            <List>
                                <ListItem>
                                    <Typography variant="h6">
                                        About
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">
                                        Contact
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">
                                        FAQ
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'center', justifyContent: 'center' }}>
                            <Typography variant="h6">
                                Be the first to know about our biggest and best
                                sales. We'll never send more than one email a
                                month
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Grid xs={12} sm={12} md={12} lg={12} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}  >
                    <TextField label="Enter Your Email" style={{ backgroundColor: '#ffff', color: 'grey', margin: '50px', width: '22.2%' }} InputProps={{ endAdornment: <EmailIcon /> }} />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginRight: '340px' }} >
                    {/* <Button variant="contained" style={{ backgroundColor: '#e2352d', color: '#ffff', fontWeight: 'bolder', height: '35px', borderRadius: '50%' }}>S</Button> */}
                    <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '5px' }} variant="circular">
                        <Twitter style={{ borderRadius: '50%', fontSize: '25px' }} />
                    </Fab>
                    <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '5px' }} variant="circular">
                        <LinkedIn style={{ borderRadius: '50%', fontSize: '25px' }} />
                    </Fab>
                    <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '5px' }} variant="circular">
                        <Facebook style={{ borderRadius: '50%', fontSize: '25px' }} />
                    </Fab>
                    <Fab style={{ color: '#ffff', backgroundColor: '#3A408C', height: '40px', width: '40px', margin: '5px' }} variant="circular">
                        <Instagram style={{ borderRadius: '50%', fontSize: '25px' }} />
                    </Fab>
                </Grid>

                <Typography align='center' variant="h6" style={{ bottom: '0', color: '#424242', padding: '10px', width: '100%', marginTop: '120px', marginBottom: '120px' }}>
                    All rights Reserved by MaccEssentials
                </Typography>

            </Box>
        </>
    )
}

export default Guildlines