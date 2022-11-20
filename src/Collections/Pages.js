import React from 'react'
import { Container, Grid, Box } from '@material-ui/core';
import CareusolCard from '../home/Cereusol/CareusolCard'
import { useEffect, useState } from 'react';
import { STATUSES } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchProductss } from './store/productSlice';
import { fetchProductss } from '../store/productSlice';

import Pagination from '@mui/material/Pagination';
function Pages(props) {

    const { data, status } = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductss());
    }, []);
    const pages = Math.ceil(data.length / 6); ///calsulates how many pages are present
    const [currentpage, setCurrentpage] = useState(1);//fetches current page

    const begin = (currentpage - 1) * 6 //fetches begin index from array
    const end = begin + 6 //fetches end index from array
    const paginate = (pageNumber) => setCurrentpage(pageNumber);

    const items = data.slice(begin, end).map((eve, index) => {
        return (
            <Grid key={index} item xs={6} md={4} lg={4}>
                <CareusolCard
                    name={eve.title}
                    url={eve.image}
                    ogprice={eve.price.toFixed(1)}
                    price={(eve.price).toFixed(2)}
                    id={eve.id}
                />
            </Grid>
        );
    }

    );
    if (status === STATUSES.LOADING) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Container justifyContent='center' style={{ width: '100%', height: '800px' }}>
                <Grid container justifyContent='center' style={{ margin: '0', width: '100%' }}>
                    <Grid container style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {items}

                    </Grid>
                    <Grid item lg={12} md={12}>
                        <Box style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            <Pagination
                                // onChange={handlePagination}
                                count={pages}
                                page={currentpage}
                                boundaryCount={10}
                                siblingCount={3}
                                variant="outlined"
                                shape="rounded"
                                color='warning'
                                size='large'
                                onChange={(e) => { paginate(e.target.textContent) }}
                            />
                        </Box>
                    </Grid>
                </Grid>



            </Container>
        </>
    )
}

export default Pages