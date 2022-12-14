import ExpenseItem from "./components/ExpenseItem";
function App() {
 const expenses = [
   {
     title: "Education fees",
     amount: 500.0,
     date: new Date(2018, 11, 4),
   },
   {
     title: "Domestic expenditure",
     amount: 1000.0,
     date: new Date(2022, 10, 14),
   },
   {
     title: "Hostel Dues",
     amount: 200.0,
     date: new Date(2019, 8, 24),
   },
   {
     title: "Car Expense",
     amount: 300.0,
     date: new Date(2021, 5, 19),
   },
 ];
 return (
   <>
     <h1>Let's get started</h1>
     
     <ExpenseItem
       date={expenses[0].date}
       title={expenses[0].title}
       amount={expenses[0].amount}
     />

     <ExpenseItem
       date={expenses[1].date}
       title={expenses[1].title}
       amount={expenses[1].amount}
     />
     <ExpenseItem
       date={expenses[2].date}
       title={expenses[2].title}
       amount={expenses[2].amount}
     />
      <ExpenseItem
       date={expenses[3].date}
       title={expenses[3].title}
       amount={expenses[3].amount}
     />
  
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


































 
