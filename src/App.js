import './App.css';
import React, { useState } from 'react';
import NavBar from './component/NavBar';
import News from './/component/News';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
 let [Progress,setProgress]=useState(0);
  const apikey='308090622f2c4c788bd2b118ad7f4db6';
  const pageSige=8;
  setProgress=(progress)=>{
    setProgress(Progress=progress)
  }
    return (      
      <div>
          <BrowserRouter>
              <NavBar/>
              <LoadingBar
        color='#f11946'
        progress={Progress}
        
      />
              <Routes>
                  <Route path='/' element={<News setProgress={  setProgress} apikey={  apikey}  key='general' pageSize ={  pageSige}  category="general" country="in"/> }/>
                  <Route path='/business' element={<News setProgress={  setProgress} apikey={  apikey}  key='business' pageSize ={  pageSige}  category="business" country="in"/> }/>
                  <Route path='/entertainment' element={<News setProgress={  setProgress} apikey={  apikey} key='entertainment' pageSize ={  pageSige}  category="entertainment" country="in"/> }/>
                  <Route path='/general' element={<News setProgress={  setProgress} apikey={  apikey}  key='general' pageSize ={  pageSige}  category="general" country="in"/>}/>
                  <Route path='/health' element={<News setProgress={  setProgress} apikey={  apikey}  key='health' pageSize ={  pageSige}  category="health" country="in"/> }/>
                  <Route path='/science' element={<News setProgress={  setProgress} apikey={  apikey} key='science' pageSize ={  pageSige}  category="science" country="in"/> }/>
                  <Route path='/sports' element={<News setProgress={  setProgress} apikey={  apikey} key='sports' pageSize ={  pageSige}  category="sports" country="in"/> }/>
                  <Route path='/technology' element={<News setProgress={  setProgress} apikey={  apikey} key='technology' pageSize ={  pageSige}  category="technology" country="in"/> }/>
              </Routes>
          </BrowserRouter>
      </div>
    )
}
// App.defaultProps = {
//   // pageSige:8,
//   // apikey:'308090622f2c4c788bd2b118ad7f4db6'
// } 
App.propTypes={
pageSize:PropTypes.number,
apikey:PropTypes.string
}
export default App