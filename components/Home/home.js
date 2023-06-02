import './home.scss';
import React from 'react';
import imageShreya from "../../assets/images/imageShreya.jpeg"
import {Link} from "react-router-dom";

import imageG from "../../assets/images/imageShreya.jpeg"
import imageG6 from "../../assets/images/IMG-1622.jpg"
import imageG2 from "../../assets/images/IMG-1505.jpg"
import imageG3 from "../../assets/images/IMG-2153.jpg"
import imageG4 from "../../assets/images/IMG-4406.jpg"
import imageG5 from "../../assets/images/IMG-1167.jpg"
import imageG1 from "../../assets/images/IMG-4047.jpg"
import { useEffect } from 'react';
import Gallery from './Gallery'
import Typewriters from './Typewriters';

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() 
{

    useEffect(() => {document.body.style.backgroundColor = '#fff'})


    const galleryImages = [{
    }, 
    {img: imageG1
    }, 
    {img: imageG2
    }, 
    {
        img: imageG3
    }, 
    {img: imageG4
    }, {img: imageG5
    }, 
    {
        img: imageG6
    }, ]

    

    return (

        

        <div className='home-page'> 

       


          

            <div className ='top-half'>

                <div className='left-Text'>
                    <h1> Bonjour, Je suis </h1> 

                    <h2> Shreya Pandey</h2>
                    <Typewriters/>

                    <br></br>

                    <p className='paragraph'>
                        Rising Junior
                        <br>
                        </br>
                        ECE+CS @ Rutgers

                       
                        <Link to="/projects" > 
                             <Button> View projects</Button>
                         </Link>

                        <Link to="/contact">                    
                            <Button> Contact me</Button>
                         </Link>
                                      

                        

                    </p>

                    
                    {/* <Link to="/contact"> CONTACT ME</Link> */}



                </div>
            

                <div className='right-Image'>
                      
                         <img src={imageG} alt="image"/>

                </div>
               
            </div>   


            <div className ='bottom-half'>
                <Gallery
                    galleryImages={galleryImages}
                />
                
            </div>   
        </div>

       
        
    );
    

}

export default Home;
