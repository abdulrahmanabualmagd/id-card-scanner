// this file to customize the material ui theme and use it as an argument for the theme provider 
// Not used because I'm using pure css 

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#6947cf",
        },
        secondary: {
            main: "#fff3f3",
            contrastText: "#000000",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "5px 30px",
                    borderRadius: "0px",
                },
            },
        },
    },
});
