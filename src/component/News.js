import React,{useEffect,useState} from 'react'
import NewsItems from '../NewsItems'
import Spinner from './Spinner';
import PropTypes, { string } from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
    const [articales,setarticales]=useState([]);      
    const [loading,setloding]=useState(true);      
    const [totalResults,settotalResults]=useState(1);      
    const [page,setpage]=useState(1);      

    const capitalaizeFirstLatter=(String)=>{
        return String.charAt(0).toUpperCase()+String.slice(1);
    }
    const updnews=async()=>{
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        
        let data=await fetch(url);
        props.setProgress(50);
        let parseData= await data.json();
        props.setProgress(70);
        setarticales(parseData.articles)
        settotalResults(parseData.totalResults)
        
        props.setProgress(100);
       }
       

       useEffect(()=>{
        updnews();
        document.title=`${capitalaizeFirstLatter(props.category)} - Dragon News`;
        setloding(false);
        //eslint-disable-next-line
       },[])
       const fetchMoreData =async()=>{
        
            setpage(page+1)
        
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        
        let data=await fetch(url);
        let parseData= await data.json();
        setarticales(articales.concat(parseData.articles))
       }
  
  
    return (
     
        <>
            <h1 className="text-center m-4">DragonNews {props.category} Top Higlith</h1>
            {loading&&<Spinner/>}
            <InfiniteScroll
                dataLength={articales.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articales.length!==totalResults}
                loader={<Spinner/>}
                
            >
            <div className='container'>
                <div className="row">
                    {
                        articales.map((element)=>{
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
News.defaultProps = {
    country:'in',
    pageSize: 8,
    category:'general'
} 
News.propTypes={
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
}
export default  News