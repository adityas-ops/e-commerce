import React from 'react'
import { Typography, Grid, Button, Box, TextField } from '@material-ui/core'
import { useRef } from 'react';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useNavigate } from 'react-router-dom';




function Checkout() {
    let navigate = useNavigate();
    const firstName = useRef(null);
    const lastName = useRef(null);
    const address = useRef();
    const address2 = useRef();
    const city = useRef();
    const zip = useRef();
    const mobile = useRef();



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
                                <TextField
                                    style={{ width: '350px', margin: '5px' }}
                                    id="outlined-basic"
                                    placeholder='First Name'
                                    //="John"
                                    variant="outlined"
                                    autoFocus={true}
                                    inputRef={firstName}
                                    inputProps={{
                                        onKeyPress: event => {
                                            const { key } = event;
                                            console.log(key);
                                            if (key === "Enter") {
                                                lastName.current.focus();
                                            }
                                        }
                                    }}
                                />
                                <TextField
                                    style={{ width: '350px', margin: '5px' }}
                                    id="outlined-basic"
                                    placeholder='Last Name'
                                    //="Wick"
                                    variant="outlined"
                                    // autoFocus={true}
                                    inputRef={lastName}
                                    inputProps={{
                                        onKeyPress: event => {
                                            const { key } = event;
                                            console.log(key);
                                            if (key === "Enter") {
                                                address.current.focus();
                                            }
                                        }
                                    }}
                                />

                            </Box>
                            <Box style={{ width: '100%', marginTop: '15px' }}>
                                <TextField
                                    style={{ width: '99%' }}
                                    id="outlined-basic"
                                    placeholder='Address-1'
                                    //="Street 32. Pasror road. Daska"
                                    variant="outlined"
                                    // autoFocus={true}
                                    inputRef={address}
                                    inputProps={{
                                        onKeyPress: event => {
                                            const { key } = event;
                                            console.log(key);
                                            if (key === "Enter") {
                                                address2.current.focus();
                                            }
                                        }
                                    }}


                                />
                            </Box>
                            <Box style={{ width: '100%', marginTop: '15px' }}>
                                <TextField
                                    style={{ width: '99%' }}
                                    id="outlined-basic"
                                    placeholder='Address-2'
                                    //="N/A"
                                    variant="outlined"
                                    // autoFocus={true}
                                    inputRef={address2}
                                    inputProps={{
                                        onKeyPress: event => {
                                            const { key } = event;
                                            console.log(key);
                                            if (key === "Enter") {
                                                zip.current.focus();
                                            }
                                        }
                                    }}
                                />
                            </Box>
                            <Box style={{ width: '100%', display: 'flex', marginTop: '15px' }}>
                                <TextField
                                    style={{ width: '350px', margin: '5px' }}
                                    id="outlined-basic"
                                    placeholder='Pin code'
                                    //="51010"
                                    variant="outlined"
                                    // autoFocus={true}
                                    inputRef={zip}
                                    inputProps={{
                                        onKeyPress: event => {
                                            const { key } = event;
                                            console.log(key);
                                            if (key === "Enter") {
                                                city.current.focus();
                                            }
                                        }
                                    }}
                                />
                                <TextField
                                    style={{ width: '350px', margin: '5px' }}
                                    id="outlined-basic"
                                    placeholder='City'
                                    variant="outlined"

                                    inputRef={city}
                                    inputProps={{
                                        onKeyPress: event => {
                                            const { key } = event;
                                            console.log(key);
                                            if (key === "Enter") {
                                                mobile.current.focus();
                                            }
                                        }
                                    }}

                                />

                            </Box>
                            <Box style={{ width: '100%', marginTop: '15px' }}>
                                <TextField
                                    style={{ width: '99%' }}
                                    id="outlined-basic"
                                    defaultValue="+91"

                                    variant="outlined"
                                    // autoFocus={true}
                                    placeholder='Mobile Number'
                                    inputRef={mobile}

                                />
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