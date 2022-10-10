import React from 'react'
import { Typography, Box, Grid, Button, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#3A408C',
        paddingLeft: '40px',
        paddingTop: '70px',
        textAlign: 'left',
        position: 'relative',
        paddingBottom: '0px',
    },
    content: {
        color: 'gray',
        paddingLeft: '40px',
        paddingBottom: '0px',
        textAlign: 'left',
        marginTop: '20px'
    },
    button: {
        // alignItems: 'left'
        alignSelf: 'flex-start',
        marginLeft: '40px',
        marginTop: '60px',
        width: '200px',
        height: '50px',
        padding: '0px',
        textTransform: 'nornal',
        fontSize: '18px',
        fontWeight: 'bolder',
        background: '#E2352D',
        color: '#fff'
    }

}))

function Cover() {
    const classes = useStyles()


    return (
        <>
            <Box style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', background: '#F3F3F3', height: 'content-fit', paddingBottom: '50px', paddingTop: '50px' }}>
                <Grid container >

                    <Grid item xs={6} align="center" style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h3" component="h2" style={{ fontWeight: 'bolder' }} className={classes.text}>
                            PROVIDING SERVICES AT YOUR HOME
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight: 'normal', fontStyle: 'normal' }} className={classes.content}>
                            <span style={{ fontWeight: 'bold', color: 'lightblack' }}>MACC Essentials</span> has an improvement role in making supplies and services available to customers and their
                            patients during this critical time. This includes services
                            from various domains. Our aim is to aid you. As much we
                            can.
                        </Typography>
                        <Button className={classes.button} variant="contained" onMouseOver={(e) => {
                            e.currentTarget.style.background = '#CA221B'
                        }} >Learn More</Button>
                    </Grid>
                    <Grid item xs={6} align="center" sm={Hidden}>
                        <img src="img/cover.png" alt="" />

                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Cover