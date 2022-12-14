import Expenses from './components/Expenses';

function App() {
 
 return (
   <>
     <h1>Let's get started</h1>
     <Expenses />
   </>
 );
}

export default App;





















/* import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Education fees",
      amount: 500.0,
      date: new Date(22, 11, 4),
    },  
    {
      id: 2,
      title: "Domestic expenditure",
      amount: 1000.0,
      date: new Date(22, 10, 14),
    },  
    { id: 3, title: "Hostel Dues", amount: 200.0, date: new Date(22, 8, 24) },
    { id: 4, title: "Car Expense", amount: 300.0, date: new Date(22, 6, 14) },
  ];  
  return (
    <>
      <h1>Let's get started</h1>
      {expenses.map((data) => (
        <ExpenseItem
        key={data.id}
        date={data.date}
        title={data.title}
        amount={data.amount}
        />
        ))}
      </>  
  );    
}  

export default App;

 */ 


































 
