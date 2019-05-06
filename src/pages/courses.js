import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import imgWhale from "../images/1920/4x1/Whale.jpg"
import imgMantas from "../images/1920/4x1/Mantas.jpg"
import imgMoray from "../images/1920/4x1/Moray.jpg"
import imgPuffer from "../images/1920/4x1/Puffer.jpg"
import imgTurtle from "../images/1920/4x1/Turtle.jpg"
import imgTrevally from "../images/1920/4x1/Trevally.jpg"
import imgPADI from "../images/1920/4x1/PADI.jpg"
import Carousel from 'nuka-carousel';
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <H1 fontSize={[4]} lineHeight={[1.5]}>
        The options
      </H1>

      <H3>Here is a preview of what awaits you</H3>
    </Section>

    <Carousel vertical>
      <img src={imgWhale} alt="Whale" />
      <img src={imgMantas} alt="Mantas" />
      <img src={imgMoray} alt="Moray" />
      <img src={imgPuffer} alt="Puffer" />
      <img src={imgTrevally} alt="Trevally" />
      <img src={imgTurtle} alt="Turtle" />
    </Carousel>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <P>

          </P>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <P>

          </P>
        </Box>
      </Flex>
      <Section>
        <H3>Recreational courses</H3>
        <img src={imgPADI} alt="PADI" />
      </Section>
      <RespGrid min={"240px"}>
        <P>
          <H3>Booking a course.</H3>
          <ul>

            Contact:{" "}
            <a
              href="http://andamanbubbles.com/about.html#contact/"
              target="_blank"
              rel="nofollow noopener"
            >
              http://andamanbubbles.com/about.html#contact/
            </a>





          </ul>

        </P>
        <P>

        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default AboutPage
