import React, { useState, useRef } from 'react';
import Grid from '../Grid/grid';
import './home.css'
import Navbar from '../Navbar/navbar';
import Desc from '../Desc/Desc';
import Button from '../Desc/Button';
import exportIcon from '../../Assets/Icons/export.svg'
import importIcon from '../../Assets/Icons/import.svg'

import exportAsImage from '../exportAsImage'

import linkedin from '../../Assets/Icons/linkedin.svg'
import mail from '../../Assets/Icons/mail.svg'
import { useSelector } from 'react-redux';

const Home = () => {


    const [color, setColor] = useState('red') // the inital color
    const [mode, setMode] = useState('brush')
    const [grid, setGrid] = useState(40)
    // const [rainbow, setRainbow] = useState(false)

    const SelectColor = (selectedColor) => {
        setColor(selectedColor)
    }

    const gridSize = (gridSize) => {
        setGrid(gridSize)
    }

    const SelectedMode = (selectedMode) => {
        setMode(selectedMode)
    }



    const [ref, setRef] = useState('');
    const exportRefFun = (exportRef) => {
        setRef(exportRef)
    }



    const [img, setimg] = useState('');



    const [brushSize, setBrushSize] = useState(1); // the default size of the brush

    const ChangeBrushSize = (brushSize) => {
        setBrushSize(brushSize)
    }


    const [imgColor, setImgColor] = useState(new Array(grid * grid).fill(0));

    const handleFileInput = (input) => {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageUrl = e.target.result;

                // Create an image element
                const img = new Image();

                img.onload = () => {

                    const originalWidth = img.width;
                    const originalHeight = img.height;

                    // Calculate the new dimensions for downsizing
                    let newWidth = originalWidth;
                    let newHeight = originalHeight;

                    if (originalWidth > 64) {
                        console.log('SO BIGG');
                        newWidth = 64;
                        newHeight = 64;
                    }

                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');

                    // Set the canvas dimensions to match the image dimensions
                    canvas.width = newWidth;
                    canvas.height = newHeight;

                    // Draw the image onto the canvas
                    context.drawImage(img, 0, 0, newWidth, newHeight)

                    // Get the pixel data from the canvas
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    const pixelData = imageData.data;

                    // Extract the colors of each pixel as hexadecimal values, including transparency
                    const pixelColors = [];

                    for (let i = 0; i < pixelData.length; i += 4) {
                        const r = pixelData[i];
                        const g = pixelData[i + 1];
                        const b = pixelData[i + 2];
                        const a = pixelData[i + 3];

                        // Convert each color component to its hexadecimal representation
                        const colorHex = `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;

                        // Add the hexadecimal color to the pixelColors array, including the alpha channel
                        const colorWithAlphaHex = `${colorHex}${a.toString(16).padStart(2, '0')}`;
                        pixelColors.push(colorWithAlphaHex);
                    }

                    console.log(pixelColors);
                    setImgColor(pixelColors);
                    setGrid(Math.sqrt(pixelColors.length))
                };

                // Set the image source to the uploaded image URL
                img.src = imageUrl;
            };


            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='home'>
            <div className="navbar">
                <Navbar brushSize={brushSize} ChangeBrushSize={ChangeBrushSize} SelectColor={SelectColor} SelectedMode={SelectedMode} gridSize={gridSize} grid={grid} />

            </div>

            <div className="bottomPart">

                <div className="left">
                    <Desc />
                </div>


                <div className="middle">
                    <Grid brushSize={brushSize} color={color} mode={mode} grid={grid} exportRefFun={exportRefFun} imgColor={imgColor} />
                </div>

                <div className="right">



                    <button className='exportButton' onClick={() => exportAsImage(ref.current, "Cool Sketch")}>

                        <h1>Download Sketch</h1>

                        <div className="img">
                            <img src={exportIcon} alt="export icon" />
                        </div>
                    </button>

                    <button class="exportButton">
                        <input class="inputFile" onInput={(e) => handleFileInput(e.target)} type="file"
                            accept="image/*" />

                        <h1>Upload Sketch</h1>

                        <div className="img">
                            <img src={importIcon} alt="import icon" />
                        </div>


                    </button>


                    <div className="iconsContainers">

                        <a className="currentIcon" href='https://www.linkedin.com/in/ahmed-farouk-a54853146/' target='_blank'>
                            <img src={linkedin} alt="" />
                        </a>

                        <a className="currentIcon" href="mailto:ahmedfarouk990099@gmail.com" target='_blank'>
                            <img src={mail} alt="" />
                        </a>


                    </div>





                </div>


            </div>



        </div>
    );
}

export default Home;
