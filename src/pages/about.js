import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Layout } from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I'm {data.site.siteMetadata.author}, a Web developer currently living in
        New Delhi, India. I have 5+ years of experience in frontend web
        development.
      </p>
      <p>
        You can find my <Link to="/contact">contact here.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
