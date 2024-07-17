import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    Primary: true;
    Success: true;
    Error: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    Primary: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsVariantOverrides {
    Primary: true;
    Disabled: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#223257",
    },
    secondary: {
      main: colors.teal[500],
    },
    error: {
      main: colors.red.A700,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiIconButton: {
      variants: [
        {
          props: { variant: "Disabled"},
          style: {
            backgroundColor: colors.grey[300],
            color: "#000000"
          }
        },
        {
          props: { variant: "Primary"},
          style: {
            backgroundColor: theme.palette.primary.main,
            color: "#FFFFFF",
            "&:hover": {
              background: theme.palette.primary.light,
              color: colors.blue[500]
            },
            "&:disabled": {
              backgroundColor: colors.grey[300],
            },
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "Primary" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#223257",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#FFFFFF",
            "&:hover": {
              background: theme.palette.primary.light,
              color: colors.blue[500],
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: colors.blue[500],
            },
            "&:disabled": {
              backgroundColor: colors.grey[300],
            },
          },
        },
        {
          props: { variant: "Success" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#223257",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#FFFFFF",
            "&:hover": {
              background: theme.palette.primary.light,
              color: colors.teal.A400,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: colors.teal[500],
            },
          },
        },
        {
          props: { variant: "Error" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#223257",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#FFFFFF",
            "&:hover": {
              background: theme.palette.primary.light,
              color: colors.red.A700,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: colors.red.A700,
            },
          },
        },
      ],
    },
  },
});

export default theme;
