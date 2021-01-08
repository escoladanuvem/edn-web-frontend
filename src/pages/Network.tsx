import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh',
        width: '90vw',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    networkContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    formElement: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(4),
    },
    formActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: theme.spacing(4),
    },
    buttonTags: {
        marginRight: theme.spacing(2),
        borderRadius: '100px',
        fontFamily: 'Ropa Sans, sans- serif',
        fontSize: '14px',
        color: '#011633',
        borderColor: '#011633',
    },
}));

function Network() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Grid
                container
                alignItems="center"
            >
                <Grid item xs={12} className={classes.networkContainer}>
                    <div className={classes.formContainer}>
                        <h1 className={classes.formElement}>Quais habilidades você está procurando?</h1>
                        <TextField label="Exemplo: devops" variant="outlined" />

                        <h2 className={classes.formElement}>Termos mais buscados</h2>
                        <div>
                            <Button className={classes.buttonTags} variant="outlined">
                                +sysops
                            </Button>
                            <Button className={classes.buttonTags} variant="outlined">
                                +linux
                            </Button>
                            <Button className={classes.buttonTags} variant="outlined">
                                +terminal
                            </Button>
                        </div>
                    </div>
                    <div className={classes.formActions}>
                        <Button variant="text">
                            {'< voltar'}
                        </Button>
                        <Button variant="text">
                            {'avançar >'}
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Network;