import React from 'react'
import { Typography, Box, Button, Paper } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Error() {
    const navigate = useNavigate();
    return (
        <>
            <Box style={{ margin: '25px', width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper elevation={3} style={{ width: '600px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img style={{ width: '50%', height: '70%' }} src="img/working.svg" alt="" />
                        <Typography variant="h4" style={{ fontWeight: 'bolder', color: 'gray', marginTop: '10px' }}>
                            Working in progress
                        </Typography>
                    </Box>
                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Button onClick={() => navigate('/')} variant="contained" style={{ width: '100px', backgroundColor: 'red', color: 'white', marginTop: '10px' }}>

                            Home
                        </Button>
                        <Button onClick={() => navigate(-1)} variant="contained" style={{ width: '100px', backgroundColor: 'red', color: 'white', marginTop: '10px' }}>

                            Back
                        </Button>

                    </Box>
                </Paper>
            </Box>
        </>
    )
}

export default Error