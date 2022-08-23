import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

const NewsItem = (props) => {    
{
      let {title , description , urlToImage , newsUrl , author , date , source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndez:'1'}}>{source}
  </span>
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} {description}</h5>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}  </small></p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href= {newsUrl} target ="_blank"className="btn btn-sm btn-primary">Read More </a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
