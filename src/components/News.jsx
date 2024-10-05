// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react'
import NewItem from './NewItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import {countercontext} from '../../context/context';
import { useSelector, useDispatch } from 'react-redux'
import { setPrompt } from '../counter/counterSlice'

const News = (props) => {

    const prompt = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    // static defaultProps = {
    //     country: "in",
    //     category: "general",
    //     pageSize: 20
    // }
    // static propTypes = {
    //     country: PropTypes.string,
    //     category: PropTypes.string,
    //     pageSize: PropTypes.number
    // }

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    // articles = []
    // constructor() {
    //     super();
    //     // console.log("This is News component")
    //     this.state = {
    //         articles: this.articles,
    //         loading: false,
    //         page: 1,
    //         totalResults: 0
    //     }
    // }

    const capitalise = (string) => {
        if (!string) return ""; // Check if the string is empty or null

        const new_string = string.charAt(0).toUpperCase() + string.slice(1);
        return new_string;
    }

    const particular = async (key) => {
        setloading(true);
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        console.log(url)
        
        try {
            let response = await fetch(url);
            let parsedData = await response.json(); // Parse the JSON response
    
            // Check if articles are returned
            if (parsedData.totalResults === 0) {
                console.warn("No articles found for the given query parameters.");
                setarticles([]); // Clear articles if none found
            } else {
                setarticles(parsedData.articles.filter(article =>
                    (new RegExp(`\\b${key}\\b`, "i")).test(article.title) || (new RegExp(`\\b${key}\\b`, "i")).test(article.description)
                ));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            props.setProgress(100);
            setloading(false);
        }
    };
    
    

        useEffect(() => {
            particular(prompt);
        }, [prompt]);
        

    const UpdateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        // this.setState({ loading: true })
        let data = await fetch(url)
        let parsed_data = await data.json()
        // console.log(parsed_data)
        props.setProgress(70)
        setarticles(parsed_data.articles)
        setloading(false)
        // this.setState({
        //     articles: parsed_data.articles,
        //     loading: false
        // })
        props.setProgress(100)
        // document.title = `${props.category !== "general" ? this.capitalise(props.category) + "-BharatNews" : "BharatNews"}`;
    }

    useEffect(() => {
        UpdateNews()
    }, [])

    // async componentDidMount() {
    //     this.UpdateNews()
    // }

    // handleOnPrevClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     });
    //     this.UpdateNews()
    // }



    // handleOnNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     });
    //     this.UpdateNews()
    // }

    const fetchData = async () => {
        // this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        // this.setState({ loading: true })
        setloading(true)
        let data = await fetch(url)
        let parsed_data = await data.json()
        // console.log(parsed_data)
        setarticles(articles.concat(parsed_data.articles))
        setloading(false)
        settotalResults(parsed_data.totalResults)
        // this.setState({
        //     articles: this.state.articles.concat(parsed_data.articles),
        //     loading: false
        // })
    }

    // render() {
    // console.log("render")
    return (
        <>
        <countercontext.Provider value = {{page,setpage}}>
            <div className='container my-3'>
                <h1 className='fs-1 text-decoration-underline fst-italic text-white text-center' style={ {marginTop: '100px'}}>{props.category != "general" ? capitalise(props.category) + "    Top-Headlines" : "BharatNews Top-Headlines"}</h1>
                <div className="text-center">
                    {loading && <Loading />}
                </div>
                <div className="row">
                    {/* {this.state.articles.map((e)=>{console.log(e)})} */}
                    {articles.map((e) => {
                        return (
                            <div className="col-md-6 col-lg-4  my-4" key={e.url}>
                                <NewItem title={e.title} desc={e.description} imgUrl={e.urlToImage?e.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"} newsUrl={e.url} source={e.source.name} author={e.author} date={e.publishedAt} />
                            </div>
                        )
                    })}


                </div>
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Loading />}
                >
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-around">
                        <button type="button" onClick={this.handleOnPrevClick} disabled={this.state.page <= 1} className="btn btn-light">&larr; Previous</button>
                        <button type="button" onClick={this.handleOnNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-light"> Next &rarr;</button>
                    </div> */}
            </div>
            </countercontext.Provider>
        </>
    )
                }
// }

News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 20
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}

export default News
