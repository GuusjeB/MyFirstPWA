const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpg" },
  { name: "Voluptatem", image: "images/coffee2.jpg" },
  { name: "Explicabo", image: "images/coffee3.jpg" },
  { name: "Rchitecto", image: "images/coffee4.jpg" },
  { name: " Beatae", image: "images/coffee5.jpg" },
  { name: " Vitae", image: "images/coffee6.jpg" },
  { name: "Inventore", image: "images/coffee7.jpg" },
  { name: "Veritatis", image: "images/coffee8.jpg" },
  { name: "Accusantium", image: "images/coffee9.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
 document.addEventListener("DOMContentLoaded", showCoffees)

// register serviceWorker. 1. Check if serviceWorker is supported by browser.
// 2. listen to load event, pass name of SW to register worker.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

// budget app
const amountInput = document.getElementById("number");
const expenseInput = document.getElementById("number_e");
const addForm = document.getElementById("addForm");

const budgetAmount = document.getElementById("budgetAmount");
const balanceAmount = document.getElementById("balanceAmount");

var expensesTotal = document.getElementById("expensesTotal");
var budgetTotal = document.getElementById("budgetTotal");

// update the budget
function getBudgetAmount(amount) {
  if (!amount) {
    amountInput.style.border = "1px solid #b80c09";
    amountInput.placeholder = "input can not be empty";
    amountInput.style.color = "#b80c09";
    setTimeout(() => {
      amountInput.style.color = "#495057";
      amountInput.style.border = "1px solid gray";
    }, 3000);
  } else {
    budgetAmount.innerText = amount; // budget en balance wordt hetzelfde als je amount
    balanceAmount.innerText = parseInt(budgetAmount.innerText) - parseInt(expensesTotal.innerText)
    expenseForm.style.display = "block";
    budgetform.style.display = "none";
    editForm.style.display = "none";
    amountInput.value = ""; // WAarom dit?
  }
}

// update the new exp. and total expenses
function getExpenseAmount(amount) {
  if (!amount) {
    amountInput.style.border = "1px solid #b80c09";
    amountInput.placeholder = "input can not be empty";
    amountInput.style.color = "#b80c09";
    setTimeout(() => {
      amountInput.style.color = "#495057";
      amountInput.style.border = "1px solid gray";
    }, 3000);
  } else {
    expensesAmount.innerText = amount; // budget en balance wordt hetzelfde als je amount
    //balanceAmount.innerText = amount;
    expensesTotal.innerText = parseInt(expensesTotal.innerText) + parseInt(amount)
    balanceAmount.innerText = parseInt(budgetAmount.innerText) - parseInt(expensesTotal.innerText)
    expenseForm.style.display = "block";
    budgetform.style.display = "none";
    editForm.style.display = "none";
    amountInput.value = ""; // WAarom dit?
  }
}

// // update new balance
// function getBalanceAmount() {
//   if (!amount) {
//     amountInput.style.border = "1px solid #b80c09";
//     amountInput.placeholder = "input can not be empty";
//     amountInput.style.color = "#b80c09";
//     setTimeout(() => {
//       amountInput.style.color = "#495057";
//       amountInput.style.border = "1px solid gray";
//     }, 3000);
//   } else {
//     expensesAmount.innerText = amount; // budget en balance wordt hetzelfde als je amount
//     //balanceAmount.innerText = amount;
//     expensesTotal.innerText = parseInt(expensesTotal.innerText) + parseInt(amount)
//     expenseForm.style.display = "block";
//     budgetform.style.display = "none";
//     editForm.style.display = "none";
//     amountInput.value = ""; // WAarom dit?
//   }
// }

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getBudgetAmount(amountInput.value);
});

addForm_e.addEventListener("submit", (e) => {
  e.preventDefault();
  getExpenseAmount(expenseInput.value);
});

// // GRAPH
// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// //Read the data - change to commma seperated
// //d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",
// d3.csv("https://raw.githubusercontent.com/GuusjeB/MyFirstPWA/master/data/budget_flow.csv",
//   // When reading the csv, I must format variables:
//   function(d){
//     return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
//   },

//   // Now I can use this dataset:
//   function(data) {

//     // Add X axis --> it is a date format
//     var x = d3.scaleTime()
//       .domain(d3.extent(data, function(d) { return d.date; }))
//       .range([ 0, width ]);
//     svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x));

//     // Add Y axis
//     var y = d3.scaleLinear()
//       .domain([0, d3.max(data, function(d) { return +d.value; })])
//       .range([ height, 0 ]);
//     svg.append("g")
//       .call(d3.axisLeft(y));

//     // Add the line
//     svg.append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "steelblue")
//       .attr("stroke-width", 1.5)
//       .attr("d", d3.line()
//         .x(function(d) { return x(d.date) })
//         .y(function(d) { return y(d.value) })
//         )

// })