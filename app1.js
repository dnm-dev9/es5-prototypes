// constructor of iphone
function iphone(name, year, modelno, maxcap){
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
iphone.prototype.phonedetails = function () {
  return `${this.name} was introduced in the year ${this.year}
  with model no ${this.modelno} and has maximum capacity of ${this.maxcap}`;
};

iphone.prototype.changemodelno = function(newmodelno) {
  this.modelno = newmodelno;
  this.modelchanged = true;
}

const iphone1 = new iphone('iphoneSE','2020','A2275','256GB');
const iphone2 = new iphone('iphone 11 Pro','2019','A2160','512GB');
const iphone3 = new iphone('iphone 11 Pro Max','2019','A2161','512GB');
const iphone4 = new iphone('iphone 11','2019','A2111','256GB');
const iphone5 = new iphone('iphone XS','2018','A1920','512GB');
const iphone6 = new iphone('iphone XS Max','2018','A1921','512GB');
const iphone7 = new iphone('iphone XR','2018','A1984','256GB');
const iphone8 = new iphone('iphone X','2017','A1865','256GB');
const iphone9 = new iphone('iphone 8','2017','A1863','256GB');

// console.log(iphone1);
// iphone1.changemodelno('A0000');
// console.log(iphone1);
console.log(iphone1.phonedetails());
console.log(iphone2.phonedetails());
console.log(iphone3.phonedetails());
console.log(iphone4.phonedetails());
console.log(iphone5.phonedetails());
console.log(iphone6.phonedetails());
console.log(iphone7.phonedetails());
console.log(iphone8.phonedetails());
console.log(iphone9.phonedetails());
