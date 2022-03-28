import React from "react";
import { useSelector, useDispatch} from 'react-redux'
import { imgActions} from "../ReduxStore/redux";
import {Button} from "react-bootstrap";

const Buttons = () => {

    const dispatch = useDispatch();
    const indexUrl = useSelector(state => state.indexUrl);
    const allSlugs = useSelector(state => state.allSlugs);
    const displayedNumberOfImg = useSelector(state => state.displayedNumberOfImg);

    function handleNext() {
        dispatch(imgActions.incrementIndexUrl());
    }

    function handlePrev() {
        dispatch(imgActions.decrementIndexUrl());
    }
    return (
        <>
            <div className='button_container'>
                <Button className='btn btn-success'
                        style={{ visibility: (indexUrl > 0) ? 'visible' : 'hidden'}}
                        onClick={handlePrev}>Prev</Button>
                <Button className='btn btn-success'
                        style={{ visibility: (indexUrl <= allSlugs.length - displayedNumberOfImg) ? 'visible' : 'hidden'}}
                        onClick={handleNext}>Next</Button>
            </div>
        </>
    );
};

export default Buttons;