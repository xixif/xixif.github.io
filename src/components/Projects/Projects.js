import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

import fraudlogo from '../../Assets/Projects/fraudpro/logo.png';
import slogo from '../../Assets/Projects/spro/logo.png';
//bin project
import binlogo from '../../Assets/Projects/binpro/logo.webp';
import bin1 from '../../Assets/Projects/binpro/bin1.png';
import bin2 from '../../Assets/Projects/binpro/bin2.png';
import bin3 from '../../Assets/Projects/binpro/bin3.png';
//fusion project
import fusionlogo from '../../Assets/Projects/fusionpro/logo.jpg';
import fusion1 from '../../Assets/Projects/fusionpro/fusion1.jpeg';
import fusion2 from '../../Assets/Projects/fusionpro/fusion2.jpeg';
import fusion3 from '../../Assets/Projects/fusionpro/fusion3.jpeg';
import fusion4 from '../../Assets/Projects/fusionpro/fusion4.jpeg';
import fusion5 from '../../Assets/Projects/fusionpro/fusion5.jpeg';
//library project
import liblogo from '../../Assets/Projects/libpro/logo.jpg';
import libpro1 from '../../Assets/Projects/libpro/libpro1.png';
import libpro2 from '../../Assets/Projects/libpro/libpro2.png';
import libpro3 from '../../Assets/Projects/libpro/libpro3.png';
import libpro4 from '../../Assets/Projects/libpro/libpro4.png';
import libpro5 from '../../Assets/Projects/libpro/libpro5.png';
import libpro6 from '../../Assets/Projects/libpro/libpro6.png';
import libpro7 from '../../Assets/Projects/libpro/libpro7.png';
import libpro8 from '../../Assets/Projects/libpro/libpro8.png';
//scheduling project
import schelogo from '../../Assets/Projects/schepro/logo.png';
import schepro1 from '../../Assets/Projects/schepro/schepro1.png';
import schepro2 from '../../Assets/Projects/schepro/schepro2.png';
import schepro3 from '../../Assets/Projects/schepro/schepro3.png';
import schepro4 from '../../Assets/Projects/schepro/schepro4.png';
import schepro5 from '../../Assets/Projects/schepro/schepro5.png';



function Projects() {
  const graudate="Graduation Project"
  const summerResearch="Group Research Project at UNNC"
  const coursework="Coursework at UNNC"
  const result="Result"
  const prototype="prototype"
  const hci="human-computer interaction"
  const design="design"
  const optimization="optimization"

  //dissertation
  const fusion_d1="Used Top-hat transform to calibrate the color"
  const fusion_d2="The current pipeline achieved an average SSIM of 0.23 higher than the formal method"
  const fusion_d3="The current pipeline achieved an average standard value of 26.79 higher than the formal method"
  const fusion_tools=["Python", "Tensorflow", "PyTorch", "OpenCV"]
  //sudoku
  const sudoku_d1="Designed four rounds of Sudoku puzzles for each participant with no obervation, sensor observation, human observation, and sensor & human observation"
  const sudoku_d2="Controlled variables, such as environment temperature and 3puzzle difficulty levels"
  const sudoku_d3="Pre-processed GSR, infrared temperature and heart rate data"
  const sudoku_tools=["Python"]
  //library
  const lib_d1="Designed 31 pages of prototype for the mobile APP individually"
  const lib_d2="As the group leader, led a team of 7, including an online international student, to conduct a user study for the prototype"
  const lib_d3="The prototype achieved an average System Usability Scale (SUS) score of 64 and an average error number count of as low as 0.7"
  const lib_tools=["Figma"]

  //vns
  const vns_d1="Designed an improved First Fit Decreasing algorithm for the initial solution"
  const vns_d2="Developed 3 neiborhood algorithm for the VNS, including swap and transfer items, with suitable fitness functions"
  const vns_d3="The reuslt is at most 1 bin higher than the given result for the hard level"
  const vns_tools=["C++"]

  //scheduling
  const scheduling_d1="Developed 4 job shop scheduling algorithms using or-tools module in Python"
  const scheduling_d2="Conducted background research on potential end users to determine their usage scenarios"
  const scheduling_d3="Designed front-end website UI using React"
  const scheduling_d4="Wrote script language using SpringBoot and Magic-API for immediate and flexible scheduling queries from users"
  const scheduling_d5="Wrote 5 back-end APIs using Flask and verified APIs written by teammates"
  const scheduling_d6="As the project manager, fully handled the whole process from project initiation, progress management, to project delivery"
  const scheduling_tools=["Python", "Java", "React", "nodejs"]

  //finance
  const finance_d1="Collected textual and numeric financial data as core input from two original datasets, each of which has 15,000+ data items and 13 attributes"
  const finance_d2="Trained support vector machine (SVM) classification models with prediction accuracy of 0.872 and specificity of 0.943"
  const finance_d3="Conducted feature extraction and concluded that Financial Leverage affects the model most under the consideration of 6 evaluation metrics"
  const finance_tools=["Python","PyTorch"]

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fusionlogo}
              isBlog={true}
              logos={fusion_tools}
              date={"June 2022-Present"}
              category={graudate}
              detailbtn={result}
              tag={["computer vision"]}
              details={[fusion_d1,fusion_d2,fusion_d3]}
              prototype={[fusion1,fusion2,fusion3,fusion4,fusion5]}
              title="RGB and INF Image Fusion"
              description="This project aims to fuse visible and infrared images using GAN and the attention mechanism to improve the image quality and allow more people to be detected in the image."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slogo}
              isBlog={false}
              logos={sudoku_tools}
              date={"June 2022-Present"}
              category={summerResearch}
              tag={[hci, "social science"]}
              details={[sudoku_d1,sudoku_d2,sudoku_d3]}
              title="Solving Sudoku Under Pressure"
              description="This project is inspired by the Hawthorne Effect. We used different forms of data to evaluate participants’ performance under four different observation techniques. We also divided 40 participants into paper and iPad groups to analyze the effect of different interfaces."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liblogo}
              isBlog={true}
              logos={lib_tools}
              date={"March-May 2022"}
              category={"Mixed "+coursework}
              detailbtn={prototype}
              tag={[hci, design]}
              details={[lib_d1,lib_d2,lib_d3]}
              prototype={[libpro1,libpro2,libpro3,libpro4,libpro5,libpro6,libpro7,libpro8]}
              title="Library Mobile APP"
              description="This project focuses on interface design and evaluation. I first designed the prototype for comprehensive usage in the school library and gained feedback via conducting a user study with my teammates."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={binlogo}
              isBlog={true}
              logos={vns_tools}
              date={"March-May 2022"}
              category={"Individual "+coursework}
              detailbtn={result}
              tag={["artificial intelligence", optimization]}
              details={[vns_d1,vns_d2,vns_d3]}
              prototype={[bin1,bin2,bin3]}
              title="VNS for Bin Packing Problem"
              description="This coursework is based on the variable neighborhood search. The purpose is to allow items to be packed in fewer bins and the result to get as close as the given one."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schelogo}
              isBlog={true}
              logos={scheduling_tools}
              date={"October 2021-April 2022"}
              category={"Software Engineering Group Project at UNNC"}
              detailbtn={prototype}
              tag={["software engineering", optimization, design]}
              details={[scheduling_d1,scheduling_d2,scheduling_d3,scheduling_d4,scheduling_d5,scheduling_d6]}
              prototype={[schepro1,schepro2,schepro3,schepro4,schepro5]}
              title="Job Scheduling Software System"
              description="This project is aimed to serve as a scheduling system for the manufacturing industry with the unique feature of the script language. We went through the complete process of software engineering."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraudlogo}
              isBlog={false}
              logos={finance_tools}
              date={"June 2021-January 2022"}
              category={summerResearch}
              tag={["machine learning", "finance"]}
              details={[finance_d1,finance_d2,finance_d3]}
              title="Fraud Detection using Machine Learning"
              description="The purpose of this project is to develop models to predict the potential fraud behavior of Chinese listed companies. We used different models and diverse features to improve the result."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
