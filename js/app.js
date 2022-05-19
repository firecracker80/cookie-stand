'use strict';

let city = [];

const parentElement = document.getElementById('cityProfiles');

let tableElem = document.createElement('table');
parentElement.appendChild(tableElem);

let hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

let tableFooter = document.createElement('tfoot');

function Cities(name, hourlyCustMin, hourlyCustMax, avgCookiesPerCust) {
  this.name = name;
  this.hourlyCustMin = hourlyCustMin;
  this.hourlyCustMax = hourlyCustMax;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customers = [];
  this.cookies = [];
  this.dailyTotal = 0;
  city.push(this);
}


Cities.prototype.calcCustPerHr = function (){
  for (let i = 0; i < hours.length; i++) {
    let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
    this.customers.push(custNum);
  }
};

Cities.prototype.getCookiePerHr = function (){
  this.calcCustPerHr();
  for (let i = 0; i < hours.length; i++) {
    let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
    this.cookies.push(cookieNum);
    this.dailyTotal += cookieNum;
  }
};

Cities.prototype.render = function(){
  this.getCookiePerHr();
  
  let rowHeader = document.createElement('tr');
  tableElem.appendChild(rowHeader);
  
  let headerCell = document.createElement('th');
  headerCell.textContent = this.name;
  rowHeader.appendChild(headerCell);
  
  for (let i = 0; i < hours.length; i++) {
    let cookieData = document.createElement('td');
    rowHeader.appendChild(cookieData);
    cookieData.textContent = this.cookies[i];
  }
  
  let dailyTotal = document.createElement('th');
  dailyTotal.textContent = this.dailyTotal;
  rowHeader.appendChild(dailyTotal);
  
};

function busHrs(){
  let rowHr = document.createElement('tr');
  tableElem.appendChild(rowHr);

  let hrCell = document.createElement('th');
  hrCell.textContent = "City";
  rowHr.appendChild(hrCell);
  for (let i = 0; i < hours.length; i++){
    let hour = document.createElement('th');
    hour.textContent = hours[i];
    rowHr.appendChild(hour);
  }

  let totalCell = document.createElement('th');
  totalCell.textContent = "Daily Total";
  rowHr.appendChild(totalCell);
}


function hourlyTotal() {
  let totalArr = [];
  
  let total = 0;
  for(let i = 0; i < hours.length; i++){
    let hrTotal = 0;
    for(let j = 0; j < city.length; j++){
      hrTotal += city[j].cookies[i];
      
    }
    
    totalArr.push(hrTotal);
    total += hrTotal;
   

  }
  console.log(totalArr);
  console.log(total);

  let rowFr = document.createElement('tr');
  // tableElem.appendChild(rowFr);

  let hrCell = document.createElement('th');
  hrCell.textContent = "Total";
  rowFr.appendChild(hrCell);
  for (let i = 0; i < hours.length; i++){
    let totalNumCell = document.createElement('th');
    totalNumCell.textContent = totalArr[i];
    rowFr.appendChild(totalNumCell);
  }

  let totalTotalCell = document.createElement('th');
  totalTotalCell.textContent = total;
  rowFr.appendChild(totalTotalCell);
  tableFooter.appendChild(rowFr);
  tableElem.appendChild(tableFooter);
}


new Cities('Seattle', '23', '65', '6.3');
new Cities('Tokyo', '3', '24', '1.2');
new Cities('Dubai', '11', '38', '3.7');
new Cities('Paris', '20', '38', '2.3');
new Cities('Lima', '2', '16', '4.6');

function renderAllCities(){
  for(let i = 0; i < city.length; i++){
    city[i].render();
  }
}

busHrs();
renderAllCities();
hourlyTotal();

let storeForm = document.getElementById('storeForm');


function handleSubmit(event){
  event.preventDefault();

  let cityName = event.target.cityName.value;
  let custMin = parseInt (event.target.custMin.value);
  let custMax = parseInt (event.target.custMax.value);
  let avgCust = parseFloat (event.target.avgCust.value);

  let newCity = new Cities(cityName, custMin, custMax, avgCust);
  console.log(newCity);
  // newCity.busHrs();
  tableFooter.innerHTML = '';
  newCity.render();
  hourlyTotal();

  storeForm.reset();

}

storeForm.addEventListener('submit', handleSubmit);
console.log(handleSubmit);

function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
