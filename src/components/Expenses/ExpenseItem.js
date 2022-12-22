import { useState } from "react";
import "../../styles/ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

let ExpenseItem = (props) => {

 const [title, setTitle] = useState(props.title);
 
    const clickHandler = () => {
    
      setTitle('Updated yp');
      console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Alter Title</button>
    </Card>
  );
};

export default ExpenseItem;
