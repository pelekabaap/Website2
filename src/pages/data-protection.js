import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const DataProtectionPage = () => (
  <Layout>
    <SEO title="Data Protection" />
    <Section>
      <H1>Data Protection</H1>
      <H3>Do not track</H3>
      <P>
        In general, you can prevent the analysis of user behavior by blocking the use of cookies in your browser, for example by
         make an exception in the browser (such as Firefox browser). Please look in the program help for how this can be set up 
         in your browser.

        Of course, you can also on occasion, in individual cases or periodically delete cookies in your browser to clear tracking
        information. If you have activated the so-called Do-Not-Track function ("DNT") in your browser, then your visit to websites 
        will not automatically be recorded by web analysis tools. However, this does not work with every browser. To enable DNT in your
        browser, please check your browser's help function if you do not know how to activate it.
      </P>
      <H3>Changes to the privacy policy</H3>
      <P>
        We reserve the right to change this privacy policy. 
      </P>
      <H3>Inquires</H3>
      <P>
        All inquires concerning the data protection for this website can be addressed to:
      <Box>
        <br />
      <P>Abhimanyu Singh<br />      
      Cologne Business School  <br />    
      Hardefuststr. 1 <br />     
      D-50677 Köln<br />
      </P>
      
      </Box>

      </P>
    </Section>
  </Layout>
)

export default DataProtectionPage
