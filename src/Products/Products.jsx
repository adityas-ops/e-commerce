// import React from 'react'
import React, { useState, useEffect } from 'react'
import { Typography, Box, Grid } from '@material-ui/core'
import axios from 'axios';

import CareusolCard from '../home/Cereusol/CareusolCard';
function Products() {
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
                <Typography variant="h4" style={{ color: 'gray', fontWeight: 'bold', marginTop: '100px', marginBottom: '50px', textAlign: 'center' }}>Products</Typography>
                <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Grid container spacing={2} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            data.map((items) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={12} md={3} lg={3} style={{ margin: '0px' }} >

                                            <CareusolCard
                                                key={items.id}
                                                id={items.id}
                                                name={items.title.slice(0, 50)}
                                                price={items.price.toFixed()}
                                                ogprice={(items.price + 40).toFixed()}
                                                url={items.image} />

                                        </Grid>
                                    </>
                                )

                            })
                        }
                    </Grid>

                </Box>
            </container>
        </>
    )
}

export default Products