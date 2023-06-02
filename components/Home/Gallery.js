import { useState } from 'react';

import './home.scss'

const Gallary = ({galleryImages}) => {


   const [slideNumber, setSlideNumber] = useState(0);
   const [openModel, setOpenModel] = useState(false);




   return (
    <div>


    <div className = 'galleryWrap'>
        {
            galleryImages && galleryImages.map((slide, index) => {
                return(
                   
                    <div className="single" key={index}>
                       <img src ={slide.img} alt =''/>


                        </div>          


               )
            })
        }
       
    </div>
</div>
   )
}




export default Gallary;

