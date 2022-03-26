import React, {useState, useEffect, useRef } from "react";

const Photos = () => {

    const [ photosUrl, setPhotosUrl ] = useState([]);

    let allSlugs = useRef([]);
    let indexUrl = useRef(0);

    function createThreeImgs() {
        const newUrl = allSlugs.current.slice(indexUrl.current, indexUrl.current+3).map(function(el) {
            return 'http://source.unsplash.com/'+el
        })
        setPhotosUrl(newUrl)
    }

    function handleNext() {
        indexUrl.current+=3
        createThreeImgs()
    }

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then( response => response.json() )
            .then( response => {
                 const urlArray = response.map(function (el) {
                    return (el.url);
                });
                const regex = /^https:\/\/unsplash\.com\/photos\//;
                const filteredUrl = urlArray.filter(function(el) {
                    return el.match(regex)
                })
                const slugArray = filteredUrl.map(function(el) {
                     return el.slice(28, el.length)
                 })
                allSlugs.current = slugArray
                createThreeImgs()
            }
        )
    }, []);

    return (
        <>
            <div>
                <img src={photosUrl[0]}/>
                <img src={photosUrl[1]}/>
                <img src={photosUrl[2]}/>
            </div>
            <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Photos;