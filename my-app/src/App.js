import React, { useEffect, useState } from "react";
import './App.css';
import Card from './Card';

const fetchURL = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api"

function App() {
  const [data, setData] = useState(null)
  const getData = () =>
    fetch(`${fetchURL}/posts`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div className="container">
     {data?.map((card) =>
        <Card 
          key={card.id}
          title={card.title} 
          content={card.content} 
          largeImage={card.thumbnail.large} 
          smallImage={card.thumbnail.small}
          name={card.author.name} 
          role={card.author.role}
          avatarImage={card.author.avatar}
          date={card.date}
        />
        )}
    </div>
  )
}

export default App
