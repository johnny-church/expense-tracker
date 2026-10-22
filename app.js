// we declare expense and give it an empty array/container for objects
let expenses = [];
// let  js find the different ids , so we can work with them later
const form = document.getElementById("expense-form");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const list =document.getElementById("expense-list");
const total = document.getElementById("total");

let count=0;

form.addEventListener("submit",function(event){
    event.preventDefault();
    const name = nameInput.value.trim();
    const amount = Number(amountInput.value);
    const category =categoryInput.value ;
    if (name===""||amount<=0||isNaN(amount)){
        return;
    }
    const expense ={
        id : Date.now(),
        name:name,
        amount:amount,
        category:category,
    };
    expenses.push(expense);
    renderExpenses();
    form.reset();
});
function renderExpenses()
{
    list.innerHTML="";
    expenses.forEach(function(e)
{
    const li =document.createElement("li");
    li.textContent = `${e.name} -ksh${e.amount} (${e.category})` ; 
    const btn =document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click",function(){
        expenses= expenses.filter(function (x){
            return x.id !== e.id;
        });
        renderExpenses();
})
    li.appendChild(btn);
    list.appendChild(li);
});
};