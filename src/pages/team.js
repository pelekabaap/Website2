import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text } from "rebass"

import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/SEO"
import { H1, H3, P } from "../components/VerticalRhythm"
import img03 from "../images/1920/4x1/03.jpg"



class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Section>
          <H1>The Instructors</H1>

          <img src={img03} alt="Team" />

        </Section>
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
