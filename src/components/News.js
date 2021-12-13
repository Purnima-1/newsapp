import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{
        "source": {
            "id": null,
            "name": "Sports Illustrated"
        },
        "author": "Albert Breer",
        "title": "MMQB: Rookie Micah Parsons Is the Key to a Transformed Cowboys Defense - Sports Illustrated",
        "description": "Dallas is thinking Super Bowl, and a first-rounder who does everything is the main difference from years past. Plus, remembering Demaryius Thomas, dramatic Bucs and 49ers wins, and more from Week 14.",
        "url": "https://www.si.com/nfl/2021/12/13/mmqb-week-14-micah-parsons-cowboys-defense-daily-cover",
        "urlToImage": "https://www.si.com/.image/t_share/MTg1OTQ2NjgzNDgwMjIxMzc5/daily-cover-micah-parson-dallas-cowboys-horizontal.jpg",
        "publishedAt": "2021-12-13T10:44:02Z",
        "content": "Micah Parsons isn’t hiding why he fell to 12th in last year’s draft—the Cowboys actually landed the former Penn State star after trading down from No. 10 with the division-rival Eagles—even if a lot … [+65227 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "NFL 2021 standings, playoff picture in Week 14: 49ers rise in NFC wild card, Colts emerge in AFC while idle - CBS Sports",
        "description": "A look at the NFL standings as Week 14 games come to a close",
        "url": "https://www.cbssports.com/nfl/news/nfl-2021-standings-playoff-picture-in-week-14-49ers-rise-in-nfc-wild-card-colts-emerge-in-afc-while-idle/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/13/7d903eef-113e-4935-af78-929387610960/thumbnail/1200x675/7912efba69d615637095163868be252e/1212-49ers.jpg",
        "publishedAt": "2021-12-13T05:54:10Z",
        "content": "Another week is nearly in the books in the NFL as the playoff races have become even more wild -- and confusing -- with one month of action still remaining. The league has seen 28 games decided by a … [+15396 chars]"
    },
    {
        "source": {
            "id": "talksport",
            "name": "TalkSport"
        },
        "author": "Michael Benson",
        "title": "Tyson Fury nominated for BBC Sports Personality of the Year Award 2021 alongside Raheem Sterling and Emma...",
        "description": "",
        "url": "https://talksport.com/sport/boxing/1001473/tyson-fury-bbc-spoty-emma-raducanu-lewis-hamilton/",
        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2021/12/talksport-spoty.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
        "publishedAt": "2021-12-13T09:40:35Z",
        "content": "Tyson Fury has been nominated for the BBC Sports Personality of the Year Award 2021, despite demanding not to be.\r\nThe WBC heavyweight world champion features on the six-person shortlist alongside To… [+2462 chars]"
    }
    ]
    constructor() {
        super();
        console.log('I am a constructor');
        this.state = { articles: this.articles, loading: false }

    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=110ca2c3c0454fc78977aba4488949b2"

        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })


    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={(element.url)}>
                            <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 96):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}




                </div>
            </div>
        )
    }
}

export default News
