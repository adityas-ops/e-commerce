
import React from 'react'
import { Typography, Box, Grid, List, ListItem, TextField, Fab } from '@material-ui/core'
import { NavLink } from 'react-router-dom';



function Footer() {
    return (
        <>
            <Box>
                <Box style={{ color: 'grey', marginTop: '200px', position: 'relative' }}>
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
                                    <NavLink to="/" style={{ color: 'grey', textDecoration: 'none', width: '40%' }}>
                                        <Typography variant="h6">
                                            Home
                                        </Typography>

                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/Collections" style={{ color: 'grey', textDecoration: 'none', width: '40%' }}>

                                        <Typography variant="h6">
                                            Collections
                                        </Typography>
                                    </NavLink>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">
                                        <NavLink to="/products" style={{ color: 'grey', textDecoration: 'none', width: '40%' }}>
                                            products
                                        </NavLink>
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
                                        <NavLink to="/contact" style={{ color: 'grey', textDecoration: 'none', width: '40%' }}>
                                            Contact
                                        </NavLink>
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6">
                                        FAQ
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'center', justifyContent: 'flex-start' }}>
                            <Typography style={{ marginRight: '5px' }} variant="h6">
                                Be the first to know about our biggest and best
                                sales. We'll never send more than one email a
                                month
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>



                <Typography align='center' variant="h6" style={{ bottom: '0', color: '#424242', width: '100%', marginTop: '120px', marginBottom: '70px' }}>
                    All rights Reserved by MaccEssentials
                </Typography>

            </Box>
        </>
    )
}

export default Footer;