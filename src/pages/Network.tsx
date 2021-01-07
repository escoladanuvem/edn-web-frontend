import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh',
        width: '90vw',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
}));

function Network() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="xl">
        </Container>
    )
}

export default Network;