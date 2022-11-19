import React from 'react'
import CardFeatures from './CardFeatures'
import { useEffect } from 'react';
import Carousel from 'react-grid-carousel'
import { STATUSES } from '../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductss } from '../../store/productSlice';


function CardContents() {

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
            <Carousel cols={2} gap={18} rows={1} showDots autoplay={3000} loop={true} arrowRight dotColorActive='red' >
                {
                    data.map(items => (
                        <Carousel.Item>
                            < CardFeatures
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

export default CardContents