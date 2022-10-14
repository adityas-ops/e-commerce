import React, { useState, useEffect } from 'react'
import { Typography, Box, Grid, Button, Hidden } from '@material-ui/core'
import CardContent from './CardContent';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { Card } from '@material-ui/core';
import CardFeature from './CardFeature';
const style = {
    position: 'relative',
    scrollBehavior: 'smooth',
    height: 700,
    overflow: 'scroll',
    // marginTop: '200px',
    alignSelf: 'center',
    width: '110%',
    margin: '40px',
    marginTop: '200px',
    boxSizing: 'normal',
    scrollSnapType: 'x mandatory',
    scrollSnapAlign: 'start',
    scrollbarWidth: 'none',
    overflowX: 'auto',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
};

function Feature() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',

        })
            .then((eve) => {
                console.log(eve.data);
                setData(eve.data);

            })
            .catch((err) => {
                console.log(err);
            })
            .finally((done) => {
                setLoading(false);
            });
        setLoading(false);
    }, []);

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
                                <Button onClick={handleOpen} style={{ fontSize: '18px' }} variant="contained"  >VIEW ALL</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    style={style}

                                >
                                    <Box style={{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Grid container style={{ width: '90%', height: '100%' }}>
                                            {
                                                data.map((items) => {
                                                    return (
                                                        <>
                                                            <Grid sx={4} style={{ width: '300px' }} >

                                                                <CardFeature
                                                                    key={items.id}
                                                                    id={items.id}
                                                                    name={items.title.slice(0, 50)}
                                                                    price={items.price}
                                                                    ogprice={items.price + 100}
                                                                    url={items.image} />

                                                            </Grid>
                                                        </>
                                                    )

                                                })
                                            }
                                        </Grid>

                                    </Box>

                                </Modal>

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