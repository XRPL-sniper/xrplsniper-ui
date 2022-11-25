import Head from 'next/head'
import {ThemeProvider} from 'next-themes'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import 'intro.js/introjs.css'
import '../styles/index.css'
import 'react-nice-dates/build/style.css'
import '../styles/datepicker.css'
import {ViewportProvider} from '../hooks/useViewport'
import {appWithTranslation} from 'next-i18next'
import Layout from 'components/Layout'
import Script from 'next/script'


const PageTitle = () => {

    return (
        <Head>
            {/*<title>{marketTitleString}Mango Markets</title>*/}
            <title>XRPL Sniper</title>
        </Head>
    )
}

function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>XRPL Sniper</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="XRPL Sniper"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta
                    name="keywords"
                    content="XRPL Sniper, nft rarity ranking, nft stats"
                />
                <meta
                    name="description"
                    content="XRPL Sniper - NFT Rarity ranking and NFT Statistic service on XRPL."
                />
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    href="/apple-touch-icon.png"
                />
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Mango Markets"/>
                <meta
                    name="twitter:description"
                    content="XRPL Sniper - NFT Rarity ranking and NFT Statistic service on XRPL."
                />
                <meta
                    name="twitter:image"
                    content="https://www.mango.markets/socials/twitter-image-1200x600.png?34567878"
                />
                <meta name="google" content="notranslate"/>
                <link rel="manifest" href="/manifest.json"></link>
            </Head>
            <Script
                strategy="lazyOnload"
                src="https://www.googletagmanager.com/gtag/js?id=GTM-T7TLZ7D"
            ></Script>
            <Script strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-T7TLZ7D');
        `}
            </Script>
            <ThemeProvider defaultTheme="Dark">
                <PageTitle/>
                <ViewportProvider>
                    <div className="min-h-screen bg-th-bkg-1">
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </div>

                    {/*<Notifications />*/}
                </ViewportProvider>
            </ThemeProvider>
        </>
    )
}

export default appWithTranslation(App)
