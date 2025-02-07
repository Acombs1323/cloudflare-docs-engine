import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html theme="light" { ...props.htmlAttributes }>
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        { props.headComponents }
        <script type="text/javascript" src="https://developers.cloudflare.com/_cf/analytics.js" />
        <script src="https://tr.www.cloudflare.com/gtm.js?id=GTM-PKQFGQB" />
      </head>

      <body { ...props.bodyAttributes }>
        { props.preBodyComponents }

        <noscript key="noscript" id="gatsby-noscript" className="DocsNoscript">
          This app works best with JavaScript enabled.
        </noscript>

        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }}/>

        { props.postBodyComponents }
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
