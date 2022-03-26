import React, {useState, useEffect} from "react";

const Photos = () => {

    const [ photosUrl, setPhotosUrl ] = useState([]); //tutaj 3 stringi z urlami do fotek

    let allSlugs = [];

    function createThreeImgs() {
        const newUrl = allSlugs.slice(0,3).map(function(el) {
           return 'http://source.unsplash.com/'+el
        })
        setPhotosUrl(newUrl)
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
                allSlugs = slugArray
                createThreeImgs()
            }
        )
    }, [])



    return (
        <>
            <div>
                <img src={photosUrl[0]}/>
                <img src={photosUrl[1]}/>
                <img src={photosUrl[2]}/>
            </div>
      
        </>
    )
}

export default Photos;