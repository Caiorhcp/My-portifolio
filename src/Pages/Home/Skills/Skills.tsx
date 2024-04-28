import { Container, Grid, Typography, styled } from "@mui/material";


const Skills = () => {

    const StyledSkills = styled("div")(({ theme })=> ({
        backgroundColor: theme.palette.primary.dark,
        height: "81vh",
        display: "flex",
        width:"100%",

    }));

    const TextContainer = styled("div")(({ theme })=> ({

        textAlign: "center",    
        backgroundColor:theme.palette.primary.dark,
    }));
    

    return (
        <StyledSkills>
            <Container maxWidth="md">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextContainer>
                        <Typography color="primary.contrastText" variant="h3" gutterBottom>
                                Skills
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                HTML
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                CSS
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                SASS
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                JAVASCRIPT
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                TYPESCRIPT
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                REACT
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                MYSQL
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                TAILWIND
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                GIT AND GITHUB
                            </Typography>
                        
                        </TextContainer>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextContainer>
                        <Typography color="primary.contrastText" variant="h3" gutterBottom>
                                Interpersonal
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Agile Methodology
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Leadership
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Flexibility
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Active listening.
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Empathy
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Motivation
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Communication
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1">
                                Teamwork
                            </Typography>
                        
                        </TextContainer>
                    </Grid>
                    
                    
                </Grid>
            </Container>
        </StyledSkills>
    );
}

export default Skills;
