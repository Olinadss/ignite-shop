import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"


export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  
  return <Component {...pageProps} />
}