import React from 'react';
import './Desc.css'

import color from '../../Assets/Icons/color.svg'
import fill from '../../Assets/Icons/fill.svg'
import eraser from '../../Assets/Icons/eraser.svg'
import brush from '../../Assets/Icons/brush.svg'
import rainbow from '../../Assets/Icons/rainbow.svg'
import size from '../../Assets/Icons/size.svg'

import ToolDesc from './ToolDesc';

const Desc = () => {
    return (
        <>

            <div className="leftPart">

                <h1 className='title'> Sketch Lab</h1>

                <p className='desc'> Welcome to SketchLab, the ultimate online platform for unleashing your creativity through sketching and drawing. With an array of powerful features, SketchLab empowers artists of all levels to bring their imaginations to life.</p>

                <div className="AllTools">

                    <ToolDesc icon={color} Desc={'Choose different color from previouly used colors or choose new color from the color picker'} />
                    <ToolDesc icon={brush} Desc={'Brush Mode'} />
                    <ToolDesc icon={fill} Desc={'Fill Mode'} />
                    <ToolDesc icon={eraser} Desc={'Eraser Mode, Double Click to erase all'} />
                    <ToolDesc icon={rainbow} Desc={'Rainbow Mode to generate random colors'} />
                    <ToolDesc icon={size} Desc={'Brush Size 1 outline means 1x1 pixel, 2 outlines means 3x3 pixels , 3 outlines means 5x5 pixels'} />




                </div>
            </div>

        </>
    );
}

export default Desc;
