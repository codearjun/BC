"use strict";

const FED_TAX = 0.05;
const PROV_TAX = 0.09975;

const currency_formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

const percentage_formatter = new Intl.NumberFormat("en-CA", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})



function calc_tax() {

  let current_price = document.getElementById("idPrice").value;
  let current_diners = document.getElementById("idDiners").value;
  let current_satisfaction = document.getElementById("idSatisfaction").value;



  //String([current_satisfaction]);
 // let tip_p = [current_satisfaction];

  let nice = 0;

//   switch(current_satisfaction)
//   {
//     case "A":
//         nice = 0.2;
//         break;
//     case "B":
//         nice = 0.15;
//         break;
//   }

  if (current_satisfaction == "A") {
    nice = 0.2;
  }
  
  if (current_satisfaction == "B") {
    nice = 0.15;
  }
  
  if (current_satisfaction == "C") {
    nice = 0.1;
  }
  
  if (current_satisfaction == "D") {
    nice = 0;
  }

  let net_price = current_price / current_diners;
  let taxes =
    current_price * FED_TAX + current_price * PROV_TAX * current_diners;
  let fedtax = net_price * FED_TAX;
  let provtax = net_price * PROV_TAX;
  let toatlplustax = net_price + provtax + fedtax;



  let tipamount = net_price * nice;
  let grandtotal = tipamount + toatlplustax;
  let totalperdiner = grandtotal / current_diners;

  //document.getElementById("idResult").value = formatter.format(fedtax);
  document.getElementById("idResult2").value = currency_formatter.format(net_price);
  document.getElementById("idResult3").value = percentage_formatter.format(nice);
  document.getElementById("idResult4").value = currency_formatter.format(fedtax);
  document.getElementById("idResult5").value = currency_formatter.format(provtax);
  document.getElementById("idResult6").value = currency_formatter.format(toatlplustax);
  document.getElementById("idResult7").value = currency_formatter.format(tipamount);
  document.getElementById("idResult8").value = currency_formatter.format(grandtotal);
  
  //document.getElementById("idResult").textContent = "$" + taxes.toFixed(2);
}
