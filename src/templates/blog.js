import { graphql } from "gatsby";
import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Layout } from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";

import * as blogtemplateStyles from "./blog.module.scss";
import Head from "../components/head";

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;
export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`;
const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { gatsbyImageData } = node.data.target;
        return <GatsbyImage image={gatsbyImageData} alt="" />;
      },
    },
  };
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div> */}
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      <div className={blogtemplateStyles.contentfulContent}>
        {renderRichText(data.contentfulBlogPost.body, options)}
      </div>
    </Layout>
  );
};

export default Blog;
