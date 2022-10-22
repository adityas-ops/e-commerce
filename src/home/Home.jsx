import React from 'react'
import Main from './Cereusol/Main';
import Cover from './cover/Cover';
import Feature from './feature/Feature';
import { Box } from '@material-ui/core'
import TopSelling from './top_selling/Top_selling';
import Guildlines from './guidlines/Guildlines';
// import Guildlines from './guidlines/Guildlines';
// import Navigation from './Navigation/Navigation';
function Home() {
    return (
        <>
            <Box>
                {/* <Navigation /> */}
                <Cover />
                <Main heading1="New" heading2="Products" />
                <Feature />
                <Box style={{ marginTop: '100px', marginBottom: '100px' }} >

                    <TopSelling />
                </Box>
                <Guildlines />

            </Box>
        </>
    )
}

export default Home