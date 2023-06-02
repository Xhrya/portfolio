import React from "react";
import './index.scss';
import { useRef} from "react";
import emailjs from '@emailjs/browser'
import { useEffect } from "react";

function Contact()
{
    useEffect(() => {
        document.body.style.backgroundColor = '#006c67'})

    const refForm = useRef()

    

    const sendEmail =(e) =>
    {
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            'template_9uzmi0v',
            refForm.current,
            'NfOgDdLQML9t2H4WC'
        )
        .then(
            () =>  
            {
                alert('Message successfully sent!')
                window.location.reload(false);
            },
            () =>
            {
                alert('Failed to send the message, please try again')
            }
        )
    };


    return (



  
        
    <div className="container contacts-page">



        <h1 className="header"> Contact Me!</h1> 

     
        <body className="body">
            I am looking to expand my knowledge by participating in hands-on industry and research projects. If you have
            any questions or requrests, please contact me using the form below. 
        </body>

        

        <div className = "contact-form">

            <form ref={refForm} onSubmit={sendEmail}>

            <ul>
                <li className ="half">
                    <input type = "text"
                     name ="name" 
                     placeholder="Name" 
                     required/>
                </li>

                <li className ="half">
                    <input type ="email" 
                    name = "email" 
                    placeholder= "Email" 
                    required/>
                </li>

                <li>
                    <input
                    type= "text"
                     name = "Subject" 
                     placeholder= "Subject" 
                     required/>
                    
                </li>
                

                <li>
                    <textarea
                     name = "message" 
                     placeholder= "Message" 
                     required
                     ></textarea>
                    
                </li>

                <li>
                    <input type="submit" className="flat-button" value = "Submit"/>

                </li>

            </ul>

            
           
    

        </form>
        </div>
    </div>
   
 

)
}

export default Contact;