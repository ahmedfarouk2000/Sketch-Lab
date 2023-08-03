import React, { useState, useEffect, useRef } from 'react';
import Cell from '../Cell/cell';
import './grid.css'
import brush from '../../Assets/Icons/brush.svg'
import eraser from '../../Assets/Icons/eraser.svg'
import fill from '../../Assets/Icons/fill.svg'
import rainbow from '../../Assets/Icons/rainbow.svg'

import { useSelector } from 'react-redux';

const Grid = (props) => {
    const [gridSize, setGridSize] = useState(props.grid); // means its 8 x 8 size of grid
    useEffect(() => {
        setGridSize(props.grid)
        document.documentElement.style.setProperty('--gridSize', props.grid);
        // console.log('the new grid size is:', props.grid)
    }, [props.grid]);






    const [color, setColor] = useState('black');
    // const [clear, setClear] = useState(false);
    // const [mode, setMode] = useState('brush') // the inital type of brush
    const exportRef = useRef();

    useEffect(() => {
        props.exportRefFun(exportRef)
    }, []);


    const currentArray = new Array(gridSize * gridSize).fill(0)

    // console.log('at grid', props.mode)

    useEffect(() => {
        // console.log('aaaaaaaa')
        if (props.mode === 'brush') {
            document.body.style.cursor = `url(${brush}), auto`;
            // console.log('in use Effect brush')
        }

        else if (props.mode === 'eraser') {
            document.body.style.cursor = `url(${eraser}), auto`;
            // console.log('in use Effect eraser')
        }

        else if (props.mode === 'fill') {
            document.body.style.cursor = `url(${fill}), auto`;
            // console.log('in use Effect eraser')
        }

        else if (props.mode === 'rainbow') {
            document.body.style.cursor = `url(${rainbow}), auto`;
            // console.log('in use Effect rainbow')
        }

    }, [props.mode]);


    useEffect(() => {
        // console.log('the color is ', props.color)
        setColor(props.color)
    }, [props.color]);










    const [isLeftMouseDown, setIsLeftMouseDown] = useState(false);

    const handleMouseDown = (e) => {
        if (e.buttons === 1) {
            setIsLeftMouseDown(true);
            // console.log('yes you clicked left click')
        }
    };


    const handleMouseUp = (e) => {
        // console.log('mouse is up')
        setIsLeftMouseDown(false);
    };

    useEffect(() => {
        setCellColorChange(props.imgColor)
    }, [props.imgColor]);

    const [CellColorChange, setCellColorChange] = useState(props.imgColor);
    const changeImgColor = (inputChild, index) => {
        // console.log('fromt the child:', inputChild)
        const OldAllImageColor = [...CellColorChange]
        OldAllImageColor[index] = inputChild
        setCellColorChange(OldAllImageColor)
    }

    const changeWholeImgColor = (FillColor) => {
        const OldAllImageColor = [...CellColorChange]
        for (let i = 0; i < CellColorChange.length; i++) {
            OldAllImageColor[i] = FillColor
        }
        setCellColorChange(OldAllImageColor)
    }


    const changeImgColorBox = (color, index) => {
        // console.log('start index: ', index)
        const OldAllImageColor = [...CellColorChange]
        const takeFromToLeft = index - Math.floor(props.brushSize / 2)
        let StartIndex = Math.floor(takeFromToLeft - (props.grid * Math.ceil(props.brushSize / 3)))

        if (props.brushSize == 1) { // worked less go
            StartIndex = Math.floor(takeFromToLeft - (props.grid * Math.floor(props.brushSize / 3)))
        }

        for (let i = 0; i < props.brushSize; i++) {


            let startInterval = Math.floor((StartIndex + (props.grid * i)) / Number(props.grid)) * Number(props.grid);
            let endInterval = startInterval + Number(props.grid);

            if (index % props.grid == 0) {
                console.log('indeed less than:')
                startInterval = Math.ceil((StartIndex + (props.grid * i)) / Number(props.grid)) * Number(props.grid);
                endInterval = startInterval + Number(props.grid);
            }

            for (let j = 0; j < props.brushSize; j++) {
                // const startInterval = props.grid * i;
                // const endInterval = startInterval + Number(props.grid);

                const indexToColor = StartIndex + (props.grid * i) + j;

                // console.log('start interval: ', startInterval)
                // console.log('current Index: ', indexToColor, StartIndex, (props.grid * i), j)
                // console.log('end interval: ', endInterval)

                if (indexToColor < 0) {
                    // console.log('first')
                    continue
                }

                // if (StartIndex < 0 && indexToColor >= 0) {
                //     console.log('sec')
                //     continue
                // }

                // OldAllImageColor[indexToColor] = color


                if (indexToColor >= startInterval && indexToColor < endInterval) { // i can color safely 
                    // console.log('enteered')
                    // console.log('current Index: WORKED ', indexToColor)
                    // console.log('current Index: WORKED2 ', StartIndex)
                    // console.log('current Index: WORKED3 ', (props.grid * i))
                    OldAllImageColor[indexToColor] = color

                }


            }
        }
        setCellColorChange(OldAllImageColor)
    }


    const DeleteOrNot = useSelector(state => state.DoubleClick)
    useEffect(() => {
        // console.log('TPPPPPPPPPPPPPPPP', DeleteOrNot)
        changeWholeImgColor('white')
    }, [DeleteOrNot]);






    return (
        <>


            <div className="gridParent" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} ref={exportRef}>
                {
                    currentArray.map((item, index) =>
                        <Cell changeImgColorBox={(color, index) => changeImgColorBox(color, index)} brushSize={props.brushSize} index={index} changeWholeImgColor={(FillColor => changeWholeImgColor(FillColor))} changeImgColor={(inputChild, index) => changeImgColor(inputChild, index)} imgColor={CellColorChange} key={index} color={color} isLeftMouseDown={isLeftMouseDown} mode={props.mode} />
                    )
                }
            </div>



            {/* <button onClick={() => setIsRainbow(!isRainbow)}>Rainbow mode</button> */}

        </>
    );
}

export default Grid;
