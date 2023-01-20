import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main className="page--container">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
