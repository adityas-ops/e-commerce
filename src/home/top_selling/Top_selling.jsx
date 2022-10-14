import React from 'react'
import { Typography, Box, Grid, Button, Hidden } from '@material-ui/core'
import CardContents from './CardContents';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import CardFeatures from './CardFeatures';
import { useState, useEffect } from 'react'


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

function Top_selling() {
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
            <container>
                <Grid container >

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography style={{ width: '90%', marginTop: '30px', fontWeight: 'bolder', color: '#424242', display: 'flex', justifyContent: 'space-evenly' }} component="h4" variant="h4">
                            <span style={{ color: '#E2352D' }}>MACC <span style={{ color: '#424242' }}> TOP SELLINGS</span></span>
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

                                                                <CardFeatures
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