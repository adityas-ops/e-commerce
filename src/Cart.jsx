import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCard } from './store/CardSlice'
import { NavLink } from 'react-router-dom'
import { Grid, Typography, Button, Card, CardContent, CardMedia, CardActions, makeStyles } from '@material-ui/core'
import { useState } from 'react'
const useStyles = makeStyles({
    media: {
        // height: 0,
        // paddingTop: '100%', // 16:9

    },
    card: {
        height: "500px",
        // width: "250px",
        display: "flex",
        flexDirection: "column",
        margin: '15px',
        justifyContent: 'center',
        // background: '#F3F3F3',
    }

})

function Cart() {
    const products = useSelector(state => state.cards)

    const dispatch = useDispatch()
    const removeItem = (productId) => {

        dispatch(removeCard(productId))


    }
    const { card } = useStyles();
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })
    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <h1 style={{ textAlign: 'center', color: 'grey' }}>Cart</h1>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    {products.map((product) => (
                        <Card
                            onMouseOver={() => setState({ raised: true, shadow: 3 })}
                            onMouseOut={() => setState({ raised: false, shadow: 1 })}
                            raised={state.raised} zDepth={state.shadow}
                            style={{ width: '250px', height: '340px', margin: '10px' }}>
                            <CardMedia
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    marginTop: '10px',
                                    width: "140px",
                                    height: "150px",
                                    zIndex: "1"
                                }}
                                component="img" image={product.image} title="Card" />
                            <CardContent>
                                <Typography variant='h6' style={{ textAlign: 'center' }}>
                                    {product.title.slice(0, 20)}
                                </Typography>
                                <Typography variant='h6' style={{ textAlign: 'center', color: 'red' }}>
                                    {product.price}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <NavLink to="/Checkout" style={{ textDecoration: 'none' }}>
                                    <Button variant='contained' style={{ backgroundColor: '#3A408C', color: 'white' }}>Buy Now</Button>
                                </NavLink>
                                <Button onClick={() => removeItem(product.id)} variant='contained' style={{ backgroundColor: '#3A408C', color: 'white' }}>Remove</Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>




        </>
    )
}

export default Cart