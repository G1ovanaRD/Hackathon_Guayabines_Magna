import { createTheme } from "@mui/material";

export const baseColors = {
    common: {
        black: "#000",
        white: "#FFF",
    },
    primary: {
        main: "#888D8D",
    },
    secondary: {
        main: "#DA291C",
    }
}

export const theme = createTheme({
    mode: "light",
    palette: baseColors,
    typography: {
        fontFamily: '"Arial", sans-serif'
    },
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