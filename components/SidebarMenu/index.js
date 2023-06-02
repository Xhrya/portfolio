import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

import LogoS from "../../assets/images/shreyapandeypurple.png"


import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, fa8, faPrint, faList, faBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './index.scss'

const Sidebar=()=>
{
    return (
        <div className="nav-bar" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#cdace8">
        <CDBSidebarHeader prefix={<i className="fa fa-bars"></i>}>
            <div className="logoBox" style={{ display: 'flex', alignItems: 'center', position:'absolute' }}>
                <img
                src={LogoS}
                alt=""
                style={{ width: '30px' }}
                />
                <h6 className="ms-2">Shreya Pandey ™</h6>
            </div>

        </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
               
            
            <div className="content-icons">
            <NavLink exact = "true" activeclassname="active" className="home-link" to ="/home">
                <FontAwesomeIcon icon ={faHome} color ="#ffffff" />                        
                {/* <CDBSidebarMenuItem className="homeNameOpen">
                 Home
                </CDBSidebarMenuItem > */}
             </NavLink>
              


               
             <NavLink exact = "true" activeclassname="active" className="projects-link" to ="/projects">
                <FontAwesomeIcon icon ={faBook} color ="#ffffff" />
                {/* <CDBSidebarMenuItem >
                    Projects
                     </CDBSidebarMenuItem> */}
                
            </NavLink>
                  


             <NavLink exact = "true" activeclassname="active" className="contact-link" to ="/contact">
                <FontAwesomeIcon icon ={faEnvelope} color ="#ffffff" />
                {/* <CDBSidebarMenuItem>
                    Contact
                </CDBSidebarMenuItem> */}
            </NavLink>



            </div>
                
          

    


         
{/* 
                <NavLink exact = "true" activeclassname="active" className="home-link" to ="/home">
                    <FontAwesomeIcon icon ={faHome} color ="#ffffff" />

                </NavLink>

                <NavLink exact = "true" activeclassname="active" className="projects-link" to ="/projects">
                   <FontAwesomeIcon icon ={faBook} color ="#ffffff" />
              </NavLink> */}

               


                {/* <NavLink exact to="/about"  activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="sticky-note">About </CDBSidebarMenuItem>
                </NavLink> */}

           


          </CDBSidebarContent>

  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '40px 0px',
              }}
            >
        <ul className="footerIcons">
            <li>
                <a href="https://www.linkedin.com/in/shreyadpandey/" >
                <FontAwesomeIcon icon={faLinkedin} color = '#white' />
                </a>
            </li>

            <li>
                <a href="https://github.com/Xhrya" >
                <FontAwesomeIcon icon={faGithub} color = '#white' />
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/xhrya/" >
                <FontAwesomeIcon icon={faInstagram} color = '#white' />
                </a>
            </li>
      </ul>

                </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>

    )
}

export default Sidebar;
