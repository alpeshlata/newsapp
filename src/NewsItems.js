import React, { Component } from 'react'

export default class NewsItems extends Component {

  
  render() {
    let {title,description,imgUrl,url, author,date,source}=this.props;
    return (
      <div>
        <div className="card ">
          <div >
              <span style={{display:'flex',justifyContent:'flex-end', right:'-4px', top:'-2px',position:'absolute', border:'2px solid red'}}className="badge rounded-pill bg-danger">{source}</span>
          </div>
        
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={url} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
