import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import Header from "../components/molecules/Header";
import SidePanel from "../components/molecules/SidePanel";

const mdTheme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Head>
        <title>JR Language</title>
        <meta name="description" content="JR Language" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header callback={toggleDrawer} open={open} />
          <SidePanel callback={toggleDrawer} open={open} />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Component {...pageProps} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}
