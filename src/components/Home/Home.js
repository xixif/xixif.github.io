import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <strong className="main-name"> Yichu Fang</strong><br />
          <a href="mailto:fyc0918@gmail.com">fyc0918@outlook.com</a>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
