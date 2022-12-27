import { useEffect, useRef } from 'react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import '../styles/tailwind.css'
import 'focus-visible'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

function usePrevious(value: string) {
  let ref = useRef<string>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Zach Lippa"
        defaultTitle="Zach Lippa - Full Stack Developer"
      />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full  ring-1 ring-zinc-900/10  dark:ring-stratos-300/60" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
