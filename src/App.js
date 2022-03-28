import './css/App.css';
import Photos from "./components/Photos";
import Buttons from "./components/Buttons";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className='container'>
       <Photos/>
       <Buttons/>
    </div>
  );
}

export default App;
