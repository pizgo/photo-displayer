import './css/App.css';
import Photos from "./components/Photos";
import Buttons from "./components/Buttons";
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className='container'>
        <Buttons/>
       <Photos/>
    </div>
  );
}

export default App;
