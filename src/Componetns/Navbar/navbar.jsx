import React, { useState, useEffect } from 'react';
import Tab from '../Tab/Tab';
import ToolType from '../ToolType/toolType';
import './navbar.css'

import fill from '../../Assets/Icons/fill.svg'
import eraser from '../../Assets/Icons/eraser.svg'
import brush from '../../Assets/Icons/brush.svg'
import rainbow from '../../Assets/Icons/rainbow.svg'
import size from '../../Assets/Icons/size.svg'
import Size from '../Size/size';





const Navbar = (props) => {

    useEffect(() => {
        setGridSize(props.grid)
        const inputBar = document.querySelector('#rangeInput')
        inputBar.value = props.grid
    }, [props.grid]);




    const SelectColor = (selectedColor) => {
        props.SelectColor(selectedColor)
    }

    const SelectedMode = (selectedMode) => {
        props.SelectedMode(selectedMode)
        // console.log('the selectet mode at parent', selectedMode)
    }


    const ChangeBrushSize = (brushSize) => {
        props.ChangeBrushSize(brushSize)
        // console.log('from nav')
    }


    const [gridSize, setGridSize] = useState(40); // means its 8 x 8 size of grid
    const changeGridSize = (e) => {
        setGridSize(e.target.value);
        // document.documentElement.style.setProperty('--gridSize', e.target.value);
        props.gridSize(e.target.value)
    }


    // const Rainbow = (rainbow) => {
    //     props.Rainbow(rainbow)
    // }


    return (
        <>
            <div className="navContainer">

                <div className="navTemp">

                    <Tab SelectColor={SelectColor} />
                    <ToolType tool={brush} type={'brush'} SelectedMode={SelectedMode} />
                    <ToolType tool={fill} type={'fill'} SelectedMode={SelectedMode} />
                    <ToolType tool={eraser} type={'eraser'} SelectedMode={SelectedMode} />
                    <ToolType tool={rainbow} type={'rainbow'} SelectedMode={SelectedMode} />

                    <Size brushSize={props.brushSize} tool={size} type={'size'} ChangeBrushSize={ChangeBrushSize} />





                    <div className="rangeContainer">
                        <input type="range" min={1} max={64} id='rangeInput' onChange={changeGridSize} />
                        <span>{gridSize}x{gridSize}</span>
                    </div>

                </div>


            </div>

        </>
    );
}

export default Navbar;
