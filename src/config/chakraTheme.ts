import { extendTheme } from "@chakra-ui/react";

export const appTheme = extendTheme({
    config: {
      initialColorMode: "#DADADA",
      useSystemColorMode: false
    },
    colors: {
        accent: "#22A0BC",
        dark: "#161616",
        light: "#FDFDFD",
        gray: {
            100: "#F4F4F4",
            300: "#DADADA",
            500: "#9C9C9C",
            700: "#595959"
        }
    },
    fonts: {
        heading: "Manrope",
        body: "Manrope"
    },
    textStyles: {
        title: {
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "32.78px"
        },
        desktop: {
          headline: {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "27.32px"
          },
          textOne: {
            fontSize: "18px",
            lineHeight: "24.59px",
            semibold: {
                fontWeight: 600,
            },
            medium: {
                fontWeight: 500,
            }
          },
          textTwo: {
            fontSize: "16px",
            lineHeight: "21.86px",
            semibold: {
                fontWeight: 600,
            },
            medium: {
                fontWeight: 500,
            }
          },
          caption: {
            fontSize: "14px",
            lineHeight: "19.12px",
            fontWeight: 500,
          },
        },
        mobile: {
            headline: {
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24.59px"
              },
              textOne: {
                fontSize: "16px",
                lineHeight: "21.86px",
                semibold: {
                    fontWeight: 600,
                },
                medium: {
                    fontWeight: 600,
                },
              },
              textTwo: {
                fontSize: "14px",
                lineHeight: "19.12px",
                semibold: {
                    fontWeight: 600,
                },
                medium: {
                    fontWeight: 500,
                }
              },
              caption: {
                fontSize: "10px",
                lineHeight: "13.66px",
                fontWeight: 600,
              },
        },
    },
    breakpoints: {
        sm: "24em",
        md: "48em",
        lg: "62em",
        xl: "80em",
    }
})