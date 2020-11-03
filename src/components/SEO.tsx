import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"

import { RootState } from "../redux/store"

/* 
This component is used for SEO optimization 
The react-helmet package information https://github.com/nfl/react-helmet 
Important <head> information https://www.ionos.com/digitalguide/websites/web-development/the-most-important-meta-tags-and-their-functions/ 
*/
const SEO: React.FC = () => {
  const { title, metaTags } = useSelector((state: RootState) => state.SEO)

  const createMetaTags = () =>
    metaTags.map(tag => (
      <meta key={tag.name} name={tag.name} content={tag.content} />
    ))

  return (
    <Helmet>
      {createMetaTags()}
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
      />
    </Helmet>
  )
}

export default SEO
