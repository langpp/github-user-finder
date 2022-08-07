import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider attribute="class" store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp