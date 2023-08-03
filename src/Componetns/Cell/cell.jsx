import React, { useState, useEffect } from 'react';
import './cell.css'

const Cell = (props) => {



    // const [isInitialMount, setIsInitialMount] = useState(true);




    // useEffect(() => {
    //     if (isInitialMount)
    //         setIsInitialMount(false)
    //     else {
    //         console.log('the clear changed')
    //         let allCells = document.querySelectorAll('.gridCell')
    //         for (const cell of allCells) {
    //             cell.style.backgroundColor = 'white'
    //         }
    //     }

    // }, [props.clear]);

    // useEffect(() => {
    //     console.log('the img Color:', props.imgColor)

    // }, [props.imgColor]);

    // useEffect(() => {
    //     setCellColor(props.imgColor)
    // }, [props.imgColor]);

    // const [cellColor, setCellColor] = useState('')






    const changeColor = (e) => {
        e.preventDefault();
        // console.log('at change color', props.mode)
        if (props.isLeftMouseDown && props.mode == 'fill') {
            props.changeWholeImgColor(props.color)
        }
        else if (props.isLeftMouseDown && props.mode == 'brush') {
            // props.changeImgColor(props.color, props.index)
            // console.log('INDEX IS:', props.index)
            props.changeImgColorBox(props.color, props.index)
        }
        else if (props.isLeftMouseDown && props.mode == 'rainbow') {
            const Red = Math.floor(Math.random() * 256);
            const Green = Math.floor(Math.random() * 256);
            const Blue = Math.floor(Math.random() * 256);
            // e.target.style.backgroundColor = `rgb(${Red},${Green},${Blue})`
            // props.changeImgColor(`rgb(${Red},${Green},${Blue})`, props.index)
            props.changeImgColorBox(`rgb(${Red},${Green},${Blue})`, props.index)

        }
        else if (props.isLeftMouseDown && props.mode == 'eraser') {
            // e.target.style.backgroundColor = 'white'
            props.changeImgColorBox(`white`, props.index)
            // props.changeImgColorBox(props.color, props.index)
        }
    }

    return (
        <>
            <div
                onMouseMove={(e) => changeColor(e)}
                className="gridCell" style={{ backgroundColor: props.imgColor[props.index] }}></div>
        </>
    );
}

export default Cell;
