import React, { useEffect } from 'react'
import { Typography, Box, Grid } from '@material-ui/core'
import CareusolCard from '../home/Cereusol/CareusolCard';
import { STATUSES } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductss } from '../store/productSlice';
function Products() {
    const { data, status } = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductss());
    }, []);


    if (status === STATUSES.LOADING) {
        return <h1>Loading...</h1>
    }
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