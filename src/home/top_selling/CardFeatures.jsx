import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box } from '@material-ui/core'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        height: "500px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        margin: '15px',
        justifyContent: 'center',
        // background: '#F3F3F3',
    }

})

function CardFeatures(props) {




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

                    className={card}>

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
            </NavLink>
        </>
    )
}


export default CardFeatures