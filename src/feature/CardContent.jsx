import React from 'react'
import CardFeature from './CardFeature'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2,

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

function CardContent() {
    const features = [
        {
            "name": "Face Mask",

            "url": "products/mask.png",
            "discount": "20% OFF",
            "price": "400 ₹",
            "ogprice": "500 ₹"


        },
        {
            "name": "Body Spay",

            "url": "products/axe.png",
            "discount": "35% OFF",
            "price": "500 ₹",
            "ogprice": "650 ₹"
        },
        {
            "name": "Stay Free",

            "url": "products/stayfree.png",
            "discount": "25% OFF",
            "price": "250 ₹",
            "ogprice": "300 ₹"
        },
        {
            "name": "Mobiles",

            "url": "products/mobile.png",
            "discount": "20% Extra",
            "price": "520 ₹",
            "ogprice": "600 ₹"
        }
    ]

    return (
        <>
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
                    features.map(items => (
                        <CardFeature
                            name={items.name}
                            url={items.url}
                            discount={items.discount}
                            price={items.price}
                            ogprice={items.ogprice}
                        />
                    ))
                }


            </Carousel>
        </>
    )
}

export default CardContent