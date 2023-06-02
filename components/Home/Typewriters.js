import React from 'react'
import Typewriter from 'typewriter-effect'
import './home.scss';

function Typewriters()
{
    return(
        <div>
            <h1>
                <Typewriter options={
                    {
                        autoStart: true,
                        loop:true,
                        delay: 50,
                        strings:[ "Web developer", "Francophone", "Researcher"]
                    }
                } />
            </h1>
        </div>
    )
}

export default Typewriters;