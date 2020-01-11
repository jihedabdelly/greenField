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

const CategorieM = props => (
  <MDBCol lg="2" md="0" className="mb-lg-0 mb-4">
    <MDBCard cascade narrow ecommerce>
      <Link to="ThisCategorie/ProductList">
        <MDBCardImage
          cascade
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
          top
          alt="sample photo"
          overlay="white-slight"
        />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle>
            <strong>T-shirt</strong>
          </MDBCardTitle>
        </MDBCardBody>
      </Link>
    </MDBCard>
  </MDBCol>
);

export default CategorieM;
