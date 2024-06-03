import React, { Component } from 'react'
import NewsItems from '../NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    
    static defaultProps = {
            country:'in',
            pageSize: 8
    } 
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number
    }
      constructor() {
        super();
        console.log("I Am A Contructor")
        this.state={
            articales:[],
            loading:false,
            page:1

        }
       }
       async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({
            articales:parseData.articles,
            totalResults:parseData.totalResults,
            loading:false
        });
       }
       handlePrevClick=async()=>{
        
                 
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data=await fetch(url);
        let parseData= await data.json();
    
        this.setState({
            page:this.state.page-1,
            articales:parseData.articles,
            loading:false
        });
        
        
       }
       handleNextClick=async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData= await data.json();
    
        this.setState({
            page:this.state.page+1,
            articales:parseData.articles,
            loading:false
            
        });
       }


  render() {
    return (
     
        <div className="container my-4">
            <h1 className="text-center m-4">Top Higlith Dragon News</h1>
            {this.state.loading&&<Spinner/>}
            <div className="row">
                {
                    !this.state.loading&&this.state.articales.map((element)=>{
                        return <div className="col-md-3" key={element.url}>
                                    <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage?element.urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2024/05/53756730057_f8d6fd793c_k-760x380.jpg"} url={element.url?element.url:"#"}/>
                                   
                                </div>
                    })
                }
            </div>
            <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1}  className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/10)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      
    )
  }
}
