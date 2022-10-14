import React from 'react'
import CardFeature from './CardFeature'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-grid-carousel'

function CardContent() {


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
            {loading && <p>Loading...</p>}
            <Carousel cols={2} rows={1} showDots autoplay={3000} arrowLeft loop dotColorActive='red' >
                {
                    data.map(items => (
                        <Carousel.Item>
                            <CardFeature
                                key={items.id}
                                id={items.id}
                                name={items.title.slice(0, 50)}
                                price={items.price}
                                ogprice={items.price + 100}
                                url={items.image} />
                        </Carousel.Item>
                    ))

                }


            </Carousel>
        </>
    )
}

export default CardContent