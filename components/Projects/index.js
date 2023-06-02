import ImageProj from "../../assets/images/imageShreya.jpeg"

import RuCafeImage from "../../assets/images/Screen Shot 2023-05-22 at 4.48.54 PM.png"
import { ProjectCard } from "./ProjectCard";
import './index.scss';
import React from 'react';
import {Row, Nav, Col, Container, Tab} from "react-bootstrap"
import { Component } from 'react';
import imageBackground from '../../assets/images/david-pisnoy-GmN13w9bg8w-unsplash.jpg';
import { useEffect } from "react";
import reactClosetImage from "../../assets/images/Screenshot 2023-05-31 at 12.13.39 PM.png";
import reactHomeClosetImage from "../../assets/images/Screenshot 2023-05-31 at 1.10.08 PM.png";
import virtualrealityImage from "../../assets/images/IMG-1167.jpg";
import adaptiveLearningImage from "../../assets/images/Screenshot 2023-05-31 at 12.22.37 PM.png";
import rosterJavaImage from "/Users/shreyapandey/Desktop/Projects/Portfolio/react-portfolio/src/assets/images/roster.png";
import androidAppImage from "../../assets/images/rucafeapp.png";
function Projects()
 {
    useEffect(() => {document.body.style.backgroundColor = 'white'})


    const projects = [
        {title: "Virtual Closet Simulator",
        description: "Created a website to give a visual simulation of the articles of clothing is my closet",
        toolsUsed: "Node js, mySql, React-bootstrap",
        link: "https://github.com/Xhrya/Closet",
         imgUrl:reactHomeClosetImage }, 

        //  {title: "Hangry Heads",
        //  description: "Created using Reach Native. A platform to minimize and reduce food waste",
        //   imgUrl:RuCafeImage }

      
    ]

    const projectsAndroid=[
     

         {title: "Cafe App",
         description: "Built an interactive cafe app to buy coffee and donuts",
         toolsUsed:"Android Studio, Gradle",
         link: "https://github.com/Xhrya/RuCafeAndroidApp",
          imgUrl:androidAppImage },
           
    ]

    const javaProjects=[
        {title: "Cafe App",
        description: "Cafe app modeled using Java Fx/Swing",
        toolsUsed: "JavaFX/Java Swing",
        link: "https://github.com/Xhrya/RUCafeProject4",
         imgUrl:RuCafeImage },

         {title: "Student Roster",
         description: "Roster to enroll, register, and add students",
         toolsUsed: "JavaFX/Java Swing",
         link: "https://github.com/Xhrya/Project3SoftMeth",
          imgUrl:rosterJavaImage }

    ]

    const researchProjects=[
        {title: "Virtual Reality",
        description: "Worked with Prof Jingang Yi  to simulate high elevation environments for testing on the Exo-Skeleton RAM project",
        toolsUsed: "Unity(c#), SteamVR",
        link: "https://mae.rutgers.edu/research-areas-and-laboratories",
         imgUrl:virtualrealityImage },

        //  {title: "Adaptive Learning",
        //  description: "Signal Processing and Adaptive learning",
        //  link: "Currently in progress",
        //   imgUrl:adaptiveLearningImage }

    ]


    return(
       <section >
        <Container className="projects-page">
            <Row>
                <Col>   
                    <h2> Projects</h2>
                    {/* <p> Project paragraph sample text</p> */}
                <Tab.Container id="pills-tabs" defaultActiveKey ="first">
                <Nav variant="pills"  className="nav-pills mb-5 justify-content center align-items" defaultActiveKey="second" id="pills-tab" style={
                    {fontSize:'20px', fontFamily:'helvitica'}
                }>
                  
                  <Nav.Item>
                        <Nav.Link eventKey = "first">React </Nav.Link>
                  </Nav.Item>
                   
                  <Nav.Item>
                        <Nav.Link eventKey = "second">Android </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                        <Nav.Link eventKey = "third">Java </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                        <Nav.Link eventKey = "fourth">Research </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) =>
                                {
                                    return(
                                       <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <Row>
                            {
                                projectsAndroid.map((project,index) =>
                                {
                                    return(
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }

                       </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                            {
                                javaProjects.map((project,index) =>
                                {
                                    return(
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }

                       </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                    <Row>
                            {
                                researchProjects.map((project,index) =>
                                {
                                    return(
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }

                       </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
 

                </Col>
            </Row>
        </Container>

        {/* <img className="background-image-right" src={imageBackground}>
        </img> */}

                        
       </section>
    )
}

export default Projects;

