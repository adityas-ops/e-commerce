import React from 'react'
import { Card, CardMedia, Box, CardContent, Typography } from '@material-ui/core'
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
// import CommentIcon from '@material-ui/icons/Comment';
// import ShareIcon from '@material-ui/icons/Share';
// import helper from './helper';

const useStyles = makeStyles({
    card: {
        height: "400px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        margin: '15px',
        justifyContent: 'center',
        // background: '#F3F3F3',
    }
})


function CareusolCard(props) {
    const { card } = useStyles();
    return (
        <>
            <Card className={card} style={{}}>

                <Box style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <img style={{ height: '250px', width: '200px', objectFit: 'cover' }} src={props.url} alt={props.name} />
                </Box>

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
        </>
    )
}

export default CareusolCard