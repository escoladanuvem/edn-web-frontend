import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../images/logo.svg'
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    appNavbar: {
        background: '#FFFFFF',
        padding: '12px 24px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .2)'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    navbarImg: {
        width: '84px',
    },
    linksContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    navLinks: {
        fontFamily: 'Ropa Sans, sans- serif',
        fontSize: '16px',
        margin: '0px 18px 0px 18px',
        textTransform: 'uppercase',
        color: '#011633',
    },
    toolbarSpace: {
        flexGrow: 1,
    },
    iconContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    iconButton: {
        float: 'right'
    },
    listItem: {
        fontFamily: 'Ropa Sans, sans- serif',
        textTransform: 'uppercase',
        fontSize: '16px',
        color: '#011633',
    }
}));

function Header() {
    const classes = useStyles();
    const [mobile, setMobile] = useState(false);

    return (
        <AppBar position="static" color="inherit" className={classes.appNavbar}>
            <Toolbar className={classes.toolbar}>
                <img src={Logo} alt="Escola da Nuvem logo" className={classes.navbarImg} />
                <span className={classes.toolbarSpace}></span>
                {/* BEGIN MOBILE MENU */}
                <nav className={classes.iconContainer}>
                    <IconButton onClick={() => { setMobile(true) }} className={classes.iconButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </nav>
                <SwipeableDrawer anchor="right" open={mobile} onClose={() => { setMobile(false) }} onOpen={() => { setMobile(true) }}>
                    <List>
                        <ListItem component={Link} button href="/" className={classes.listItem}>
                            Início
                                </ListItem>
                        <ListItem component={Link} button href="about" className={classes.listItem}>
                            Sobre
                                </ListItem>
                        <ListItem component={Link} button href="network" className={classes.listItem}>
                            Nossa Rede
                                </ListItem>
                        <ListItem component={Link} button href="login" className={classes.listItem}>
                            Login
                                </ListItem>
                    </List>
                </SwipeableDrawer>
                {/* END MOBILE MENU */}
                <nav className={classes.linksContainer}>
                    <Link variant="button" className={classes.navLinks} href="/">
                        Início
                            </Link>
                    <Link variant="button" className={classes.navLinks} href="about">
                        Sobre
                            </Link>
                    <Link variant="button" className={classes.navLinks} href="network">
                        Nossa Rede
                            </Link>
                    <Link variant="button" className={classes.navLinks} href="login">
                        Login
                            </Link>
                </nav>
            </Toolbar>
        </AppBar>
    );
}

export default Header;