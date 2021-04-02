import React, { Component } from "react";
//Import file
import Section from "./Section";
import Feature from "./Feature";

//Import Logo Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";
import KeyFeature from "../Agency/KeyFeature";
import ExperienceTeam from "./ExperienceTeam";
import Pricing from "./Pricing";
import Client from "./Cilent";
import Blog from "../ITSolution/Blog";

export default class index extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
    document.getElementById("brandLogo").src = logolight;
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  UNSAFE_componentWillMount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
      document.getElementById("brandLogo").src = logodark;
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
      document.getElementById("brandLogo").src = logolight;
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* import Section */}
        <Section />

        {/* import Feature */}
        <Feature />

        {/* Key Feature */}
        <KeyFeature />

        {/* ExperienceTeam */}
        <ExperienceTeam />

        {/* Pricing */}
        <section className="section">
          <Pricing />

          {/* Client */}
          <Client />

          {/* Blog */}
          <Blog />
        </section>
      </React.Fragment>
    );
  }
}
