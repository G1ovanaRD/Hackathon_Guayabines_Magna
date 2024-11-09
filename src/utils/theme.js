import { createTheme } from "@mui/material";

export const baseColors = {
    common: {
        black: "#000",
        white: "#fff",
    },
    primary: {
        main: "#878787",
    },
    /* primary: {
        #3A5DAE,
        #B7BF10,
        #ED8B00,
        #000000,
        #FFFFFF,
        #DB4231,
    } */
}

export const theme = createTheme({
    mode: "light",
    palette: baseColors,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontSize: "24px",
                },
            },
        },
    },
});