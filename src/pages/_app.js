import Layout from "@/components/Layout";
import { store } from "@/store/store";
import "@/styles/globals.css";
import "@/styles/navbar.module.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  </>
}
