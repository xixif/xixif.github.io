import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { VscDebugContinue } from "react-icons/vsc";
import Badge from 'react-bootstrap/Badge';
import MyCarousel from "./MyCarousel";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiOpencv,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import {FiFigma} from "react-icons/fi"

function ProjectCards(props) {
  const [showdtl, setShowDetails] = useState(false);
  const handledtlClose = () => setShowDetails(false);
  const handledtlShow = () => setShowDetails(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getIcon=(logo)=>{
    if (logo==='Python') {return <DiPython />}
    else if (logo==='Java') {return <DiJava />}
    else if (logo==='C++') {return <CgCPlusPlus />}
    else if (logo==='Figma') {return <FiFigma />}
    else if (logo==='PyTorch') {return <SiPytorch />}
    else if (logo==='Tensorflow') {return <SiTensorflow />}
    else if (logo==='OpenCV') {return <SiOpencv />}
    else if (logo==='React') {return <DiReact />}
    else if (logo==='nodejs') {return <DiJavascript1 />}
  }
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text className="project-basic">
          {props.date}<br />
          {props.category}
        </Card.Text>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description} <br />
          {props.tag.map((item, index)=>{
            return <Badge pill bg="light" text="primary"># {item}</Badge>
          })}
        </Card.Text>
        <Button variant="primary" onClick={handledtlShow}>
          <VscDebugContinue /> &nbsp;
          Details
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.isBlog && (
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ marginLeft: "10px" }}
          >{props.detailbtn}
            
            {/* <CgWebsite /> &nbsp;
            {"Demo"} */}
          </Button>
        )}
        <Modal show={showdtl} onHide={handledtlClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            {props.details.map((item)=>{
              return <p>• {item} </p>
            })}
            <Row style={{ paddingBottom: "10px" }}>
            {props.logos.map((item)=>{
              return <Col xs={4} md={4} className="tech-icons">
              {getIcon(item)}
            </Col>
            })}
            </Row>
          </Modal.Body>
              
          <Modal.Footer>
            <Button variant="secondary" onClick={handledtlClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <MyCarousel
              prototype={props.prototype}
            >

            </MyCarousel>
          </Modal.Body>
              
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
