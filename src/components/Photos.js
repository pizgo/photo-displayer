import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { imgActions} from "../ReduxStore/redux";

const Photos = () => {

    const dispatch = useDispatch();
    const allSlugs = useSelector(state => state.allSlugs)
    const indexUrl = useSelector(state => state.indexUrl)
    const allPhotosUrls = useSelector(state => state.allPhotosUrls)
    const displayedNumberOfImg = useSelector(state => state.displayedNumberOfImg)

    function handleNewSlugsData(slugArray) {
        dispatch(imgActions.storeFetchedSlugs(slugArray))
    }

    function handleNext() {
        dispatch(imgActions.incrementIndexUrl());
    }

    function handlePrev() {
        dispatch(imgActions.decrementIndexUrl());
    }

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then(response => response.json())
            .then(response => {
                    const urlArray = response.map(function (el) {
                        return (el.url);
                    });
                    const regex = /^https:\/\/unsplash\.com\/photos\//;
                    const filteredUrl = urlArray.filter(function (el) {
                        return el.match(regex)
                    })
                    const slugArray = filteredUrl.map(function (el) {
                        return el.slice(28, el.length)
                    })
                    handleNewSlugsData(slugArray)
                }
            )
    }, []);

    return (
        <>
            <div>
                {allPhotosUrls.map((el, key) =>

                    <img key={key} src={el}/>)}
            </div>
            {indexUrl > 0 && <button onClick={handlePrev}>Prev</button>}
            {indexUrl <= allSlugs.length - displayedNumberOfImg && <button onClick={handleNext}>Next</button>}
        </>
    )
}

export default Photos;