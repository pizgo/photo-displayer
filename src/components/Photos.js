import React, {useState, useEffect} from "react";

const Photos = () => {

    const [ photosUrl, setPhotosUrl ] = useState([]); //tutaj 3 stringi z urlami do fotek

    let allSlugs = [];

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
            }
        )
    }, [])

    return (
        <>
        <div>
            {photosUrl}
        </div>
        </>
    )
}

export default Photos;