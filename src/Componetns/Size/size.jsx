import React from 'react';
import './size.css'


const Size = (props) => {

    const ChangeBrushSize = () => {
        if (props.brushSize == 5) {
            props.ChangeBrushSize(1);
        }
        else {
            props.ChangeBrushSize(props.brushSize + 2);
        }
    }

    return (
        <>
            <div className="toolTypeSize" onClick={() => ChangeBrushSize()} >
                <div className="imgContainer" >
                    <img src={props.tool} alt="" />
                </div>

                {
                    props.brushSize == 3 ?
                        <div className="addedCircles1"></div>
                        :
                        <></>
                }

                {
                    props.brushSize == 5 ? (
                        <>
                            <div className="addedCircles1"></div>
                            <div className="addedCircles2"></div>
                        </>
                    )

                        :
                        <></>
                }
                {/* <div className="addedCircles1"></div>
                <div className="addedCircles2"></div> */}
            </div>
        </>
    );
}

export default Size;
