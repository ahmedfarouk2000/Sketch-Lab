import React, { useEffect, useState } from 'react';
import color from '../../Assets/Icons/color.svg'
import rainbow from '../../Assets/Icons/rainbow.svg'
import './Tab.css'

const Tab = (props) => { // will contiain drop down or not will see



    const [currentColors, setCurrentColors] = useState(["red", "blue", 'green'])

    const toggleIcon = () => {
        // console.log('the icon')
        document.querySelector('.imgContainer').classList.toggle('none')
        // console.log(document.querySelector('.imgContainer'))
        let allColors = document.querySelectorAll('.color')
        for (const currentColor of allColors) {
            currentColor.classList.toggle('block')
        }


    }


    const currentColor = (e) => {
        // setColor(e.target.value)
        props.SelectColor(e.target.value)
        let currentColorCopy = [...currentColors]
        currentColorCopy.pop(); // remove the last element 
        currentColorCopy[2] = currentColorCopy[1]
        currentColorCopy[1] = currentColorCopy[0]
        currentColorCopy[0] = e.target.value
        setCurrentColors(currentColorCopy)
        document.documentElement.style.setProperty('--color1', currentColorCopy[0]);
        document.documentElement.style.setProperty('--color2', currentColorCopy[1]);
        document.documentElement.style.setProperty('--color3', currentColorCopy[2]);

        document.documentElement.style.setProperty('--outlineColor', currentColorCopy[0]);
    }

    // const rainbowMode = (bool) => {
    //     props.Rainbow(bool)
    // }

    const oldCurrentColor = (index) => {
        props.SelectColor(currentColors[index])
        document.documentElement.style.setProperty('--outlineColor', currentColors[index]);


    }

    return (
        <>
            <div className="currentTab" onMouseEnter={() => toggleIcon()} onMouseLeave={() => toggleIcon()}>


                <div className="imgContainer" >
                    <img src={color} alt="" />
                </div>



                <div className="color1 color" onClick={() => oldCurrentColor(0)}></div>
                <div className="color2 color" onClick={() => oldCurrentColor(1)}></div>
                <div className="color3 color" onClick={() => oldCurrentColor(2)}></div>



                <div className="Rainbow color" >
                    <input className='inputColor' type="color" onBlur={(e) => currentColor(e)} />
                    <img src={color} alt="" />
                </div>

                {/* <div className="Rainbow color" >
                    <input className='inputColor' type="color" onClick={() => rainbowMode(true)} />
                    <img src={rainbow} alt="" />
                </div> */}










            </div>




        </>
    );
}

export default Tab;
