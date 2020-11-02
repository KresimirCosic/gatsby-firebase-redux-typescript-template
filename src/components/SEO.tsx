import React from "react"
import { Helmet } from "react-helmet"

/* 
This component is used for SEO optimization 
The react-helmet package information https://github.com/nfl/react-helmet 
Important <head> information https://www.ionos.com/digitalguide/websites/web-development/the-most-important-meta-tags-and-their-functions/ 
*/
const SEO: React.FC = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
      />
      <body className="relative" />
    </Helmet>
  )
}

export default SEO
