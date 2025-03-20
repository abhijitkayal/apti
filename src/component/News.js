import React, { Component } from 'react'
import Newsitem from './Newsitem'
// import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class news extends Component {
    //     articles=[
//         {
//         "source": {
// "id": null,
// "name": "CleanTechnica"
// },
// "author": "David Waterworth",
// "title": "Bidirectional Charging — V2X — In Australia",
// "description": "As we commence our bush fire and flood season here in the Southern Hemisphere, the conversation continues in the electric vehicle community about the use of privately owned battery electric vehicles as an emergency backup in a crisis, or even possibly as a ba…",
// "url": "https://cleantechnica.com/2024/09/28/bidirectional-charging-v2x-in-australia/",
// "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/09/Hyundai-IONIQ-5-V2L.jpg",
// "publishedAt": "2024-09-29T03:55:16Z",
// "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nAs we commence our bush fire and flood season here in the Southern Hemisphere, the conversation continues in … [+8288 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Freerepublic.com"
// },
// "author": "FreeThink",
// "title": "The masterplan to end EV “range anxiety” forever....The US needs 28 million EV chargers by 2030. Here’s how it can get there.",
// "description": "It’s 2028. It’s been one year since you bought your first electric vehicle, and the transition has gone far smoother than you expected. You’ve never come close to having your battery die on the road, and any time you’ve needed to power up, you’ve had your pic…",
// "url": "https://freerepublic.com/focus/f-chat/4267782/posts",
// "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/09/Hyundai-IONIQ-5-V2L.jpg",
// "publishedAt": "2024-09-29T02:38:52Z",
// "content": "Skip to comments.\r\nThe masterplan to end EV range anxiety forever....The US needs 28 million EV chargers by 2030. Heres how it can get there.\r\nFreeThink ^\r\n | September 28, 2024\r\n | Kristin Houser\r\nP… [+12850 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Orlando Sentinel"
// },
// "author": "Richard Tribou, Orlando Sentinel",
// "title": "SpaceX and Boeing Starliner saga continues with Crew-9 launch to ISS",
// "description": "KENNEDY SPACE CENTER, Fla. — It’s not a rescue mission, but the two astronauts left behind by Boeing’s Starliner at the International Space Station will soon...",
// "url": "https://www.orlandosentinel.com/2024/09/28/with-hurricane-helene-past-spacex-to-try-1st-human-spaceflight-from-canaveral-launch-site/",
// "urlToImage": "https://s.yimg.com/ny/api/res/1.2/y5HuORo3tInqZ2Kv59Sgew--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03Mzc-/https://media.zenfs.com/en/orlando_sentinel_national_858/230a8384f9003eadff9fcca75339cace",
// "publishedAt": "2024-09-29T02:37:00Z",
// "content": "KENNEDY SPACE CENTER, Fla. Its not a rescue mission, but the two astronauts left behind by Boeings Starliner at the International Space Station will soon welcome their new ride home with the arrival … [+8653 chars]"
// }
// ]

  static defaultProps={
    country:'in',
    pagesize:'10',
    category:'general',
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }


constructor(){
    super();
    this.state={
        articles:[],
        loading:false,
        page:1
    }
}
async componentDidMount(){
  console.log(this.props.country);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aeabfb628944489d935fefb66ca4a9ca&page=2&pagesize=50`;
    // let url=`https://newsapi.org/v2/top-headlines?q=${this.props.category}&apiKey=aeabfb628944489d935fefb66ca4a9ca`;
    this.setState({loading:true});
   
    let data=await fetch(url);
    let parsedata=await data.json();
    console.log(parsedata.articles);
    this.setState({articles:parsedata.articles,totalresult:parsedata.articles.length,loading:false});
}
handleclicknext=async ()=>{
  if(this.state.page+1>Math.ceil(this.state.totalresult/10)){

  }
  else{
  let url=`https://newsapi.org/v2/top-headlines?q=tech&apiKey=aeabfb628944489d935fefb66ca4a9ca&page=${this.state.page+1}&country=${this.props.country}&pagesize=${this.props.pagesize}`;
  this.setState({loading:true});
    let data=await fetch(url);
    let parsedata=await data.json();
    this.setState({loading:false});
  this.setState({
    page:this.state.page+1,
    articles:parsedata.articles
    
  })
  console.log(this.state.totalresult);
}
}
handleclickprevious=async()=>{
  console.log("click");
  let url=`https://newsapi.org/v2/top-headlines?q=sports&apiKey=aeabfb628944489d935fefb66ca4a9ca&page=${this.state.page-1}pagesize=10`;
  this.setState({loading:true});
    let data=await fetch(url)
    let parsedata=await data.json();
    this.setState({loading:false});
  this.setState({
    page:this.state.page-1,
    articles:parsedata.articles
    
  })
 
}
  render() {
   
   
   
    return (
        <div className='container my-3'>
          <h1>News component</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
            { this.state.articles.map((element)=>{
             return <div className='col-md-4'  key={element.url}>
               <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,98):""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt}/>
               </div> 
         })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handleclickprevious}>previous</button>
        <button disabled={(this.state.page+1>Math.ceil(this.state.totalresult/10))} type="button" className="btn btn-success  "onClick={this.handleclicknext}>next</button>
        </div>
      </div>
    )
  }
}

export default news
