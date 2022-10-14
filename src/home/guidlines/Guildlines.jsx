import React from 'react'
import { Typography, Box, } from '@material-ui/core'


function Guildlines() {
    return (
        <>
            <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <Typography align='center' style={{ marginTop: '30px', fontWeight: 'bolder', color: '#424242' }} component="h3" variant="h3">
                    <span style={{ color: '#E2352D' }}> COVID-19 <span style={{ color: 'black' }}> GUIDELINES</span></span>
                </Typography>
                <Box style={{ width: '50%', marginTop: '35px' }}>

                    <Typography align='center' style={{ fontSize: '18px', color: 'grey', fontWeight: 'lighter' }}>
                        Please remember to adhere all covid-19 guidelines. Precaution is key to
                        survive this pandemic. Stay at home and Stay safe.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Guildlines