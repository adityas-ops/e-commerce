import { Container, Grid, Typography } from '@material-ui/core';
import CareusolCard from './CareusolCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-grid-carousel';





function Main(props) {
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
                        {loading && <p>Loading...</p>}
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
