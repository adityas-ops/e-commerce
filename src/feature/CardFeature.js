import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Avatar, Box } from '@material-ui/core'
import { Label } from '@material-ui/icons';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '70.25%', // 16:9

    },
    card: {
        height: "500px",
        display: "flex",
        flexDirection: "column",
        margin: '15px',
        justifyContent: 'center',
        background: '#F3F3F3',
    }

})

function CardFeature(props) {



    const { media, card } = useStyles();
    return (
        <>
            <Card className={card}>
                <Box style={{ width: '100%', color: "white", display: "flex", justifyContent: 'flex-end', alignItems: 'self-end', textAlign: 'center' }}>
                    <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '30px', textAlign: 'center', marginTop: '15px', background: '#E2352D', color: 'white' }} >{props.discount}</Typography>
                </Box>
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
                    <Typography variant="h5" style={{ textAlign: 'center' }}>
                        <span style={{ textDecoration: 'line-through' }}>{props.ogprice}</span>
                        <span style={{ color: '#E2352D' }}> {props.price}</span>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}


export default CardFeature