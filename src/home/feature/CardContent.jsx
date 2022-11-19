import React from 'react'
import CardFeature from './CardFeature'
import { useEffect } from 'react';
import Carousel from 'react-grid-carousel';
import { STATUSES } from '../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductss } from '../../store/productSlice';

function CardContent() {


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