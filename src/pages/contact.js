import React from "react";
import Head from "../components/head";
import { Layout } from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>You can Reach me</h1>
      <p>Via phone: 9999114553</p>
      <p>Via email: kamal.patra369@gmail.com</p>
      <p>
        My{" "}
        <a
          href="https://www.linkedin.com/in/kamal-patra-601756b7/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
