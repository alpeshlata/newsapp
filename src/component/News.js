import React, { Component } from 'react'
import NewsItems from '../NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    
    static defaultProps = {
            country:'in',
            pageSize: 8
    } 
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number
    }
      constructor(props) {
        super(props);
        console.log("I Am A Contructor")
        this.state={
            articales:[],
            loading:true,
            page:1,
            totalResults:0

        }
       }
       async updnews(){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        let data=await fetch(url);
        this.props.setProgress(50);
         let parseData= await data.json();
         this.props.setProgress(70);
         this.setState({
             articales:parseData.articles,
             totalResults:parseData.totalResults,
        
         });
         this.props.setProgress(100);
       }
       
       async componentDidMount(){
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=1&pageSize=${this.props.pageSize}`;
        
        let data=await fetch(url);
        let parseData= await data.json();
        
        this.setState({
            articales:parseData.articles,
            totalResults:parseData.totalResults,
            loading:false
        });
        
        this.updnews();
       }
       fetchMoreData =async()=>{
        this.setState({
            page:this.state.page+1,
           
        });
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({
            articales:this.state.articales.concat(parseData.articles),
            
        });
       }
    //    handlePrevClick=async()=>{
        
                 
    // //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // //    this.setState({loading:true});
    // //    let data=await fetch(url);
    // //     let parseData= await data.json();
    
    // //     this.setState({
    // //         page:this.state.page-1,
    // //         articales:parseData.articles,
    // //         loading:false
    // //     });
            
    //         this.setState({
    //             page:this.state.page-1,
    //         });
    //         this.updnews();
        
    //    }
    //    handleNextClick=async()=>{
        
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=308090622f2c4c788bd2b118ad7f4db6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data=await fetch(url);
    //     // let parseData= await data.json();
    
    //     // this.setState({
    //     //     page:this.state.page+1,
    //     //     articales:parseData.articles,
    //     //     loading:false
            
    //     // });

    //     this.setState({
    //         page:this.state.page+1,
    //     });
    //     this.updnews();
    //    }


  render() {
    return (
     
        <>
            <h1 className="text-center m-4">DragonNews {this.props.category} Top Higlith</h1>
            {this.state.loading&&<Spinner/>}
            <InfiniteScroll
                dataLength={this.state.articales.length} //This is important field to render the next data
                next={this.fetchMoreData}
                hasMore={this.state.articales.length!==this.state.totalResults}
                loader={<Spinner/>}
                // endMessage={
                //     <p style={{ textAlign: 'center' }}>
                //     <b>Yay! You have seen it all</b>
                //     </p>
                //     }
            >
            <div className='container'>
                <div className="row">
                    {
                        this.state.articales.map((element)=>{
                            return <div className="col-md-3" key={element.url}>
                                        <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} source={element.source.name} author={element.author} date={element.publishedAt} imgUrl={element.urlToImage?element.urlToImage:"https://cdn.arstechnica.net/wp-content/uploads/2024/05/53756730057_f8d6fd793c_k-760x380.jpg"} url={element.url?element.url:"#"}/>
                                    
                                    </div>
                        })
                    }
                </div>
            
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1}  className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/10)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
        </>
      
    )
  }
}
