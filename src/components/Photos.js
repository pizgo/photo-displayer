import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { imgActions} from "../ReduxStore/redux";
import Buttons from "./Buttons";

const Photos = () => {

    const dispatch = useDispatch();
    const allPhotosUrls = useSelector(state => state.allPhotosUrls);

    function handleNewSlugsData(slugArray) {
        dispatch(imgActions.storeFetchedSlugs(slugArray))
    };

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
                    handleNewSlugsData(slugArray);
                }
            );
    }, []);

    return (
        <>
            <div>
                {allPhotosUrls.map((el, key) =>
                    <img key={key} src={el} alt={'img'}/>)}
            </div>
            <Buttons />
        </>
    );
};

export default Photos;