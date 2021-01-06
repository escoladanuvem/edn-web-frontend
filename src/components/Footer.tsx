import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


function Footer() {
    return (
        <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'© Todos os direitos reservados - '}
                <Link color="inherit" href="https://www.escoladanuvem.com.br/">
                    Escola da Nuvem
                </Link>
            </Typography>
        </Box>
    );
}

export default Footer;