import React from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core'
import CardContents from './CardContents';
import { NavLink } from 'react-router-dom';





function Top_selling() {

    return (
        <>
            <container>
                <Grid container >

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography style={{ width: '90%', marginTop: '30px', fontWeight: 'bolder', color: '#424242', display: 'flex', justifyContent: 'space-evenly' }} component="h4" variant="h4">
                            <span style={{ color: '#E2352D' }}>MACC <span style={{ color: '#424242' }}> TOP SELLINGS</span></span>
                            <NavLink to="/products" style={{ textDecoration: 'none', color: '#424242' }}>

                                <Button style={{ fontSize: '18px' }} variant="contained"  >VIEW ALL</Button>
                            </NavLink>


                        </Typography>
                        <Box style={{ marginTop: '20px', width: '90%', marginLeft: '70px' }}>
                            <CardContents />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                        <img src="img/men.png" alt="men imagee" />
                    </Grid>
                </Grid>

            </container>
        </>
    )
}

export default Top_selling