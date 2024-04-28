import { Container, Grid, Typography, styled } from "@mui/material"


const Footer= () => {

    const StyledFooter = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height:"12vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"


    }))




    return (

        <StyledFooter>
            <Container maxWidth="lg">

                <Grid item xs={12} md={7}>
                    <Typography color="primary.contrastText" textAlign="center">Thanks For The Visit! </Typography>
                    <Typography color="primary.contrastText" textAlign="center" pb={2}>2024₢ Developed by Caio Vinicius </Typography>
                    
                </Grid>
                
            </Container>
        </StyledFooter>

        
    )
}

export default Footer
