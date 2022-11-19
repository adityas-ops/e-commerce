import React from 'react'
import { Typography, Grid, Button, Box, TextField } from '@material-ui/core'

import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useNavigate } from 'react-router-dom';




function Checkout() {
    let navigate = useNavigate();
    return (
        <>
            <Box style={{ margin: '25px', fontWeight: 'lighter' }} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant='h4' style={{ marginTop: '12px' }} >
                            CHECKOUT
                        </Typography>
                        <Typography variant='h6' style={{ marginTop: '12px' }} >
                            Delivery Address
                        </Typography>
                        <Box style={{ marginTop: '20px', width: '100%', fontFamily: 'sans-serif' }} >
                            <Box style={{ width: '100%', display: 'flex' }}>
                                <TextField style={{ width: '350px', margin: '5px' }} id="outlined-basic" defaultValue="John" variant="outlined" />
                                <TextField style={{ width: '350px', margin: '5px' }} id="outlined-basic" defaultValue="Wick" variant="outlined" />

                            </Box>
                            <Box style={{ width: '100%', marginTop: '15px' }}>
                                <TextField style={{ width: '99%' }} id="outlined-basic" defaultValue="Street 32. Pasror road. Daska" variant="outlined" />
                            </Box>
                            <Box style={{ width: '100%', marginTop: '15px' }}>
                                <TextField style={{ width: '99%' }} id="outlined-basic" defaultValue="N/A" variant="outlined" />
                            </Box>
                            <Box style={{ width: '100%', display: 'flex', marginTop: '15px' }}>
                                <TextField style={{ width: '350px', margin: '5px' }} id="outlined-basic" defaultValue="51010" variant="outlined" />
                                <TextField style={{ width: '350px', margin: '5px' }} id="outlined-basic" defaultValue="Sialkoat" variant="outlined" />

                            </Box>
                            <Box style={{ width: '100%', marginTop: '15px' }}>
                                <TextField style={{ width: '99%' }} id="outlined-basic" defaultValue="+9112345678" variant="outlined" />
                            </Box>
                            <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', marginTop: '100px' }}>

                                <Button onClick={() => navigate(-1)} ><ChevronLeftOutlinedIcon />  Go Back To Product</Button>
                                <Button variant="contained" style={{ backgroundColor: 'red', color: 'white', width: '40%', height: '50px', fontSize: '18px' }}  >Save & Continue</Button>
                            </Box>


                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <img src="img/feature1.png" alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Checkout