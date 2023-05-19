import { Container, Stack,useMediaQuery} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import { UIProvider } from "./context/ui";
import React from 'react';
import './App.css';
import './font/aktifoa-bold.otf';
import Banner1 from "./banner1";
import Banner2 from "./banner2";
import Banner3 from "./banner3";
import Footer from "./footer";
import Form from "./form";
import { useTheme } from "@mui/system";

function App() {
  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Banner1 />
            <Form />
            <Banner2 />
            <Banner3 />
            <Footer />
            {matches ? <div className="footerTextMob"> © 2023 Avery Dennison Label Packaging Material. All rights reserved.</div> :<div className="footerText"> © 2023 Avery Dennison Label Packaging Material. All rights reserved.</div>}

          </UIProvider>
         </Stack>
      </Container>
   </ThemeProvider>

    
  );
}

export default App;
