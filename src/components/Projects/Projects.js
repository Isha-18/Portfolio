import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TeleGroup"
              description="An app similar to Telegram.
              Implemented : 
              Email/Password Authentication,
              CRUD operation in Firebase,
              Error Handling,
              Stream Builder Method,
              Search Method and Other Firebase Queries,
              Database Handling.
               Features: Open chat room, group chats similar to telegram.
               Technologies used: Flutter, Dart, Firebase
              "
              ghLink="https://github.com/Isha-18/Telegroup"
              demoLink="https://drive.google.com/file/d/1pIB36US1wKWWLdMTipkiLK_O3dpsxJSq/view?usp=sharing"              
            />
          </Col>
             
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Spotify Clone"
              description="A complete UI design with basic functionalities.
               Future scope: Implement an entire working application similar to Spotify.
               Technologies used: Flutter ,Dart.
              "
              ghLink="https://github.com/Isha-18/spotify_clone"
              demoLink="https://drive.google.com/file/d/1MN_afl6kYmONX-ljCef6avqfGQVCTcvO/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Porfolio Using ReactJs"
              description=" Created a portfolio using ReactJs.
              Technologies used: HTML,CSS, Javascript , ReactJS, React Animations
              "
               ghLink="https://github.com/Isha-18/Portfolio"
               demoLink="https://isha-18.github.io/Portfolio/"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
