import React from 'react'
import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import Checkbox from '@mui/material/Checkbox';
import { Box, Grid, FormGroup, FormControlLabel, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Pages from './Pages';


function Collections() {
    return (
        <>
            <Grid style={{}} container>
                <Grid item lg={12} md={12} sm={12}>
                    <img src='img/cover2.png' alt='img' width="100%"></img>
                </Grid>
                <Grid item lg={12} md={12} sm={12} style={{ display: 'flex' }} >
                    <div style={{ flex: '20%' }} item >
                        <Box
                            flex={1}
                            p={2}
                            sx={{ display: { xs: "none", sm: "block", md: "block", lg: "block", xl: "block" } }}
                        >
                            <List
                                sx={{ width: '100%', backgroundColor: '#fff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemText style={{ width: '50%' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: '10px', paddingRight: '10px' }}

                                        >
                                            <ListItemText primary="Company" />
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItemText>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Company - 1" />
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Company - 1" />
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Company - 1" />
                                                </FormGroup>
                                            </ListItemText>
                                        </AccordionDetails>
                                    </Accordion>

                                </ListItemText>
                                <ListItemText style={{ width: '50%' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: '10px', paddingRight: '10px' }}

                                        >
                                            <ListItemText primary="Price" />
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItemText>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Price - 1" />
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Price - 2" />
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Price - 3" />
                                                </FormGroup>
                                            </ListItemText>
                                        </AccordionDetails>
                                    </Accordion>

                                </ListItemText>
                                <ListItemText style={{ width: '50%' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{}} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: '10px', paddingRight: '10px' }}
                                        >
                                            <ListItemText primary="Categories" />
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItemText>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Category - 1" />
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Catagory - 2" />
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Catagory - 3" />
                                                </FormGroup>
                                            </ListItemText>
                                        </AccordionDetails>
                                    </Accordion>

                                </ListItemText>

                            </List>
                            {/* <Divider /> */}
                        </Box>
                    </div>
                    <div style={{ flex: '70%' }}  >
                        <Box>
                            <Box style={{ marginTop: '10px' }}>
                                <Button variant="contained" color='primary' style={{ margin: '15px', padding: '10px' }} >EveryDay Essential</Button>
                                <Button variant="contained" color='primary' style={{ margin: '15px', padding: '10px' }}>Cleaning Essential</Button>
                                <Button variant="contained" color='primary' style={{ margin: '15px', padding: '10px' }}>Immunity & Health</Button>
                                <Button variant="contained" color='primary' style={{ margin: '15px', padding: '10px' }}>Vitamin Supplements</Button>
                                <Button variant="contained" color='primary' style={{ margin: '15px', padding: '10px' }}>Vitamin Supplements</Button>

                            </Box>
                            <Box style={{ marginTop: '30px' }}>
                                <Stack direction="row" spacing={10} style={{ width: '90%', display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
                                    <Typography variant="h6">
                                        40 Products
                                    </Typography>
                                    <Accordion style={{ width: '20%' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{}} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: '10px', paddingRight: '10px' }}
                                        >
                                            <ListItemText primary="Sort" />
                                        </AccordionSummary>
                                        {/* <AccordionDetails> */}

                                        <FormGroup style={{ marginLeft: '15px', padding: '0' }}>
                                            <FormControlLabel control={<Checkbox />} label="   A-Z" />
                                            <FormControlLabel control={<Checkbox />} label="   Z-A" />
                                        </FormGroup>

                                        {/* </AccordionDetails> */}
                                    </Accordion>
                                </Stack>
                                <Box>
                                    <Pages />
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </>

    )
}

export default Collections