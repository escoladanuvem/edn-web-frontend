import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import busIllustration from '../images/cloud-illustration.svg';
import studentIllustration from '../images/student-illustration.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh',
        width: '90vw',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    loginCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        minWidth: '60%',
        maxWidth: '80%',
    },
    loginTitle: {
        fontFamily: 'Ropa Sans, sans- serif',
        color: '#00CFC1',
        marginBottom: theme.spacing(2),
    },
    loginText: {
        fontFamily: 'Lato, sans- serif',
        fontSize: '16px',
    },
    loginImage: {
        margin: theme.spacing(2),
        maxHeight: '520px',
        width: 'auto',
        height: 'auto',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLogin: {
        margin: theme.spacing(2),
        borderRadius: '100px',
        fontFamily: 'Ropa Sans, sans- serif',
        fontSize: '16px',
        color: '#011633',
        borderColor: '#011633',
    },
}));

function Login() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={6}
            >
                <Grid item xs className={classes.loginCardContainer}>
                    <Card className={classes.loginCard}>
                        <CardContent>
                            <h1 className={classes.loginTitle}>Empresas</h1>
                            <p className={classes.loginText}>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                        </CardContent>
                        <div className={classes.loginCardContainer}>
                            <CardMedia
                                component="img"
                                alt="Cloud Business"
                                image={busIllustration}
                                title="Cloud Business"
                                className={classes.loginImage}
                            />
                        </div>
                        <CardActions className={classes.buttonContainer}>
                            <Button variant="outlined" className={classes.buttonLogin}>Cadastrar</Button>
                            <Button variant="outlined" className={classes.buttonLogin}>Entrar</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs className={classes.loginCardContainer}>
                    <Card className={classes.loginCard}>
                        <CardContent>
                            <h1 className={classes.loginTitle}>Estudantes</h1>
                            <p className={classes.loginText}>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                        </CardContent>
                        <div className={classes.loginCardContainer}>
                            <CardMedia
                                component="img"
                                alt="Cloud Student"
                                image={studentIllustration}
                                title="Cloud Student"
                                className={classes.loginImage}
                            />
                        </div>
                        <CardActions className={classes.buttonContainer}>
                            <Button variant="outlined" className={classes.buttonLogin}>Cadastrar</Button>
                            <Button variant="outlined" className={classes.buttonLogin}>Entrar</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;