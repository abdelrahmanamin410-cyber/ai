import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1580556331698002"
          crossOrigin="anonymous"
        />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
