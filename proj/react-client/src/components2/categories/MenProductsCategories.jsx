import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBBadge,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn
} from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  hashHistory
} from "react-router-dom";

import CategorieM from "./CategorieM.jsx";

const MenProductsCategories = props => (
  <div>
    <section className="text-center my-5">
      <h1>All Men products categories </h1>
      <MDBRow>
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
        <CategorieM />
      </MDBRow>
    </section>
  </div>
);

export default MenProductsCategories;
