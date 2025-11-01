import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Site Verification */}
        <meta name="google-adsense-account" content="ca-pub-1580556331698002" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1580556331698002"
          crossOrigin="anonymous"
        />

        {/* Google Consent Management Platform (CMP) */}
        <script
          async
          src="https://www.gstatic.com/cmp/consent.js"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__cmp = window.__cmp || function() { console.log('CMP initialized'); };
              window.__cmp('init', {
                uiLayout: 'two-button', // 'two-button' or 'three-button'
                publisherName: 'ai',
                gdprApplies: true,
                defaultConsent: 'non-personalized'
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
