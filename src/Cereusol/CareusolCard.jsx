import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Avatar } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
// import helper from './helper';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '70.25%', // 16:9

    },
})


function CareusolCard(props) {
    const { media } = useStyles();
    return (
        <>
            <Card style={{ margin: "10px", height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#F3F3F3' }}>

                <CardMedia
                    image={props.url}
                    title={props.name}
                    className={media}
                    style={{ objectFit: 'cover', marginTop: '100px' }}
                />

                <CardContent style={{ marginTop: '70px' }}>
                    <Typography variant='h5' style={{ textAlign: 'center' }}>
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default CareusolCard