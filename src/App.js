
import './App.css';
import React, { Component } from 'react';
import NavBar from './component/NavBar';
import News from './/component/News';
import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSige=8;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (      
      <div>
          <BrowserRouter>
              <NavBar/>
              <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
              <Routes>
                  <Route path='/' element={<News setProgress={this.setProgress}    key='general' pageSize ={this.pageSige}  category="general" country="in"/> }/>
                  <Route path='/business' element={<News setProgress={this.setProgress}    key='business' pageSize ={this.pageSige}  category="business" country="in"/> }/>
                  <Route path='/entertainment' element={<News setProgress={this.setProgress}    key='entertainment' pageSize ={this.pageSige}  category="entertainment" country="in"/> }/>
                  <Route path='/general' element={<News setProgress={this.setProgress}    key='general' pageSize ={this.pageSige}  category="general" country="in"/>}/>
                  <Route path='/health' element={<News setProgress={this.setProgress}    key='health' pageSize ={this.pageSige}  category="health" country="in"/> }/>
                  <Route path='/science' element={<News setProgress={this.setProgress}    key='science' pageSize ={this.pageSige}  category="science" country="in"/> }/>
                  <Route path='/sports' element={<News setProgress={this.setProgress}    key='sports' pageSize ={this.pageSige}  category="sports" country="in"/> }/>
                  <Route path='/technology' element={<News setProgress={this.setProgress}    key='technology' pageSize ={this.pageSige}  category="technology" country="in"/> }/>
              </Routes>
          </BrowserRouter>
      </div>
    )
  }
}