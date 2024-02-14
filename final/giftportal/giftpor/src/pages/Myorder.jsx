import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Myorder.css';
import Carroussel from "./Carroussel";
import CardNews from "./CardNews";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
function Payment() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const name = params.get('name');
    const phoneNumber = params.get('phoneNumber');
    const selectedGift = params.get('selectedGift');
    const selectedTheme = params.get('selectedTheme');
    const totalPrice = params.get('totalPrice');
    const email = params.get('email');
    const address = params.get('address');

    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [showDashboardDetails, setShowDashboardDetails] = useState(false);
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleToggleDetails = () => {
        setShowDetails(!showDetails);
      };
    
      const handleToggleDashboardDetails = () => {
        setShowDashboardDetails(!showDashboardDetails);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform payment processing here
        console.log("Payment submitted");
    };

    const handleCancel = () => {
        // Handle cancellation logic here
        console.log("Payment cancelled");
    };
    const navigate = useNavigate();
    const navi = () =>{
        navigate('/success')
    }
    

    return (
        <>
        <div id="home_parent">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.10rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FLOWER AURS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/mainpage">
                  <Typography textAlign="center">CATEGORY</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                  <Typography textAlign="center">ORDERS</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                  <Typography textAlign="center">LOGIN</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/home"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
               onClick={handleToggleDashboardDetails}
               component={Link}
               to="/mainpage"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                CATEGORY
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ORDERS
              </Button>
              <Button
                onClick={handleToggleDashboardDetails}
                component={Link}
                to="/"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                LOGIN
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleToggleDetails}>
                  <Typography textAlign="center">DASHBOARD</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
        <div className="payment-container">
            <h1>Payment Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} readOnly />
                </div>

                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" value={phoneNumber} readOnly />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} readOnly />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" value={address} readOnly />
                </div>

                <div className="form-group">
                    <label>Selected Gift:</label>
                    <input type="text" value={selectedGift} readOnly />
                </div>

                <div className="form-group">
                    <label>Selected Theme:</label>
                    <input type="text" value={selectedTheme} readOnly />
                </div>

                <div className="form-group">
                    <label>Total Price:</label>
                    <input type="text" value={totalPrice} readOnly />
                </div>

                <button type="submit" onClick={navi}>Submit Payment</button>
                <Link to ="/user" ><button type="button">Cancel</button></Link>
            </form>
        </div>
        </div>
        </>
    );
}

export default Payment;
