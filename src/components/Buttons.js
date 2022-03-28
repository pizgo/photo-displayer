import React from "react";
import { useSelector, useDispatch} from 'react-redux'
import { imgActions} from "../ReduxStore/redux";


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
            <div>
                {indexUrl > 0 && <button onClick={handlePrev}>Prev</button>}
                {indexUrl <= allSlugs.length - displayedNumberOfImg && <button onClick={handleNext}>Next</button>}
            </div>
        </>
    );
};

export default Buttons;