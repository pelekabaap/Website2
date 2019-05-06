import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import imgGEAR from "../images/1920/4x1/GEAR.jpg"

const ResourcesPage = () => (
    <Layout>
        <SEO title="Equipment" />
        <Section>
            <H1>Equipment</H1>
            <img src={imgGEAR} alt="Gear" />
        </Section>
        <Section>
            <H2>References</H2>
            <Ol>
                <li>Buying the best equipment.</li>
                <ul>
                    <li>
                        Aqualung:{" "}
                        <a
                            href="http://www.aqualung.com/de/"
                            target="_blank"
                            rel="nofollow noopener"
                        >
                            http://www.aqualung.com/de/
            </a>
                    </li>




                </ul>
                <li>Booking a course.</li>
                <ul>
                    <li>
                        Contact:{" "}
                        <a
                            href="http://andamanbubbles.com/about.html#contact/"
                            target="_blank"
                            rel="nofollow noopener"
                        >
                            http://andamanbubbles.com/about.html#contact/
            </a>
                    </li>




                </ul>







            </Ol>
        </Section>

    </Layout>
)

export default ResourcesPage