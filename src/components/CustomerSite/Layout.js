import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@material-ui/core/Box";
export const AppLayout = (props) => {
  return (
    <>
      <Header />
      <Box>{props.children}</Box>
      <Footer />
    </>
  );
};
