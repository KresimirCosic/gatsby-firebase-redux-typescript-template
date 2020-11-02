import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface MetaTagData {
  name: "author" | "copyright" | "keywords" | "description" | "robots"
  content: string
}

export interface SEOData {
  title: string
  metaTags: MetaTagData[]
}

const initialState: SEOData = {
  title: "Gatsby, Firebase, Redux, TypeScript boilerplate template",
  metaTags: [
    { name: "author", content: "Kresimir Cosic" },
    {
      name: "description",
      content:
        "Default template starter using GatsbyJS (ReactJS), Firebase, Redux and TypeScript.",
    },
    {
      name: "keywords",
      content:
        "javascript, typescript, reactjs, gatsbyjs, redux, firebase, template, boilerplate",
    },
  ],
}

const SEOSlice = createSlice({
  name: "SEO",
  initialState,
  reducers: {
    setTitleData(state, action: PayloadAction<string>) {
      state.title = action.payload
    },
  },
})

export const { setTitleData } = SEOSlice.actions

export default SEOSlice.reducer
