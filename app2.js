//Part 2 - Inheriting property of another object

// constructor of phone
function Phone(name, year, modelno, maxcap){
  this.name = name;
  this.year = year;
  this.modelno = modelno;
  this.maxcap = maxcap;

  // this.phonedetails = function () {
  //   return `${this.name} was introduced in the year ${year}
  //   with model no ${$modelno} and has maximum capacity of ${mapcap}`;
  // };
}

// Creating prototype
Phone.prototype.phonedetails = function () {
  return `${this.name} was introduced in the year ${this.year}
  with model no ${this.modelno} and has maximum capacity of ${this.maxcap}`;
};

// constructor of samsung
function Samsung(name, year, modelno, maxcap, price) {
  Phone.call(this, name, year, modelno, maxcap);
  this.price = price;
}

// Instantiating Samsung object
const samsung1 = new Samsung('Samsung Galaxy Note 10', '2019', 'Note10', '256GB', '1449.99');

console.log(samsung1);

// Inherit Prototype method
Samsung.prototype = Object.create(Phone.prototype);

const samsung2 = new Samsung('Samsung Galaxy Note 10', '2019', 'Note10', '256GB', '1449.99');

// Use magazine constructor
Samsung.prototype.constructor = Samsung;
console.log(samsung2);
console.log(samsung2.phonedetails());
