import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) =>  {
    const [articles , setArticles] = useState([]);
    const [loading , setLoading ] = useState(true);
    const [page  ,setPage] = useState(1);
    const [totalResults , setTotalResults] = useState(0);
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }  
 


    // constructor(props) {

    //     super(props);
    //     // console.log("Hello I am a Contructor from News Component");
    //     }
        

    // }
    const updateNews = async() => {
        props.setProgress(10);
        const url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true });
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false,

        // })
        props.setProgress(100);

    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
    }, [])
    

    // const componentDidMount = async() =>{
    //     console.log("cdm");
    //     // let url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a863a1193f6a47db890c4cfc25ab0a07&page=1&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data = await fetch(url);
    //     // console.log(data);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData);
    //     // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults
    //     // ,loading: false});
    //     updateNews();

    // }



    const handleNextClick = async () => {
        // console.log("Previous");
        // if(!(state.page + 1 > Math.ceil(state.totalResults/props.pageSize))){


        //     let url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=business&&category=${props.category}&apiKey=a863a1193f6a47db890c4cfc25ab0a07&page=${ state.page + 1 }&pageSize=${props.pageSize}`;
        //     let data = await fetch(url);
        //     this.setState({loading:true});
        //     console.log(data);
        //     let parsedData = await data.json();
        //     this.setState({page: state.page + 1 ,
        //     articles: parsedData.articles,
        //     loading: false
        //     })
        // }
        // this.setState({ page: state.page + 1 });
        setPage(page+1)
        updateNews();

    }
    const fetchMoreData = async () => {
        const url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a863a1193f6a47db890c4cfc25ab0a07&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        // this.setState({
        //     articles: articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults

        // })
    };

    const handlePrevClick = async () => {
        // console.log("Next");
        //     if(!(state.page + 1 > Math.ceil(state.totalResults/props.pageSize))){

        //         let url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=business&&category=${props.category}&apiKey=a863a1193f6a47db890c4cfc25ab0a07&page=${ state.page - 1 }&pageSize=${props.pageSize}`;
        //         this.setState({loading:true});
        //         let data = await fetch(url);
        //         console.log(data);
        //         let parsedData = await data.json();
        //         this.setState({page: state.page - 1 ,
        //         articles: parsedData.articles,
        //         loading: false
        //         })
        // }
        // this.setState({ page: state.page - 1 });
        setPage(page-1);
        updateNews();
    }

    {
        // console.log("render")
        return (
            <>
                <div className='container my-3'>
                    <h1 className='text-center' style={{margin:'35px 0px' , marginTop: '90px'}}>NewMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                    {loading && <Spinner />}
                    <InfiniteScroll dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row">
                                {articles?.map((element) => {
                                    return <div className="col-md-4" key={element.url}><NewsItem title={element.title ? element?.title.slice(0, 40) : ""} description={element.description ? element?.description.slice(0, 88) : ""} urlToImage={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                                {/* <div className="col-md-3"><NewsItem title="myTitle" description = "mydesc"/></div>
               {<div className="col-md-4"><NewsItem title= "NewMonkey" description = "description" imageUrl = "ineinefeinf" newsUrl = "kdfenfidfndinf" /></div>}
        {/* <div className="col-md-3"><NewsItem title="myTitle" description = "mydesc"/></div> */}
                                {/* <NewsItem title="myTitle" description = "mydesc"/> */}
                            </div>
                            </div>
                    </InfiniteScroll>


                    <div className='d-flex justify-content-between container'>
                        <button disabled={page <= 1} className='btn btn-sm btn-dark' onClick={handlePrevClick}>&larr; Previous Page </button>
                        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className='btn btn-sm btn-dark' onClick={handleNextClick}>Next Page &rarr;</button>

                    </div>
                </div>
            </>
        )
    }
}


News.defaultProps = {
    pageSize: 8,
    country: 'in',
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
