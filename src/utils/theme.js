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
    },
    terciary: {
        main: "#4298B5",
    },
    fourth: {
        main: "#ED8B00",
    },
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
        MuiInput: {
            styleOverrides: {
                root: {
                    color: "white",
                    "&:before": {
                        borderBottomColor: "white",
                    },
                    "&:after": {
                        borderBottomColor: "white",
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
              root: {
                color: 'white',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
            },
          },
        },
});