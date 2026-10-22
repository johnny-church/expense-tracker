// we declare expense and give it an empty array/container for objects
const expenses = [];
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
    console.log(name,amount,category);
});