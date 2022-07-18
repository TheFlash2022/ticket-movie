import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import HomeCarousel from "./layout/HomeCarousel/HomeCarousel";

export default function HomeTemplate(props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            
            <props.component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
}
