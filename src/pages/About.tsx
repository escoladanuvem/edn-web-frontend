import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import darkBackground from '../images/dark-background.svg';
import Illustration from '../images/about-illustration.svg';

const themeDark = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundImage: `url(${darkBackground})`,
                }
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh',
        width: '90vw',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    aboutHeader: {
        fontFamily: 'Ropa Sans, sans- serif',
        fontSize: '31px',
        color: '#00CFC1'
    },
    aboutText: {
        fontFamily: 'Lato, sans- serif',
        fontSize: '18px',
        color: '#FFFFFF'
    }
}));

function About() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <Container className={classes.root} maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={6}
                >
                    <Hidden smDown>
                        <Grid item xs={5}>
                            <img src={Illustration} alt='About Illustration' />
                        </Grid>
                    </Hidden>
                    <Grid item xs>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                            spacing={2}
                        >
                            <Grid item xs>
                                <h1 className={classes.aboutHeader}>O que é a Escola da Nuvem</h1>
                                <p className={classes.aboutText}> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non massa magna. Ut id rutrum lectus, et efficitur sem. Ut et ipsum molestie est condimentum mollis in et libero. Donec vel nunc vulputate, lobortis nisi id, ultrices est. Etiam consectetur vehicula purus. Morbi et tincidunt leo. Vivamus volutpat lobortis dolor, id rutrum neque porttitor a. Etiam metus elit, scelerisque porta libero sit amet, lobortis scelerisque erat. Aenean egestas, dolor et cursus semper, justo leo pellentesque mauris, non hendrerit magna justo in urna. Pellentesque sed mi neque. Integer mollis bibendum scelerisque. Proin mollis nunc orci, vel vestibulum est luctus quis. Suspendisse sagittis fermentum risus eu elementum. Proin vulputate orci nisl, vel laoreet ante cursus et.</p>
                            </Grid>
                            <Grid item xs>
                                <h1 className={classes.aboutHeader}>Como contratar</h1>
                                <p className={classes.aboutText}> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non massa magna. Ut id rutrum lectus, et efficitur sem. Ut et ipsum molestie est condimentum mollis in et libero. Donec vel nunc vulputate, lobortis nisi id, ultrices est. Etiam consectetur vehicula purus. Morbi et tincidunt leo. Vivamus volutpat lobortis dolor, id rutrum neque porttitor a. Etiam metus elit, scelerisque porta libero sit amet, lobortis scelerisque erat. Aenean egestas, dolor et cursus semper, justo leo pellentesque mauris, non hendrerit magna justo in urna. Pellentesque sed mi neque. Integer mollis bibendum scelerisque. Proin mollis nunc orci, vel vestibulum est luctus quis. Suspendisse sagittis fermentum risus eu elementum. Proin vulputate orci nisl, vel laoreet ante cursus et.</p>
                            </Grid>
                            <Grid item xs>
                                <h1 className={classes.aboutHeader}>Como participar</h1>
                                <p className={classes.aboutText}> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non massa magna. Ut id rutrum lectus, et efficitur sem. Ut et ipsum molestie est condimentum mollis in et libero. Donec vel nunc vulputate, lobortis nisi id, ultrices est. Etiam consectetur vehicula purus. Morbi et tincidunt leo. Vivamus volutpat lobortis dolor, id rutrum neque porttitor a. Etiam metus elit, scelerisque porta libero sit amet, lobortis scelerisque erat. Aenean egestas, dolor et cursus semper, justo leo pellentesque mauris, non hendrerit magna justo in urna. Pellentesque sed mi neque. Integer mollis bibendum scelerisque. Proin mollis nunc orci, vel vestibulum est luctus quis. Suspendisse sagittis fermentum risus eu elementum. Proin vulputate orci nisl, vel laoreet ante cursus et.</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MuiThemeProvider>
    )
}

export default About;