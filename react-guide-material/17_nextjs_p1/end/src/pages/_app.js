//　POINT _app.jsにはページ全体で共通化したい処理を記述
import "../styles/globals.css";
import { AppProvider } from "../context/AppContext.js";
import Layout1 from "../components/layout/layout1.js";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout1>{page}</Layout1>)
  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
}

export default MyApp;
