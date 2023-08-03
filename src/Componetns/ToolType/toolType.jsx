import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DoubleClickToDelete } from '../../Store/Counter/CounterStore';
import './toolType.css'
// import {DoubleClickToDelete} from '..'

const ToolType = (props) => {

    const SelectMode = (e) => {
        // console.log('current mode is', props.type)


        let allTypes = document.querySelectorAll('.toolType')
        for (const currentType of allTypes) {
            currentType.classList.remove('addOutline')
        }

        let targetElement = e.target;
        while (true) {
            if (targetElement.classList.contains('toolType')) {
                break
            }
            targetElement = targetElement.parentNode
        }

        targetElement.classList.add('addOutline')
        props.SelectedMode(props.type)

    }

    useEffect(() => {
        let allTypes = document.querySelectorAll('.toolType')
        allTypes[0].classList.add('addOutline')

    }, []);

    const dispatch = useDispatch();
    const DoubleClickToDeleteFun = () => {
        if (props.type === 'eraser') {
            dispatch(DoubleClickToDelete())
        }
    }



    return (
        <>

            <div className="toolType" onClick={(e) => SelectMode(e)} onDoubleClick={() => DoubleClickToDeleteFun()}>

                <div className="imgContainer" >
                    <img src={props.tool} alt="" />
                </div>




            </div>



        </>
    );
}

export default ToolType;
