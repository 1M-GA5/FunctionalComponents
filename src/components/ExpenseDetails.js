import './ExpenseDetails.css';

function ExpenseDetails(props) {
return (
<div className="expense-item__description">
<div className="expense-item__description ">{props.title}</div>
<div className="expense-item__price">${props.amount}</div>
</div>
);
}

export default ExpenseDetails;