import '../styles/_reset.css'

import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const queryClient = React.useRef(new QueryClient());

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <QueryClientProvider client={queryClient.current} contextSharing={true}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate> 
    </QueryClientProvider>
  )
}

export default MyApp
