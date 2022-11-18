
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Uc1 from './Uc1';
import Uc2 from './Uc2';
import Uc3 from './Uc3';
import Uc4 from './Uc4';
import Uc5 from './Uc5';
import Uc6 from './Uc6';
import Uc7 from './Uc7';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/Uc1"
           element={ <Uc1 />}/>
          <Route path="/Uc2"
          element={<Uc2 />}/>
          
          <Route path="/Uc3"
          element={<Uc3 />}/>
          
          <Route path="/Uc4"
           element={ <Uc4 />}/>
          
          <Route path="/Uc5"
           element={ <Uc5/>}/>
          
          <Route path="/Uc6"
           element={ <Uc6 />}/>
          
          <Route path="/Uc7"
            element={<Uc7 />}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
