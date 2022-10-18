import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';



function Show() {
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

    const id = useParams();

    console.log(id.urlId);
    return (
        <div>
            <ShowCard data={data} id={id.urlId} />
            


        </div>
    )



}

export default Show