import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Badge from '@mui/material/Badge';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/PermIdentityOutlined';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Divider, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


export default function Navigation() {
    const totalQuantity = useSelector(state => state.cards.length)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem >
                <IconButton
                    size="large"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ShoppingCartIcon />
                </IconButton>
                <NavLink to="/Collections" style={{ color: 'black' }}>
                    <p>Shop</p>
                </NavLink>
            </MenuItem>
            <MenuItem >
                <IconButton
                    size="large"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ExploreOutlinedIcon />
                </IconButton>
                <p>Essentials</p>
            </MenuItem>
            <MenuItem >
                <IconButton
                    size="large"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <EmojiEventsOutlinedIcon />
                </IconButton>
                <p>Best Seller</p>
            </MenuItem>
            <MenuItem >
                <IconButton
                    size="large"
                    aria-haspopup="true"
                    color="inherit"
                    // containerElement={"www.google.com"}
                    // containerElement={<Link href="https://www.google.com" />}
                    onClick={() => window.location.href = 'https://www.google.com'}
                >
                    <InfoOutlinedIcon />
                </IconButton>
                <p>About us</p>
            </MenuItem>

            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>

            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>

        </Menu>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1, backgroundColor: 'transparent', display: [] }}>
                <Grid position="static" style={{ width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                    <p style={{ marginRight: '25px', textDecoration: 'none' }}>
                        <a style={{ textDecoration: 'none', color: 'grey' }} href="/">Return</a>
                        <a style={{ textDecoration: 'none', color: 'grey', marginLeft: '15px', marginRight: '15px' }} href="/help">Help</a>
                        <a style={{ textDecoration: 'none', color: 'grey' }} href="/signIn">Sign-In</a>
                    </p>
                </Grid>

                <Divider />
            </Box>
            <Box sx={{ flexGrow: 1, background: 'transparent' }}>
                <AppBar position="static" style={{ backgroundColor: 'transparent', color: 'grey' }}>
                    <Toolbar>

                        <Search sx={{ flexGrow: 1 }}>
                            <SearchIconWrapper>
                                <SearchIcon fontSize='large' style={{ fontSize: '24px' }} />
                            </SearchIconWrapper>

                        </Search>
                        <Box sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

                            <Typography variant="h6" noWrap component="div" style={{ flexGrow: 2 }}>
                                <NavLink to="/Collections" style={{ textDecoration: 'none', color: 'gray' }}>
                                    Shop
                                </NavLink>
                            </Typography>


                            <Typography variant="h6" noWrap component="div" style={{ flexGrow: 2 }}>
                                <NavLink to="/products" style={{ textDecoration: 'none', color: 'gray' }}>
                                    Essentials
                                </NavLink>
                            </Typography>

                            <Box>

                                <Typography align='center' style={{ fontFamily: "Monotype Corsiva", fontSize: '3.8rem', color: '#e2352d' }}>
                                    Macc
                                </Typography>
                                <Typography align='center' style={{ fontFamily: "Monotype Corsiva", fontSize: '2.8rem', color: '#3A408C', fontWeight: 'bolder' }}>
                                    Essentials
                                </Typography>
                            </Box>
                            <Typography variant="h6" noWrap component="div" style={{ flexGrow: 2 }}>
                                Best Seller
                            </Typography>
                            <Typography variant="h6" noWrap component="div" style={{ flexGrow: 2 }}>
                                About us
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <NavLink to="/cart" style={{ textDecoration: 'none', color: 'grey' }}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={totalQuantity} color="error">
                                        <LocalMallIcon />
                                    </Badge>
                                </IconButton>
                            </NavLink>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </>
    );
}
