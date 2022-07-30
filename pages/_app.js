import { AuthContextProvider } from '../Auth/AuthContext'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return <AuthContextProvider>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </AuthContextProvider>
}

export default MyApp
