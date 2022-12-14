import ExpenseItem from "./ExpenseItem";

function Expenses() {
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


export default Expenses;