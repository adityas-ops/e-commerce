import React from 'react'
import { Typography, Box, Grid, Button, Hidden } from '@material-ui/core'
import CardContent from './CardContent';
function Feature() {
    return (
        <>
            <container style={{ paddingBottom: '100px' }}>
                <Grid container >

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src="img/feature.png" alt="feature imagee" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <Typography style={{ width: '90%', marginTop: '30px', fontWeight: 'bolder', color: '#424242', display: 'flex', justifyContent: 'space-evenly' }} component="h4" variant="h4">
                            <span style={{ color: '#E2352D' }}>MACC <span style={{ color: '#424242' }}> WEEKLY DISCOUNT</span></span>
                            <Hidden xsDown>
                                <Button style={{ fontSize: '18px' }} variant="contained"  >VIEW ALL</Button>
                            </Hidden>
                        </Typography>
                        <Box style={{ marginTop: '20px', width: '90%' }}>
                            <CardContent />
                        </Box>
                    </Grid>
                </Grid>

            </container>
        </>
    )
}

export default Feature