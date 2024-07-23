import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SvgIcon from '@mui/material/SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function TikTokIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M21,12.2V8.6c-1.8,0.1-3.6-0.3-5-1.3v6.7c0,2.6-1.8,4.7-4.3,5.3V6.6C8.7,6.2,7,4.1,7,1.9h3c0,1.2,0.9,2.2,2.1,2.4V3.4c0-1.1-0.9-2-2-2.2V0C7.7,0.2,6,2.7,6,5.7v14.6c0,3,1.7,5.5,4.8,5.7v-2.4c-1.1-0.2-2-1.2-2-2.4v-0.8c2.5-0.6,4.3-2.7,4.3-5.3V7.2c1.4,1,3.2,1.4,5,1.3v3.7H21z"/>
    </SvgIcon>
  );
}

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src="/path-to-your-logo.svg" alt="Logo" style={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><InstagramIcon /> Instagram</MenuItem>
              <MenuItem onClick={handleClose}><FacebookIcon/> Facebook</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
