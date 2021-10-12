//Deep Advice
const data = [5, 10, 15, 25, 50];

//selctors
const amount = document.querySelector("#input-amount");
const numberOfPeople = document.querySelector("#people");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const percentButtons = document.querySelectorAll("#percent");
const custom = document.querySelector("#custom");
const resetButton = document.querySelector("#reset");

let inputAmount,
  totalPeople = 1;
// Event Listners
amount.addEventListener("change", () => {
  inputAmount = amount.value;
});
numberOfPeople.addEventListener("change", () => {
  totalPeople = numberOfPeople.value;
});

// data.forEach((n,i) => {
//     percentButtons[i].addEventListener('click', ()=>{
//         let tip = inputAmount * 0.01 * n * totalPeople;
//         let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
//         tipAmount.innerText = tip;
//         totalAmount.innerText = total;
//         console.log(n);
//     })
// })

for (let i in data) {
  percentButtons[i].addEventListener("click", () => {
    let tip = inputAmount * 0.01 * data[i] * totalPeople;
    let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
    tipAmount.innerText = tip.toFixed(2);
    totalAmount.innerText = total.toFixed(2);
    console.log(n);
  });
}
// percentButtons[0].addEventListener('click', ()=>{
//     let tip = inputAmount * 0.05 * totalPeople;
//     let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
//     tipAmount.innerText = tip;
//     totalAmount.innerText = total;
// })
// percentButtons[1].addEventListener('click', ()=>{
//     let tip = inputAmount * 0.1 * totalPeople;
//     let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
//     tipAmount.innerText = tip;
//     totalAmount.innerText = total;
// })
// percentButtons[2].addEventListener('click', ()=>{
//     let tip = inputAmount * 0.15 * totalPeople;
//     let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
//     tipAmount.innerText = tip;
//     totalAmount.innerText = total;
// })
// percentButtons[3].addEventListener('click', ()=>{
//     let tip = inputAmount * 0.25 * totalPeople;
//     let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
//     tipAmount.innerText = tip;
//     totalAmount.innerText = total;
// })
// percentButtons[4].addEventListener('click', ()=>{
//     let tip = inputAmount * 0.5 * totalPeople;
//     let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
//     tipAmount.innerText = tip;
//     totalAmount.innerText = total;
// })

custom.addEventListener("change", () => {
  let percent = custom.value;
  let tip = inputAmount * 0.01 * percent * totalPeople;
  let total = tip + parseInt(inputAmount) * parseInt(totalPeople);
  tipAmount.innerText = tip;
  totalAmount.innerText = total;
});

resetButton.addEventListener("click", () => {
  tipAmount.innerText = "0.00";
  totalAmount.innerText = "0.00";
  amount.value = "";
});

// const btn1 = document.querySelector('#five');
// btn1.addEventListener('click', calc(inputAmount,totalPeople,5));

// //functions
// function calc(amount , people, percentage){
//     let tip = amount * percentage * 0.01 * people;
//     let sum = tipAmount + amount;
//     tipAmount.innerText = tip;
//     totalAmount.innerText = sum;
// }
