import React from 'react'
import { Card, Box, CardContent, Typography, CardMedia } from '@material-ui/core'
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
// import CommentIcon from '@material-ui/icons/Comment';
// import ShareIcon from '@material-ui/icons/Share';
// import helper from './helper';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

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
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })



    return (
        <>

            <NavLink style={{ textDecoration: 'none' }} to={`/Show/${props.id}`}>
                <Card
                    onMouseOver={() => setState({ raised: true, shadow: 3 })}
                    onMouseOut={() => setState({ raised: false, shadow: 1 })}
                    raised={state.raised} zDepth={state.shadow}

                    className={card} style={{ textDecoration: 'none' }}>


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