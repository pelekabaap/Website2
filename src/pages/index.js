import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/1920/4x1/02.jpg"
import img01_21x9 from "../images/1440/21x9/02.jpg"
import img01_16x9 from "../images/1200/16x9/02.jpg"
import img01_3x2 from "../images/0800/3x2/02.jpg"
import img01_4x3 from "../images/0480/4x3/02.jpg"
import breakpoints from "../theme/breakpoints"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Figure caption="Photo from pexels.com">
      <picture>
        <source srcSet={img01_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img01_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img01_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img01_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img01_4x3} alt="Teampic" />
      </picture>
    </Figure>
    <Section>
      <H1>Come dive with us</H1>
      <P>Discover the life under</P>
      <P>We are going to have fun</P>
      <P>
        Of course, you can also follow us at {" "}
        <FontAwesomeIcon icon="coffee" />, <FontAwesomeIcon icon="yin-yang" />,{" "}
        <FontAwesomeIcon icon="peace" />.
      </P>
    </Section>
  </Layout>
)

export default IndexPage
