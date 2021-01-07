import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Illustration from '../images/landing-illustration.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh',
        width: '90vw',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    landingTitle: {
        fontFamily: 'Ropa Sans, sans- serif',
        fontSize: '52px',
    },
    landingSubtitle: {
        fontFamily: 'Lato, sans- serif',
        fontSize: '20px',
    },
    landingImageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    landingImage: {
        maxWidth: '720px',
        minWidth: '120px',
    },
    landingButtons: {
        marginTop: theme.spacing(2),
    },
    buttonAbout: {
        borderRadius: '100px',
        fontFamily: 'Ropa Sans, sans- serif',
        fontSize: '16px',
        color: '#00CFC1',
        backgroundColor: '#011633',
    },
    buttonNetwork: {
        marginLeft: theme.spacing(2),
        borderRadius: '100px',
        fontFamily: 'Ropa Sans, sans- serif',
        fontSize: '16px',
        color: '#011633',
        borderColor: '#011633',
    },
}));

function Landing() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs>
                    <h1 className={classes.landingTitle}>
                        Precisando encontrar profissionais de cloud?
                        </h1>
                    <h2 className={classes.landingSubtitle}>
                        Preparando e conectando profissionais de nuvem para o mundo.
                        </h2>
                    <div className={classes.landingButtons}>
                        <Button className={classes.buttonAbout} variant="contained" href="about">
                            saiba mais
                            </Button>
                        <Button className={classes.buttonNetwork} variant="outlined" href="network">
                            nossa rede
                            </Button>
                    </div>
                </Grid>
                <Grid item xs className={classes.landingImageContainer}>
                    <img className={classes.landingImage} src={Illustration} alt='ed' />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Landing;