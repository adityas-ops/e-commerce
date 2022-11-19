import { Container, Grid, Typography } from '@material-ui/core';
import CareusolCard from './CareusolCard';
import { useEffect } from 'react';
import Carousel from 'react-grid-carousel';
import { STATUSES } from '../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductss } from '../../store/productSlice';

function Main(props) {

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
            <Container justifyContent='center' style={{ width: '100%', height: '100vh', marginTop: '100px' }}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{ display: 'grid', placeItems: 'center' }}
                    >
                        <Typography variant="h4" style={{ fontWeight: 'bolder', color: 'red', marginBottom: '30px' }}>
                            {props.heading1} <span style={{ color: 'darkblue' }}>{props.heading2}</span>
                        </Typography>

                    </Grid>
                    <Grid justifyContent='center' item xs={12} md={12} lg={12}>

                        <Carousel style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} cols={3} rows={1} showDots autoplay={3000} loop={true} dotColorActive='red' >
                            {
                                data.map(items => (


                                    <Carousel.Item>

                                        <CareusolCard
                                            key={items.id}
                                            id={items.id}
                                            name={items.title.slice(0, 50)}
                                            price={items.price}
                                            ogprice={items.price + 100}
                                            url={items.image}
                                            style={{ margin: '50px' }}
                                        />


                                    </Carousel.Item>

                                ))

                            }


                        </Carousel>

                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default Main;
