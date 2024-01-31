// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Home } from '@mui/icons-material';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom
// import './HomePage.css';
// import img from '/src/assets/images/giftgif.gif';
// import imgtag from '/src/assets/images/gift.gif';

// const pages = ['HOME', 'ABOUT', 'CONTACT'];
// const settings = ['LOGIN', 'ADMIN', 'DASHBOARD', 'PAYMENT'];

// function HomePage() {
//   const navigate = useNavigate('')
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };


//   return (
//     <>
//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               // component={Link}  // Change to Link component
//               to="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.10rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               LOGO
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>

//             <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component={Link}  // Change to Link component
//               to="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'flex', md: 'none' },
//                 flexGrow: 1,
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               LOGO
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: 'white', display: 'block' }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>
//   <Box sx={{ flexGrow: 0 }}>
//         <Tooltip title="Open settings">
//           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//           </IconButton>
//         </Tooltip>
//         <Menu
//           sx={{ mt: '45px' }}
//           id="menu-appbar"
//           anchorEl={anchorElUser}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           open={Boolean(anchorElUser)}
//           onClose={handleCloseUserMenu}
//         >
//           {/* {settings.map((setting) => (
//             <MenuItem key={setting} onClick={handleCloseUserMenu}>
//               <Typography textAlign="center">{setting}</Typography>
//             </MenuItem>
//           ))} */}
//           {/* Add a Link to the Login page */}
//           <MenuItem>
//             <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <Typography textAlign="center">LOGIN</Typography>
//             </Link>
           
//           </MenuItem>
//           <MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <Typography textAlign="center">ADMIN</Typography>
//             </Link>
           
//           </MenuItem>
//           <MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <Typography textAlign="center">ASHBOARD</Typography>
//             </Link>
           
//           </MenuItem>
//         </Menu>
//       </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <div className='color' style={{color:"tan"}}></div>
//       <div className="topContent">
//         <div className="topContent__container">
//           <h1>AN EVENT IS NOT OVER </h1>
//           <h1>UNTIL EVERYONE HAS</h1>
//           <h1>STOPPED TALKING ABOUT US...</h1>
//           <a
//             href=""
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="topContent__downloadButton" > Make a Plan</button>
//           </a>
//         </div>
//       </div>
//       <div className='vid'>
//         <img style={{width:"200px",marginLeft:"140px",marginTop:"240px"}} src={img} alt="giftgif" />
//       </div>
//       <div className='vid1'>
//         <img style={{width:"200px",marginLeft:"370px",marginTop:"-150px"}} src={imgtag} alt="gift" />
//       </div>
//     </>
//   );
// }

// export default HomePage;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import img from '/src/assets/images/giftgif.gif';
import imgtag from '/src/assets/images/gift.gif';
import './HomePage.css';
function HomePage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div id="home_parent">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              // component={Link}
              // to="/home"
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
              ANGEL'S GIFT SHOP
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
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/home">
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contact">
                  <Typography textAlign="center">Contact</Typography>
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
                // onClick={handleCloseNavMenu}
                // component={Link}
                // to="/home"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/about"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/admin"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               ADMIN
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
                  vertical: 'top'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu} component={Link} to="/login">
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div className='color' style={{color:"tan"}}></div>
      <div className="topContent">
        <div className="topContent__container">
          <h1>WELCOME </h1>
          <h1>TO</h1>
          <h1>ANGEL'S GIFT SHOP...</h1>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="topContent__downloadButton" > Make a Order</button>
          </a>
        </div>
      </div>

      {/* <div className='vid'>
        <img style={{width:"200px",marginLeft:"140px",marginTop:"240px"}} src={img} alt="giftgif" />
      </div> */}

      {/* <div className='vid1'>
        <img style={{width:"200px",marginLeft:"370px",marginTop:"-150px"}} src={imgtag} alt="gift" />
      </div> */}
    </div>
  );
}

export default HomePage;

