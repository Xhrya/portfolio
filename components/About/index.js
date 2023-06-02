import './index.scss';
import React from 'react';
import { Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useEffect } from 'react';

function About() 
{
    useEffect(() => {
        document.body.style.backgroundColor = '#A31431'})

    return(
        <div className='about-page'> 
          


            <Link to="/projects"> Click Here to view my projects</Link>

                

            
        </div>
    );
   

}
export default About;
