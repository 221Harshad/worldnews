import React from 'react'
import './Newsitem.css'
const NewsItem = ({title, description,urlToImage,url}) => {
  return (
    <div className='news-app'>
    
         <div className='news-item'>
          
            <img className='news-img' src={urlToImage} alt={urlToImage} />
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
         </div>
    </div>
   
  )
}

export default NewsItem