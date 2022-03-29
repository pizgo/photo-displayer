import './css/App.css';
import Photos from "./components/Photos";
import Buttons from "./components/Buttons";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchSlugs} from "./ReduxStore/api-actions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSlugs())
       }, [dispatch]);

  return (
    <div className='container'>
        <Buttons/>
       <Photos/>
    </div>
  );
}

export default App;
