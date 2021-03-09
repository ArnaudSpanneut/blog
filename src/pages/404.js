import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const { title, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={title} social={social}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedIn
          github
        }
      }
    }
  }
`
