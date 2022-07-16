function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 16);
  const expenseTitle = "Car insurance";
  const expenseAmount = 1234;

  return (
    <div>
      <div>{expenseDate.toISOString()}</div>
      <div>
        <div>{expenseTitle}</div>
        <div>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
