import React from 'react'
import { Card, Button, Box, CardContent, Typography, CardMedia } from '@material-ui/core'
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
// import CommentIcon from '@material-ui/icons/Comment';
// import ShareIcon from '@material-ui/icons/Share';
// import helper from './helper';
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import Show from '../../Show';

const useStyles = makeStyles({
    card: {
        height: "400px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        margin: '15px',
        justifyContent: 'center',

    }
})




function CareusolCard(props) {
    const { card } = useStyles();
    return (
        <>

            <NavLink to={`/Show/${props.id}`}>
                <Card className={card} style={{}}>


                    <CardMedia
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "70%",
                            height: "250px",
                            zIndex: "1"
                        }}
                        component="img" image={props.url} title="Card" />

                    <CardContent>
                        <Typography variant='h6' style={{ textAlign: 'center' }}>
                            {props.name}




                        </Typography>
                        <Typography variant="h5" style={{ textAlign: 'center' }}>
                            <span style={{ textDecoration: 'line-through' }}>{props.ogprice}₹</span>
                            <span style={{ color: '#E2352D' }}> {props.price}₹</span>
                        </Typography>
                    </CardContent>



                </Card>
            </NavLink>
        </>
    )
}

export default CareusolCard