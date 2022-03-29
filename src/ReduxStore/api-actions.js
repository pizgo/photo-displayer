import {imgActions} from "./redux";

const urlPrefixLength = 28;

const extractOnlyUrls = (photosDataList) => {
    const urlArray = photosDataList.map(function (el) {
        return (el.url);
    });
    const regex = /^https:\/\/unsplash\.com\/photos\//;
    const filteredUrl = urlArray.filter(function (el) {
        return el.match(regex)
    })
    const slugArray = filteredUrl.map(function (el) {
        return el.slice(urlPrefixLength, el.length)
    })
    return slugArray
}

export const fetchSlugs = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://picsum.photos/v2/list')

            if (!response.ok){
                throw new Error("Could not fetch slugs data!")
            }

            const data = await response.json();
            return data;
        };

        try {
            const responseData =  await fetchData();
            const slugArray = extractOnlyUrls(responseData)
            dispatch(imgActions.storeFetchedSlugs(slugArray))

        } catch (error){
            console.log("Error while fetching slugs data:" + error)
        }
    }
}