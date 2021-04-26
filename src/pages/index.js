import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero';
import Intro from '../components/intro';
import Features from '../components/features';
import Compare from '../components/compare';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
    <Features />
    <Compare />
  </Layout>
)

export default IndexPage
