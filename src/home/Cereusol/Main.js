import { Container, Grid, Typography } from '@material-ui/core';
import CareusolCard from './CareusolCard';
// import CarouselSlider from 'react-carousel-slider';
// import Carousel from 'react-material-ui-carousel'
import helper from './helper';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,

        // optional, default to 1.

    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Main() {
    return (
        <>
            <Container justifyContent='center' style={{ width: '100%', height: '100vh', marginTop: '100px' }}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{ display: 'grid', placeItems: 'center' }}
                    >
                        <Typography variant="h4" style={{ fontWeight: 'bolder', color: 'red', marginBottom: '30px' }}>
                            NEW <span style={{ color: 'darkblue' }}>PRODUCTS</span>
                        </Typography>

                    </Grid>
                    <Grid justifyContent='center' item xs={12}>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            // autoPlaySpeed={1000}
                            keyBoardControl={true}
                            // customTransition="all 0.5"
                            // transitionDuration={100}
                            containerClass="carousel-container"
                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {
                                helper.map((item, index) => (
                                    <>
                                        <CareusolCard key={index} name={item.name} url={item.url} />
                                    </>
                                ))
                            }

                        </Carousel>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default Main;
