import { createSlice, configureStore} from "@reduxjs/toolkit";
import { createStore} from 'redux';

const initialState = { allSlugs: [], indexUrl: 0, allPhotosUrls: [], displayedNumberOfImg: 3}

const generatePhotosUrls = (state) => {
    return state.allSlugs.slice(state.indexUrl, state.indexUrl + state.displayedNumberOfImg).map(function (el) {
        return 'http://source.unsplash.com/' + el
    });
}

const displayingImgSlice = createSlice({
    name: 'displayingImg',
    initialState,
    reducers: {
        storeFetchedSlugs(state, action) {
            state.allSlugs = action.payload;
            state.allPhotosUrls = generatePhotosUrls(state)
        },
        incrementIndexUrl(state) {
            state.indexUrl += state.displayedNumberOfImg
            state.allPhotosUrls = generatePhotosUrls(state)
        },
        decrementIndexUrl(state) {
            state.indexUrl -= state.displayedNumberOfImg
            state.allPhotosUrls = generatePhotosUrls(state)
        }
    }
})

const store = createStore(displayingImgSlice.reducer)

export const imgActions = displayingImgSlice.actions;
export default store;