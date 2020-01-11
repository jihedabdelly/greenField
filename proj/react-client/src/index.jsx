import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  hashHistory
} from "react-router-dom";
import ReactDOM from "react-dom";
/* import $ from 'jquery'; */
import Header from "./components2/Header.jsx";
import Footer from "./components2/Footer.jsx";
import Body from "./components2/Body.jsx";

import Men from "./components2/categories/Men.jsx";
import Women from "./components2/categories/Women.jsx";
import Login from "./components2/user/login.jsx";
import ProductDetails from "./components2/categories/ProductDetails.jsx";
import MenProductsCategories from "./components2/categories/MenProductsCategories.jsx";
import WomenProductsCategories from "./components2/categories/WomenProductsCategories.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: []
    };
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/someroute',
    //   success: (data) => {
    //     this.setState({
    //       someState: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/Home" component={Body} />

            <Route
              exact
              path="/Men/categories"
              component={MenProductsCategories}
            />
            <Route
              exact
              path="/Women/categories"
              component={WomenProductsCategories}
            />
            <Route path="/Men/ThisCategorie/ProductList" component={Men} />
            <Route
              path="/Men/ThisCategorie/ProductList/ProductID/ProductDetails"
              component={ProductDetails}
            />
            <Route path="/Women/ThisCategorie/ProductList" component={Men} />
            <Route
              exact
              path="/MenProductsCategories"
              component={MenProductsCategories}
            />
            <Route exact path="/Login" component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
