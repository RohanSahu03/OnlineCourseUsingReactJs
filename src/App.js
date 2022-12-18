import './App.css';

import Menu from './components/Menu';
import AllCources from './components/AllCources';
import AddCourse from './components/AddCourse';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home';


function App() {
  document.body.style = 'background: #dfe6e9;'

  return (
    <div className="App">
      <BrowserRouter>

        <div className='row'>

          <div className='col-sm-3 offset-sm-1'>
            <Menu />
           
          </div>

          <div className='col-lg-7'>
        <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/add-course' element={<AddCourse/>} exact />
              <Route path='/courses' element={<AllCources/>} exact />
        </Routes>
            
          </div>

        </div> 

      </BrowserRouter>

    </div>
  );
}

export default App;
