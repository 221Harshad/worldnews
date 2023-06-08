import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const Newslist = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=keyword&apiKey=3958017844294b57860e5673ce97ed23"
      );//news api
      //https://newsapi.org/v2/everything?q=keyword&apiKey=3958017844294b57860e5673ce97ed23
      console.log(response);
      setArticles(response.data.articles); //this articles is coming from the json object data this is not the state which we place above
    };
    getArticles();
  }, []);
  const styleplus = {
    background:"linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))",
  };
  const style = {
    background: 'linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)'
  }
  return (
    <div style={styleplus} >
      <div >
       
        { 
          <a style={{color:"red"}}  href="https://ktu.edu.in/home.htm;jsessionid=DBE1DFF1B59221E14298B7A216444B7C">
           -- LOGIN TO KTU SITE --
          </a>
        }
      </div>
      <div className="college-news">
        <h2>Whats happenning??</h2>
        <p style={{ color: "red"}}>
          *Attention Students* Mace Conveys the happy news of having
          international coaches to guide & train you for various sports events
          1.Football - Mr.Shifin UEFA COACH 2.Cricket - Mr.Raiphi& Team -Indian
          Cricketer 3.Volleyball - Ms.Radhika - Indian Team Coach 4.Badminton
          -Mr.Sajith - National level Coach Under their supervision a selection
          trial is scheduled tomorrow in our college campus *Selected Students
          will get a scholarship in their Tuition fees* B.Tech -9.30 am Poly
          -1.30 pm To register for selection trials fill in the form & submit
        </p>
        <div>
          <h4>
            <a href=" https://surveyheart.com/form/6475649c7d1fcb53a0057684">
              link to book your slot
            </a>
          </h4>
        </div>
      </div>
      {articles.map((article, index) => {
        return (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default Newslist;
