import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={3} className="home-about-description">
            <h1 style={{fontSize: "2em" }}> About me</h1>
          </Col>
          <Col md={8} className="myAvtar">
            Hi, I'm Yichu Fang.
            I am currently a Year 4 student at <a href="https://www.nottingham.edu.cn/en/index.aspx" target="_blank" rel="noreferrer"><i>University of Nottingham Ningbo China</i> (UNNC)</a>.<br />
            <br />I am interested in the interdisciplinary area of computer science and social science.<br />
            <br />
            
            <p style={{fontSize: "18px" }}><strong>Languages</strong></p>
            <ul>
              <li>English</li>
              <li>Chinese</li>
            </ul>
            <ul>

            </ul>

            <p style={{fontSize: "18px" }}><strong>Programming Languages</strong></p>
            <ul>
              <li>C, C++</li>
              <li>Python (PyTorch, Tensorflow, Flask, etc.)</li>
              <li>Java (SpringBoot, MyBatis-Plus, Shiro, etc.)</li>
              <li>MySQL, SQLite</li>
              <li>HTML, CSS, JavaScript (Vue.js, React)</li>
              <li>Haskell</li>
            </ul>

            <p style={{fontSize: "18px" }}><strong>Hobbies</strong></p>
            <ul>
              <ImPointRight /> Playing video games (Cube Escape Series, The Room Series)<br/>
              <ImPointRight /> Editing Videos
            </ul>
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
