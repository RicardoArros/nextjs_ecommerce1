import React from "react";

import { useRouter } from "next/router";

import Layout from "../components/Layout/Layout";

const Unauthorized = () => {
  //
  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="Unauthorized Page">
      <h2>Access Denegado</h2>
      {message && <div>{message}</div>}
    </Layout>
  );
};

export default Unauthorized;
