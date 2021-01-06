import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        color: '#CFCFCF'
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography align="center">
                    © Todos os direitos reservados - Escola da Nuvem
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;