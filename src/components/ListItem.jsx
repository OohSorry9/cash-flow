import React from 'react'
import './css/listItem.css'

import food from "../assets/ListIcons/food.png"
import bills from "../assets/ListIcons/bills.png"
import entertainment from "../assets/ListIcons/entertainment.png"
import stipend from "../assets/ListIcons/stipend.png"
import grocery from "../assets/ListIcons/grocery.png"
import rides from "../assets/ListIcons/rides.png"

const icons = {
    food,
    bills,
    entertainment,
    stipend,
    grocery,
    rides
}

function ListItem({ data, deleteTransaction }) {
    
    console.log(data.category)
    function formatTransactionDate(timestamp) {
  const date = new Date(timestamp);
  const today = new Date();
  

  // Remove time so we're only comparing dates
  date.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffInDays = (today - date) / (1000 * 60 * 60 * 24);

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";

  return new Date(timestamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}


    return (
        <div className="list-item">
            <div className="left">
                <img className="list-item-img" src={icons[data.category.toLowerCase()]} alt={data.title} />
                <div className="details">
                    <h3>{data.title}</h3>
                    <p className="time">{formatTransactionDate(data.date)}</p>
                </div>
            </div>
            <div className="right">
                <div className={`amount ${data.type}`}>
                    <p>{data.type === "expense" ? `-${data.amount}` : `+${data.amount}`}</p>
                </div>
                <button className="delete-btn" onClick={()=>{
                    deleteTransaction(data.id)
                }}>❌</button>
            </div>
        </div>
    )
}

export default ListItem