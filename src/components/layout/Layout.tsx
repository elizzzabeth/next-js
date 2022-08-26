import React from "react";

// components
import MainHeader from "./mainHeader";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
