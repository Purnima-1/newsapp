import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log('I am a constructor');
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=110ca2c3c0454fc78977aba4488949b2&page=1"

        let data = await fetch(url)
        let parsedData = await data.json()

        // let parsedData = await fetch(url)
        //     .then(data => data.json())

        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    handlePrevClick = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=110ca2c3c0454fc78977aba4488949b2&page=${this.state.page - 1}`;

        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

    handleNextClick = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=110ca2c3c0454fc78977aba4488949b2&page=${this.state.page + 1}`;

        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center'>NewsMonkey - Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={(element.url)}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 96) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button"  disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> 
            </div>
        )
    }
}

export default News
