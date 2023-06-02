import {Button, Col, Row} from "react-bootstrap";
import './index.scss';
export const ProjectCard=({title, description,link,toolsUsed, imgUrl}) =>
{
    return(
        <div className="columns">
            <Col sm={6} md={4} className="mx-5">

                
                <div className="oneContainer">

                        <h4>{title} </h4>
                    
                         <div className="proj-imgbx">
                            <img src={imgUrl}/>
                        </div>

                        <div className = "proj-txtx">
                                {/* <h4>
                                    {title}
                                </h4>                  */}
                                <span >Description: {description}</span>

                                <br></br>
                                <span> Tools used: {toolsUsed}</span>

                                <br></br>
                               <a href={link} style={{fontSize:'30px'}}>
                                 <Button>
                                        Click To View Code
                                </Button>

                               </a>
                        </div>
                </div>

                    
                </Col>
        </div>
    
 

        
     
        
       
    )
}