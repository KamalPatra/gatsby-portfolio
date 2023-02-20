import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
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
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>
        I'm {data.site.siteMetadata.author}, a Web Developer living in New
        Delhi, India
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
