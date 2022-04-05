import React, { useContext, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import { AccountBalance } from '@mui/icons-material';
import { UserContext } from '../context/user';


export default function NavBar() {

  const { user } = useContext(UserContext)

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right',}}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right',}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <NavLink
          to='/'
          exact
          style={{ color: 'black', fontWeight: '500', display: 'flex', alignItems: 'center', marginRight: '10px', textDecoration: 'none' }}
          activeStyle={{ color: '#1976d2'}}
          onClick={handleMobileMenuClose}>
            HOME
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to='/about'
          exact
          style={{ color: 'black', fontWeight: '500', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          activeStyle={{ color: '#1976d2' }}
          onClick={handleMobileMenuClose}>
            ABOUT
        </NavLink>
      </MenuItem>
      <MenuItem>
        {user ?
          <NavLink
            to='/account'
            exact
            style={{ color: 'black', fontWeight: '500', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            activeStyle={{ color: '#1976d2' }}
            onClick={handleMobileMenuClose}>
              ACCOUNT
          </NavLink>
          :
          <NavLink
            to='/login'
            exact
            style={{ color: 'black', fontWeight: '500', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            activeStyle={{ color: '#1976d2' }}
            onClick={handleMobileMenuClose}>
              LOGIN
          </NavLink>
        }
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AccountBalance style={{ marginRight: '5px' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block' } }}>
              Congress Stock Tracker
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLink
              to='/'
              exact
              style={{ color: 'white', fontWeight: '500', display: 'flex', alignItems: 'center', marginRight: '10px', textDecoration: 'none' }}
              activeStyle={{ color: '#add5db'}}>
                HOME
            </NavLink>
            <NavLink
              to='/about'
              exact
              style={{ color: 'white', fontWeight: '500', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              activeStyle={{ color: '#add5db' }}>
                ABOUT
            </NavLink>
            {user ?
              <NavLink
                to='/account'
                exact
                style={{ color: 'white', fontWeight: '500', display: 'flex', alignItems: 'center', textDecoration: 'none', marginLeft: '15px' }}
                activeStyle={{ color: '#add5db' }}>
                  {`HI, ${user.toUpperCase()}!`}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                activeStyle={{ color: '#add5db' }}>
                <AccountCircle />
              </IconButton>
              </NavLink>
              :
              <NavLink
                to='/login'
                exact
                style={{ color: 'white', fontWeight: '500', display: 'flex', alignItems: 'center', textDecoration: 'none', marginLeft: '10px' }}
                activeStyle={{ color: '#add5db' }}>
                  LOGIN
              </NavLink>
            }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

