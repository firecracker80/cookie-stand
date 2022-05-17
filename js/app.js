'use strict';

const seattle = {
  name: 'Seattle',
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  hourlyCustMin: 23,
  hourlyCustMax: 65,
  avgCookiesPerCust: 6.3,
  customers: [],
  cookies: [],
  calcCustPerHr: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
      this.customers.push(custNum);
    }
  },
  getCookiePerHr: function() {
    this.calcCustPerHr();
    for (let i = 0; i < this.hours.length; i++) {
      let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
      this.cookies.push(cookieNum);
    }
  },

  render: function() {
    this.getCookiePerHr();
      const parentElement = document.getElementById('cityProfiles');
    
      const section = document.createElement('section');
      parentElement.appendChild(section);
    
      const h2 = document.createElement('h2');
      h2.textContent = this.name;
      section.appendChild(h2);
    
      const ul = document.createElement('ul');
      section.appendChild(ul);
      
      for (let i = 0; i < this.hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
        ul.appendChild(li);
      }
    
  } 
};

seattle.render();
console.log(seattle);

const tokyo = {
  name: 'Tokyo',
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  hourlyCustMin: 3,
  hourlyCustMax: 24,
  avgCookiesPerCust: 1.2,
  customers: [],
  cookies: [],
  calcCustPerHr: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
      this.customers.push(custNum);
    }
  },
  getCookiePerHr: function() {
    this.calcCustPerHr();
    for (let i = 0; i < this.hours.length; i++) {
      let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
      this.cookies.push(cookieNum);
    }
  },

  render: function() {
    this.getCookiePerHr();
      const parentElement = document.getElementById('cityProfiles');
    
      const section = document.createElement('section');
      parentElement.appendChild(section);
    
      const h2 = document.createElement('h2');
      h2.textContent = this.name;
      section.appendChild(h2);
    
      const ul = document.createElement('ul');
      section.appendChild(ul);
      
      for (let i = 0; i < this.hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
        ul.appendChild(li);
      }
    
  } 
};

tokyo.render();
console.log(tokyo);

const dubai = {
  name: 'Dubai',
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  hourlyCustMin: 11,
  hourlyCustMax: 38,
  avgCookiesPerCust: 3.7,
  customers: [],
  cookies: [],
  calcCustPerHr: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
      this.customers.push(custNum);
    }
  },
  getCookiePerHr: function() {
    this.calcCustPerHr();
    for (let i = 0; i < this.hours.length; i++) {
      let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
      this.cookies.push(cookieNum);
    }
  },

  render: function() {
    this.getCookiePerHr();
      const parentElement = document.getElementById('cityProfiles');
    
      const section = document.createElement('section');
      parentElement.appendChild(section);
    
      const h2 = document.createElement('h2');
      h2.textContent = this.name;
      section.appendChild(h2);
    
      const ul = document.createElement('ul');
      section.appendChild(ul);
      
      for (let i = 0; i < this.hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
        ul.appendChild(li);
      }
    
  } 
};

dubai.render();
console.log(dubai);

const paris = {
  name: 'Paris',
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  hourlyCustMin: 20,
  hourlyCustMax: 38,
  avgCookiesPerCust: 2.3,
  customers: [],
  cookies: [],
  calcCustPerHr: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
      this.customers.push(custNum);
    }
  },
  getCookiePerHr: function() {
    this.calcCustPerHr();
    for (let i = 0; i < this.hours.length; i++) {
      let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
      this.cookies.push(cookieNum);
    }
  },

  render: function() {
    this.getCookiePerHr();
      const parentElement = document.getElementById('cityProfiles');
    
      const section = document.createElement('section');
      parentElement.appendChild(section);
    
      const h2 = document.createElement('h2');
      h2.textContent = this.name;
      section.appendChild(h2);
    
      const ul = document.createElement('ul');
      section.appendChild(ul);
      
      for (let i = 0; i < this.hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
        ul.appendChild(li);
      }
    
  } 
};

paris.render();
console.log(paris);

const lima = {
  name: 'Lima',
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  hourlyCustMin: 2,
  hourlyCustMax: 16,
  avgCookiesPerCust: 4.6,
  customers: [],
  cookies: [],
  // total: [],
  calcCustPerHr: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let custNum = random (this.hourlyCustMin, this.hourlyCustMax);
      this.customers.push(custNum);
    }
  },
  getCookiePerHr: function() {
    this.calcCustPerHr();
    for (let i = 0; i < this.hours.length; i++) {
      let cookieNum = Math.floor(this.avgCookiesPerCust * this.customers [i]);
      this.cookies.push(cookieNum);
    }
  },

  render: function() {
    this.getCookiePerHr();
      const parentElement = document.getElementById('cityProfiles');
    
      const section = document.createElement('section');
      parentElement.appendChild(section);
    
      const h2 = document.createElement('h2');
      h2.textContent = this.name;
      section.appendChild(h2);
    
      const ul = document.createElement('ul');
      section.appendChild(ul);
      
      for (let i = 0; i < this.hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.hours[i] + ': ' + this.cookies [i] + ' cookies';
        ul.appendChild(li);
      }

      // const li = document.createElement('li');
      // li.textContent = `Total: ${this.total} cookies`;
      // ul.appendChild('li');
    
  } 
};

lima.render();
console.log(lima);
//got from mdn web docs
function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
