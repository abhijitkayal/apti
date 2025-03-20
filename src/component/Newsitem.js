import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imageurl,newsUrl,author,date}=this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>{author} {date}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
