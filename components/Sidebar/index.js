import './index.scss'
import { Outlet, Link, NavLink } from 'react-router-dom';
import LogoS from "../../assets/images/shreyapandeypurple.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, fa8, faPrint, faList, faBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
   <div className='nav-bar'>

    {/* <Link className = 'logo' to = '/home'>
        <img src= {LogoS} alt = "logo" />

    </Link>  */}

    <nav>
 

        <NavLink exact = "true" activeclassname="active" className="home-link" to ="/home">
            <FontAwesomeIcon icon ={faHome} color ="#ffffff" />

        </NavLink>

    
        <NavLink exact = "true" activeclassname="active" className="projects-link" to ="/projects">
            <FontAwesomeIcon icon ={faBook} color ="#ffffff" />

        </NavLink>

        <NavLink exact = "true" activeclassname="active" className="contact-link" to ="/contact">
            <FontAwesomeIcon icon ={faEnvelope} color ="#ffffff" />

        </NavLink>
    </nav>

    <ul>
        <li>
            <a href="https://www.linkedin.com/in/shreyadpandey/" >
            <FontAwesomeIcon icon={faLinkedin} color = '#4d4d4e' />
            </a>
        </li>

        <li>
            <a href="https://github.com/Xhrya" >
            <FontAwesomeIcon icon={faGithub} color = '#4d4d4e' />
            </a>
        </li>

        <li>
            <a href="https://www.instagram.com/xhrya/" >
            <FontAwesomeIcon icon={faInstagram} color = '#4d4d4e' />
            </a>
        </li>


    </ul>
   </div>


)


export default Sidebar;