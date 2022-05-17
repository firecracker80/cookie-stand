'use strict';

let city = [];

const parentElement = document.getElementById('cityProfiles');

let tableElem = document.createElement('table');
parentElement.appendChild(tableElem);

let hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

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

busHrs();

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

renderAllCities();


// const seattle = {
//   name: 'Seattle',
//   hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
//   hourlyCustMin: 23,
//   hourlyCustMax: 65,
//   avgCookiesPerCust: 6.3,
//   customers: [],
//   cookies: [],
//   calcCustPerHr: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
//       this.customers.push(custNum);
//     }
//   },
//   getCookiePerHr: function() {
//     this.calcCustPerHr();
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
//       this.cookies.push(cookieNum);
//     }
//   },
// getDailyTotal: function() {
//     this.getCookiePerHr();
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookieDailyTotal = Math.floor(this.avgCookiesPerCust * this.customers [i]);
//       this.cookies.push(cookieNum);
//     }
//   },

//   render: function() {
//     this.getCookiePerHr();
//       const parentElement = document.getElementById('cityProfiles');

//       const section = document.createElement('section');
//       parentElement.appendChild(section);

//       const h2 = document.createElement('h2');
//       h2.textContent = this.name;
//       section.appendChild(h2);

//       const ul = document.createElement('ul');
//       section.appendChild(ul);

//       for (let i = 0; i < this.hours.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
//         ul.appendChild(li);
//       }

//   }
// };

// seattle.render();
// console.log(seattle);

// const tokyo = {
//   name: 'Tokyo',
//   hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
//   hourlyCustMin: 3,
//   hourlyCustMax: 24,
//   avgCookiesPerCust: 1.2,
//   customers: [],
//   cookies: [],
//   calcCustPerHr: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
//       this.customers.push(custNum);
//     }
//   },
//   getCookiePerHr: function() {
//     this.calcCustPerHr();
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
//       this.cookies.push(cookieNum);
//     }
//   },

//   render: function() {
//     this.getCookiePerHr();
//       const parentElement = document.getElementById('cityProfiles');

//       const section = document.createElement('section');
//       parentElement.appendChild(section);

//       const h2 = document.createElement('h2');
//       h2.textContent = this.name;
//       section.appendChild(h2);

//       const ul = document.createElement('ul');
//       section.appendChild(ul);

//       for (let i = 0; i < this.hours.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
//         ul.appendChild(li);
//       }

//   }
// };

// tokyo.render();
// console.log(tokyo);

// const dubai = {
//   name: 'Dubai',
//   hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
//   hourlyCustMin: 11,
//   hourlyCustMax: 38,
//   avgCookiesPerCust: 3.7,
//   customers: [],
//   cookies: [],
//   calcCustPerHr: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
//       this.customers.push(custNum);
//     }
//   },
//   getCookiePerHr: function() {
//     this.calcCustPerHr();
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
//       this.cookies.push(cookieNum);
//     }
//   },

//   render: function() {
//     this.getCookiePerHr();
//       const parentElement = document.getElementById('cityProfiles');

//       const section = document.createElement('section');
//       parentElement.appendChild(section);

//       const h2 = document.createElement('h2');
//       h2.textContent = this.name;
//       section.appendChild(h2);

//       const ul = document.createElement('ul');
//       section.appendChild(ul);

//       for (let i = 0; i < this.hours.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
//         ul.appendChild(li);
//       }

//   }
// };

// dubai.render();
// console.log(dubai);

// const paris = {
//   name: 'Paris',
//   hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
//   hourlyCustMin: 20,
//   hourlyCustMax: 38,
//   avgCookiesPerCust: 2.3,
//   customers: [],
//   cookies: [],
//   calcCustPerHr: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
//       this.customers.push(custNum);
//     }
//   },
//   getCookiePerHr: function() {
//     this.calcCustPerHr();
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
//       this.cookies.push(cookieNum);
//     }
//   },

//   render: function() {
//     this.getCookiePerHr();
//       const parentElement = document.getElementById('cityProfiles');

//       const section = document.createElement('section');
//       parentElement.appendChild(section);

//       const h2 = document.createElement('h2');
//       h2.textContent = this.name;
//       section.appendChild(h2);

//       const ul = document.createElement('ul');
//       section.appendChild(ul);

//       for (let i = 0; i < this.hours.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
//         ul.appendChild(li);
//       }

//   }
// };

// paris.render();
// console.log(paris);

// const lima = {
//   name: 'Lima',
//   hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
//   hourlyCustMin: 2,
//   hourlyCustMax: 16,
//   avgCookiesPerCust: 4.6,
//   customers: [],
//   cookies: [],
//   // total: [],
//   calcCustPerHr: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
//       this.customers.push(custNum);
//     }
//   },
//   getCookiePerHr: function() {
//     this.calcCustPerHr();
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
//       this.cookies.push(cookieNum);
//     }
//   },

//   render: function() {
//     this.getCookiePerHr();
//       const parentElement = document.getElementById('cityProfiles');

//       const section = document.createElement('section');
//       parentElement.appendChild(section);

//       const h2 = document.createElement('h2');
//       h2.textContent = this.name;
//       section.appendChild(h2);

//       const ul = document.createElement('ul');
//       section.appendChild(ul);

//       for (let i = 0; i < this.hours.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
//         ul.appendChild(li);
//       }

//   }
// };

// lima.render();
// console.log(lima);
// //got from mdn web docs
function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
