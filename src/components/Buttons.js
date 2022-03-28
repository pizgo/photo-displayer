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
    };

    function handlePrev() {
        dispatch(imgActions.decrementIndexUrl());
    };
    return (
        <>
            <div className='button_container'>
                {indexUrl > 0 &&
                    <Button className='btn btn-success' onClick={handlePrev}>Prev</Button>}
                {indexUrl <= allSlugs.length - displayedNumberOfImg &&
                    <Button className='btn btn-success' onClick={handleNext}>Next</Button>}
            </div>
        </>
    );
};

export default Buttons;