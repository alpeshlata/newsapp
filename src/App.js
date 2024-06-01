
import './App.css';
import React, { Component } from 'react'
import NavBar from './/component/NavBar'
import NewsItems from './NewsItems';

export default class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <div className="container my-4">
            <h1>Top Higlith Dragon News</h1>
              <div className="row my-4">
                <div className="col md-3">
                    <NewsItems title="Title" description="Description"/>
                </div>
                <div className="col md-3">
                    <NewsItems title="Title" description="Description"/>
                </div>
                <div className="col md-3">
                    <NewsItems title="Title" description="Description"/>
                </div>
                <div className="col md-3">
                    <NewsItems title="Title" description="Description"/>
                </div>
              </div>
          
          </div>
      </div>
    )
  }
}