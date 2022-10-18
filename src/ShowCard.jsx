import { Box, Button, Container, Grid, Icon, Typography } from '@material-ui/core'
import React from 'react'
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: 'transparent',
        margin: '0px',
        padding: '0px',
        marginTop: '5px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function ShowCard({ data, id }) {
    const classes = useStyles();
    return (
        <>
            <Container>
                <p style={{ color: 'grey', fontWeight: 'lighter' }}>Home / Products / Product</p>
                <Grid container>
                    <Grid item container xs={12} md={6} lg={6} style={{ marginTop: '30px' }}>
                        <Grid item xs={6} md={4} lg={4}>
                            <Stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }} spacing={2}>
                                <img src={data.filter((item) => item.id == id).map((item) => item.image)} alt="" style={{ height: '70px', width: '60px', margin: '10px' }} />
                                <img src={data.filter((item) => item.id == id).map((item) => item.image)} alt="" style={{ height: '70px', width: '60px', margin: '10px' }} />
                                <img src={data.filter((item) => item.id == id).map((item) => item.image)} alt="" style={{ height: '70px', width: '60px', margin: '10px' }} />
                                <img src={data.filter((item) => item.id == id).map((item) => item.image)} alt="" style={{ height: '70px', width: '60px', margin: '10px' }} />
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={8} lg={8}>
                            <img src={data.filter((item) => item.id == id).map((item) => item.image)} alt="" style={{ width: "300px", height: '400px' }} />
                        </Grid>
                    </Grid>
                    <Grid item style={{ width: '100%' }} xs={12} md={6} lg={6}>
                        <Box style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Box style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', marginBottom: '0px' }}>
                                <h2 style={{ fontWeight: 'bolder', color: 'black', marginBottom: '0px' }}>{data.filter((item) => item.id == id).map((item) => item.title)}</h2>
                                <Icon style={{ color: 'grey', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px', marginBottom: '0px' }}><FavoriteIcon /></Icon>
                            </Box>
                            <h2 style={{ fontWeight: 'bolder', color: 'red', marginTop: '0px', marginBottom: '0px' }}> ₹ {data.filter((item) => item.id == id).map((item) => item.price)}</h2>
                            <Box style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center', marginBottom: '10px' }}>
                                <Button variant="outlined" style={{ margin: '5px' }} >Black</Button>
                                <Button variant="outlined" style={{ margin: '5px' }} >Gold</Button>
                                <Button variant="outlined" style={{ margin: '5px' }} >Appolo</Button>
                            </Box>
                            <Button style={{ backgroundColor: '#004197', color: 'white', fontWeight: 'bolder', width: '100%', height: '50px', fontSize: '20px' }}>ADD TO CART</Button>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', marginTop: '5px' }}>
                                <p style={{ fontWeight: 'lighter', color: 'grey', textAlign: 'start' }}>{data.filter((item) => item.id == id).map((item) => item.description)}</p>
                            </Box>
                            <Box style={{ color: 'black' }} >
                                <Accordion className={classes.root} square={true} >
                                    <AccordionSummary
                                        style={{ display: "flex", justifyContent: 'center', alignItem: 'center', textAlign: 'center', background: 'transparent', height: '50%' }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"

                                    >
                                        <Typography className={classes.heading} style={{ width: '100%', textAlign: 'center' }}>Description</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={classes.root} square={true} >
                                    <AccordionSummary
                                        style={{ display: "flex", justifyContent: 'center', alignItem: 'center', textAlign: 'center', background: 'transparent', height: '50%' }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"

                                    >
                                        <Typography className={classes.heading} style={{ width: '100%', textAlign: 'center' }}>return Policy</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={classes.root} square={true} >
                                    <AccordionSummary
                                        style={{ display: "flex", justifyContent: 'center', alignItem: 'center', textAlign: 'center', background: 'transparent', height: '50%' }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"

                                    >
                                        <Typography className={classes.heading} style={{ width: '100%', textAlign: 'center' }}>Citizen Policy</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </p>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ShowCard