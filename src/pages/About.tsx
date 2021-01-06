import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Illustration from '../images/about-illustration.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        width: '90vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
}));

function About() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={4}>
                    <img src={Illustration} alt='About Illustration' />
                </Grid>
                <Grid item xs={6}>
                    <h1>O que é a Escola da Nuvem</h1>
                    <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non massa magna. Ut id rutrum lectus, et efficitur sem. Ut et ipsum molestie est condimentum mollis in et libero. Donec vel nunc vulputate, lobortis nisi id, ultrices est. Etiam consectetur vehicula purus. Morbi et tincidunt leo. Vivamus volutpat lobortis dolor, id rutrum neque porttitor a. Etiam metus elit, scelerisque porta libero sit amet, lobortis scelerisque erat. Aenean egestas, dolor et cursus semper, justo leo pellentesque mauris, non hendrerit magna justo in urna. Pellentesque sed mi neque. Integer mollis bibendum scelerisque. Proin mollis nunc orci, vel vestibulum est luctus quis. Suspendisse sagittis fermentum risus eu elementum. Proin vulputate orci nisl, vel laoreet ante cursus et.</p>
                    <h1>Como contratar</h1>
                    <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non massa magna. Ut id rutrum lectus, et efficitur sem. Ut et ipsum molestie est condimentum mollis in et libero. Donec vel nunc vulputate, lobortis nisi id, ultrices est. Etiam consectetur vehicula purus. Morbi et tincidunt leo. Vivamus volutpat lobortis dolor, id rutrum neque porttitor a. Etiam metus elit, scelerisque porta libero sit amet, lobortis scelerisque erat. Aenean egestas, dolor et cursus semper, justo leo pellentesque mauris, non hendrerit magna justo in urna. Pellentesque sed mi neque. Integer mollis bibendum scelerisque. Proin mollis nunc orci, vel vestibulum est luctus quis. Suspendisse sagittis fermentum risus eu elementum. Proin vulputate orci nisl, vel laoreet ante cursus et.</p>
                    <h1>Como participar</h1>
                    <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non massa magna. Ut id rutrum lectus, et efficitur sem. Ut et ipsum molestie est condimentum mollis in et libero. Donec vel nunc vulputate, lobortis nisi id, ultrices est. Etiam consectetur vehicula purus. Morbi et tincidunt leo. Vivamus volutpat lobortis dolor, id rutrum neque porttitor a. Etiam metus elit, scelerisque porta libero sit amet, lobortis scelerisque erat. Aenean egestas, dolor et cursus semper, justo leo pellentesque mauris, non hendrerit magna justo in urna. Pellentesque sed mi neque. Integer mollis bibendum scelerisque. Proin mollis nunc orci, vel vestibulum est luctus quis. Suspendisse sagittis fermentum risus eu elementum. Proin vulputate orci nisl, vel laoreet ante cursus et.</p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;