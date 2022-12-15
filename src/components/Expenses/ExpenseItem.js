import '../../styles/ExpenseItem.css';
import Card from '../UI/Card';

import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {
  // const expenseDate = props.date;
  // const expenseTitle = props.title;
  // const expenseAmount = props.amount;
  // console.log(props);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
