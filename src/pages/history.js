import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text } from "rebass"

import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/SEO"
import imgHavelock from "../images/1920/4x1/Havelock.jpg"
import { H1, H3, P } from "../components/VerticalRhythm"

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
          <H1>The Island</H1>

          <P>Havelock Island, officially Swaraj Island, is the one of the largest islands that comprise a chain of islands to the east of Great Andaman in the Andaman Islands. It belongs to the South Andaman administrative district, part of the Indian union territory of Andaman and Nicobar Islands. The island is 41 km (25 mi) northeast of the capital city, Port Blair.</P>

          <P>Radhanagar Beach on the western coast, also known as Number 7 Beach, is one of the most popular beaches on Havelock and was named "Best Beach in Asia" by Time in 2004. Other notable beaches include Elephant Beach on the northwest coast and Vijay Nagar Beach (No. 5), Beach No. 3 and Beach No. 1 on the east coast. Kalapathar is another famous beach.</P>
          
           <img src={imgHavelock} alt="Havelock" />

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
