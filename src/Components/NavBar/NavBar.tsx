import { AppBar, MenuItem, Toolbar, styled, Typography } from "@mui/material"

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",

    }))



    return (
    
        <AppBar position="absolute">
                <StyledToobar>
                <Typography variant="h4">Welcome!</Typography>


                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>



                    
                </StyledToobar>
            </AppBar>

    )
}

export default NavBar