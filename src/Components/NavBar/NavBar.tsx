import { AppBar, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import ContrastIcon from '@mui/icons-material/Contrast';
import TranslateIcon from '@mui/icons-material/Translate';

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
    
        <AppBar position="absolute">
                <StyledToobar>
                <Typography variant="h4">Welcome!</Typography>


                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    
                    <MenuItem><ContrastIcon/></MenuItem>
                    <MenuItem><TranslateIcon/></MenuItem>

                    
                </StyledToobar>
            </AppBar>

    )
}

export default NavBar