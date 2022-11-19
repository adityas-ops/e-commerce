import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import ShowCard from './ShowCard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductss } from './store/productSlice';

function Show() {
    const { data } = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductss());
    }, []);

    const id = useParams();

    // console.log(id.urlId);
    return (
        <div>
            <ShowCard  id={id.urlId} />



        </div>
    )



}

export default Show