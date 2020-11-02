/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import "firebase/firestore"

import React from "react"
import { Provider } from "react-redux"

import store from "./src/redux/store"
import SEO from "./src/components/SEO"

// Wrapping root element with Redux store and providing <head> and SEO information via a component
export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <SEO />
      {element}
    </Provider>
  )
}
