import './css/App.css';
import Photos from "./components/Photos";
import Buttons from "./components/Buttons";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react";
import {imgActions} from "./ReduxStore/redux";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();
    const urlPrefixLength = 28;

    function handleNewSlugsData(slugArray) {
        dispatch(imgActions.storeFetchedSlugs(slugArray))
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
                        return el.slice(urlPrefixLength, el.length)
                    })
                    handleNewSlugsData(slugArray);
                }
            )
    }, []);
  return (
    <div className='container'>
        <Buttons/>
       <Photos/>
    </div>
  );
}

export default App;
