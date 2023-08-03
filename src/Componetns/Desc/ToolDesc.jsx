import React from 'react';
import './Desc.css'

const ToolDesc = (props) => {
    return (
        <>

            <div className="currentTool">
                <div className='img'>
                    <img src={props.icon} alt="icon" />

                </div>
                <p className='ToolDesc'>{props.Desc}</p>
            </div>

        </>
    );
}

export default ToolDesc;
